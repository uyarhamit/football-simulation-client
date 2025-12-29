<script setup lang="ts">
import TeamList from "@/components/TeamList.vue";

import {useTeamStore} from "@/stores/teamStore.ts";
import {onMounted} from "vue";
const teamStore = useTeamStore();
onMounted(() => teamStore.fetchTeams());
</script>

<template>
  <TeamList :loading="teamStore.loading" :teams="teamStore.teams" />
</template>

<style scoped>

</style>