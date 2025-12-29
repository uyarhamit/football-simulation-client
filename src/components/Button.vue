<script setup lang="ts">
const props = defineProps<{loading: boolean, text: string}>()

const emit = defineEmits<{
  (e: "click"): void
}>()

const handleClick = () => {
  if (!props.loading) emit("click")
}
</script>

<template>
  <button
      @click="handleClick"
      :disabled="loading"
      class="px-5 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#0a2a6b] to-[#133b94]
           shadow-md border border-white/10
           hover:from-[#133b94] hover:to-[#1a4ec7]
           hover:cursor-pointer
           active:scale-[.97]
           transition-all duration-200 ease-out
    ">
    {{text}}
  </button>
</template>

<style scoped>

</style>