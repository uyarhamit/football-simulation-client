<script setup lang="ts">
import type {Team} from "@/api/models/team.model.ts";

defineProps<{team: Team}>()
</script>

<template>
  <tr
      :key="team.id"
      class="border-b last:border-0 hover:bg-gray-50 transition">
    <td class="px-4 py-3 text-sm font-medium flex items-center">
      <img class="mr-5" :src="team.logo" width="50" />
      <span class="">{{ team.name }}</span>
    </td>
  </tr>
</template>

<style scoped>

</style>