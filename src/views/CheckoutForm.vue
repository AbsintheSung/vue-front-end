<script setup>
import { ref, onMounted } from 'vue'
import CheckTable from '@/components/checkout/CheckTable.vue'
import CheckForm from '@/components/checkout/CheckForm.vue'
const isLoading = ref(false)
import { useCartStore } from '@/stores/cart'
const cartStore = useCartStore()
onMounted(async () => {
  isLoading.value = true
  await cartStore.fetchCartData()
  isLoading.value = false
})
</script>
<template>
  <LoadingComponent :active="isLoading" />
  <CheckTable :cartData="cartStore.getCartData" :priceData="cartStore.getPriceData" />
  <CheckForm />
</template>
<style scoped></style>
