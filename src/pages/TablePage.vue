<script setup lang="ts">

import TeamBody from "@/components/TeamBody.vue";
import Button from "@/components/Button.vue";
import {UseTableStore} from "@/stores/tableStore.ts";
import {onMounted} from "vue";
const useTableStore = UseTableStore()
onMounted(() => useTableStore.fetchTableData())
console.log(useTableStore.loading, 'loading')
</script>

<template>
  <table class="min-w-full bg-white">
    <thead class="bg-gray-100">
    <tr>
      <th class="px-4 py-3 text-center text-2xl font-medium text-black">
        Teams
      </th>
      <th class="px-4 py-3 text-center text-2xl font-medium text-black">
        Played
      </th>
      <th class="px-4 py-3 text-center text-2xl font-medium text-black">
        Won
      </th>
      <th class="px-4 py-3 text-center text-2xl font-medium text-black">
        Draw
      </th>
      <th class="px-4 py-3 text-center text-2xl font-medium text-black">
        Lost
      </th>
      <th class="px-4 py-3 text-center text-2xl font-medium text-black">
        For
      </th>
      <th class="px-4 py-3 text-center text-2xl font-medium text-black">
        Against
      </th>
      <th class="px-4 py-3 text-center text-2xl font-medium text-black">
        Goal Diff
      </th>
      <th class="px-4 py-3 text-center text-2xl font-medium text-black">
        Points
      </th>
    </tr>
    </thead>
    <tbody>
      <tr v-show="!useTableStore.loading" v-for="item in useTableStore.tableData" :key="item.id"
          class="border-b last:border-0 hover:bg-gray-50 transition">
        <td class="px-4 py-3 text-sm font-medium flex items-center">
          <img class="mr-5" :src="item.team.logo" width="50" />
          <span class="">{{ item.team.name }}</span>
        </td>
        <td class="px-4 py-3 text-sm text-center font-semibold">
          {{ item.played }}
        </td>
        <td class="px-4 py-3 text-sm text-center font-semibold">
          {{ item.won }}
        </td>
        <td class="px-4 py-3 text-sm text-center font-semibold">
          {{ item.draw }}
        </td>
        <td class="px-4 py-3 text-sm text-center font-semibold">
          {{ item.lose }}
        </td>
        <td class="px-4 py-3 text-sm text-center font-semibold">
          {{ item.goalFor }}
        </td>
        <td class="px-4 py-3 text-sm text-center font-semibold">
          {{ item.goalAway }}
        </td>
        <td class="px-4 py-3 text-sm text-center font-semibold">
          {{ item.goalDiff }}
        </td>
        <td class="px-4 py-3 text-sm text-center font-semibold">
          {{ item.points }}
        </td>
      </tr>
    </tbody>
    <tbody v-show="useTableStore.loading">
    <tr>
      <td colspan="3" class="px-4 py-6 text-center">
        <strong>Loading Table...</strong>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>

</style>