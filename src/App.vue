<script setup>
// import { watch, onMounted } from 'vue'
import HeaderView from '@/layouts/HeaderView.vue'
import FooterView from '@/layouts/FooterView.vue'
import { RouterView } from 'vue-router'

// import { showLoading, hideLoading } from '@/plugins/loading-overlay'
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
import { useCartStore } from '@/stores/cart'
import { onMounted, ref } from 'vue'
const tickStore = useTicketStore()
const cartStore = useCartStore()
const isLoading = ref(false)
onMounted(async () => {
  // showLoading()
  isLoading.value = true
  await tickStore.fetchAllTicketData()
  await cartStore.fetchCartData()
  isLoading.value = false
  // hideLoading()
})
</script>

<template>
  <!-- <HeaderView />
  <main class="container">
    <RouterView />
  </main> -->
  <LoadingComponent :active="isLoading" />
  <div class="flex min-h-screen flex-col">
    <HeaderView />
    <main class="container flex flex-grow flex-col py-6">
      <RouterView />
    </main>
    <FooterView />
  </div>
</template>

<style scoped></style>
