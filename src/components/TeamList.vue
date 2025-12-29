<script setup lang="ts">

import type {Team} from "@/api/models/team.model.ts";
import {useFixtureStore} from "@/stores/fixtureStore.ts";
import router from "@/router";
import TeamBody from "@/components/TeamBody.vue";
import Button from "@/components/Button.vue";

defineProps<{loading: boolean, teams: Team[]}>()

const fixtureStore = useFixtureStore();


const handleClick = () => {
  fixtureStore.createFixtures();
  router.push('/fixtures');
}
</script>

<template>
  <table class="min-w-full bg-white">
    <thead class="bg-gray-100">
    <tr>
      <th colspan="3" class="px-4 py-3 text-center text-2xl font-medium text-black">
        Teams
      </th>
    </tr>
    </thead>
    <tbody v-show="!loading" v-for="team in teams" :key="team.id">
      <TeamBody :team="team" />
    </tbody>
    <tbody v-show="loading">
      <tr>
        <td colspan="3" class="px-4 py-6 text-center">
          <strong>Loading teams...</strong>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3" class="px-4 py-6 text-center">
          <Button @click="handleClick" :loading="fixtureStore.loading" :text="'Create Fixture'" />
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<style scoped>

</style>