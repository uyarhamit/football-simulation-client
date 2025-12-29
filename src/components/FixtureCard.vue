<script setup lang="ts">
import type {Fixture} from "@/api/models/fixture.model.ts";
import Button from "@/components/Button.vue";
import {useSimulationStore} from "@/stores/simulationStore.ts";
import {useFixtureStore} from "@/stores/fixtureStore.ts";


defineProps<{fixture: Fixture}>()

const simulationStore = useSimulationStore();
const fixtureStore = useFixtureStore();

const handleFixtureSimulation = async (id: number) => {
  await simulationStore.startSimulationById(id)
  await fixtureStore.fetchFixtures();
}
</script>

<template>
  <div class="w-full max-w-xl bg-white rounded-2xl border border-gray-200 shadow-sm p-4 flex items-center justify-between">
    <!-- Teams -->
    <div class="flex flex-col gap-3" key="fixture.id">
      <h1 class="text-start text-[#133b94] font-bold">Week {{ fixture.week }}</h1>
      <!-- Team 1 -->
      <div class="flex items-center gap-3">
        <img :src="fixture.homeTeam.logo" class="w-10 rounded-full" />
        <span class="text-gray-800 font-medium">{{ fixture.homeTeam.name }}</span>
      </div>
      <!-- Team 2 -->
      <div class="flex items-center gap-3">
        <img :src="fixture.awayTeam.logo" class="w-10 rounded-full" />
        <span class="text-gray-800 font-medium">{{ fixture.awayTeam.name }}</span>
      </div>
    </div>
    <!-- Score -->
    <div class="text-center" v-if="fixture.played">
      <div class="text-lg font-bold text-gray-900">{{ fixture.homeGoal }}</div>
      <div class="text-lg font-bold text-gray-900 mt-2">{{ fixture.awayGoal }}</div>
    </div>
    <div class="text-center" v-if="!fixture.played">
      <Button :loading="false" :text="'Simulate'" @click="handleFixtureSimulation(fixture.id)" />
    </div>

  </div>

</template>

<style scoped>

</style>