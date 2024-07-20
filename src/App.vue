<script setup>
// import { watch, onMounted } from 'vue'
import { RouterView } from 'vue-router'
// import { useTicketStore } from '@/stores/ticket'
// const tickStore = useTicketStore()

// watch(
//   () => tickStore.ticketData,
//   (dataState) => {
//     const isEmpty = Object.keys(dataState).length === 0
//     isEmpty ? tickStore.fetchAllTicketData() : null
//   }
// )
// onMounted(async () => {
//   await tickStore.fetchAllTicketData()
// })
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
