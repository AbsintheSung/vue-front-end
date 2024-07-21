<script setup>
// import { watch, onMounted } from 'vue'
import HeaderView from '@/layouts/HeaderView.vue'
import FooterView from '@/layouts/FooterView.vue'
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
  <!-- <HeaderView />
  <main class="container">
    <RouterView />
  </main> -->
  <div class="flex min-h-screen flex-col">
    <HeaderView />
    <main class="container flex flex-grow flex-col py-6">
      <RouterView />
    </main>
    <FooterView />
  </div>
</template>

<style scoped></style>
