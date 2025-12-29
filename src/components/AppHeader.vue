<template>
  <header class="w-full bg-white shadow-sm border-b">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

      <!-- Logo / App Name -->
      <h1 class="text-xl font-semibold flex">
        <img src="/src/assets/svg/championsLeague.svg" alt="Logo" />
         <span class="px-2">Uefa Champions League</span>
      </h1>

      <!-- Navigation -->
      <nav class="flex gap-6 text-gray-600">
        <RouterLink
            to="/"
            class="hover:text-[#0a2a6b] transition"
            :class="{ 'border-b font-semibold text-[#133b94]': isActive('/') }"
        >
          Teams
        </RouterLink>

        <RouterLink
            to="/fixtures"
            class="hover:text-[#0a2a6b] transition"
            :class="{ 'border-b font-semibold text-[#133b94]': isActive('/fixtures') }"
        >
          Fixture
        </RouterLink>
        <RouterLink
            to="/table"
            class="hover:text-[#0a2a6b] transition"
            :class="{ 'border-b font-semibold text-[#133b94]': isActive('/table') }"
        >
          Table
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const isActive = (path) => route.path === path;
</script>
