<script setup>
defineProps({
  leftTitle: {
    type: String,
    default: 'RECENT'
  },
  rightTitle: {
    type: String,
    default: '近期活動'
  }
})
</script>
<template>
  <div class="container my-6">
    <div class="flex items-center justify-between border-2 border-black px-8 py-6">
      <p class="font-yeseva text-2xl font-normal md:text-6xl">{{ leftTitle }}</p>
      <p class="font-noto text-base font-bold md:text-4xl">{{ rightTitle }}</p>
    </div>
  </div>
</template>
<style scoped></style>
