<script setup lang="ts">

import FixtureCard from "@/components/FixtureCard.vue";

import {useFixtureStore} from "@/stores/fixtureStore.ts";
import { onMounted } from "vue";
import {useSimulationStore} from "@/stores/simulationStore.ts";
import Button from "@/components/Button.vue";

const fixtureStore = useFixtureStore();
const simulationStore = useSimulationStore();

const handleAllFixtureSimulation = async () => {
  await simulationStore.startSimulationAll();
  await fixtureStore.fetchFixtures();
}
onMounted(() => {
  if (!fixtureStore.fixtures.length) {
    fixtureStore.fetchFixtures();
  }
});

</script>

<template>
  <div class="flex justify-center py-2" v-if="fixtureStore.fixtures.length">
    <Button :loading="false" :text="'Simulate All'" @click="handleAllFixtureSimulation()" />
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-5 gap-5 m-5">
    <FixtureCard :key="fixture.id" :fixture="fixture" v-for="fixture in fixtureStore.fixtures" />
  </div>
</template>