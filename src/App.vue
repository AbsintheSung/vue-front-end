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
import { useTicketStore } from '@/stores/ticket'
import { onMounted } from 'vue'
const tickStore = useTicketStore()
onMounted(() => {
  tickStore.fetchAllTicketData()
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
