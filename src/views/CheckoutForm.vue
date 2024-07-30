<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import CheckTable from '@/components/checkout/CheckTable.vue'
import CheckForm from '@/components/checkout/CheckForm.vue'
import PayLine from '@/components/PayLine.vue'
const isLoading = ref(false)
import { useCartStore } from '@/stores/cart'
const cartStore = useCartStore()
const router = useRouter()
onMounted(async () => {
  isLoading.value = true
  await cartStore.fetchCartData()
  isLoading.value = false
  if (cartStore.getCartLength === 0) {
    router.push('/products')
  }
})
</script>
<template>
  <LoadingComponent :active="isLoading" />
  <PayLine :isOrderConfirm="true" />
  <CheckTable :cartData="cartStore.getCartData" :priceData="cartStore.getPriceData" />
  <CheckForm />
</template>
<style scoped></style>
