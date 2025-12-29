<script setup lang="ts">
  import AppHeader from "@/components/AppHeader.vue";
</script>

<template>
  <AppHeader />
  <main>
    <div class="min-h-screen flex justify-center items-center bg-gradient-to-r from-[#133b94] to-[#0a2a6b]">
      <div class="w-full px-4 sm:px-6 md:px-10 py-10">
        <div class="bg-white shadow rounded-2xl overflow-hidden border">
          <RouterView />
        </div>
      </div>
    </div>
  </main>
</template>