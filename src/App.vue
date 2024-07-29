<script setup>
import HeaderView from '@/layouts/HeaderView.vue'
import FooterView from '@/layouts/FooterView.vue'
import { RouterView } from 'vue-router'
import { useProductStore } from '@/stores/product'
import { useCartStore } from '@/stores/cart'
import { onMounted, ref } from 'vue'
const productStore = useProductStore()
const cartStore = useCartStore()
const isLoading = ref(false)
onMounted(async () => {
  isLoading.value = true
  await productStore.fetchAllProductData()
  await cartStore.fetchCartData()
  isLoading.value = false
})
</script>

<template>
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
