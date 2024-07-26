<script setup>
import axios from 'axios'
import CartDetailTable from '@/components/cart/CartDetailTable.vue'
import CartOrderTable from '@/components/cart/CartOrderTable.vue'
import { ref, computed, onMounted, provide } from 'vue'
const baseURL = import.meta.env.VITE_APP_API_URL
const apiName = import.meta.env.VITE_APP_API_NAME
const cartData = ref([])
const priceData = ref({})
const isLoading = ref(false)
const cartDataComputed = computed(() => cartData.value)
const getCartsData = async () => {
  try {
    isLoading.value = true
    const response = await axios(`${baseURL}/v2/api/${apiName}/cart`)
    const { final_total: finalTotal, total } = response.data.data
    priceData.value = { final_total: finalTotal, total }
    cartData.value = response.data.data.carts
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}
const handleModifyQty = async (product) => {
  try {
    isLoading.value = true
    const response = await axios.put(
      `${baseURL}/v2/api/${apiName}/cart/${product.data.product_id}`,
      product
    )
    if (response.status === 200) {
      await getCartsData()
    }
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}
const handleDeletProduct = async (productId) => {
  try {
    isLoading.value = true
    const response = await axios.delete(`${baseURL}/v2/api/${apiName}/cart/${productId}`)
    if (response.status === 200) {
      await getCartsData()
    }
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
  // console.log(dataId)
}
const handleDeleteAll = async () => {
  try {
    isLoading.value = true
    const response = await axios.delete(`${baseURL}/v2/api/${apiName}/carts`)
    if (response.status === 200) {
      await getCartsData()
    }
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}
provide('handleDeleteAll', handleDeleteAll)
onMounted(async () => {
  isLoading.value = true
  await getCartsData()
  isLoading.value = false
})
</script>
<template>
  <LoadingComponent :active="isLoading" />
  <div class="flex flex-wrap gap-3 lg:flex-nowrap">
    <div class="relative basis-full shadow-md sm:rounded-lg lg:basis-2/3">
      <CartDetailTable
        :cartData="cartDataComputed"
        @sendQuent="handleModifyQty"
        @sendDeleId="handleDeletProduct"
      />
    </div>

    <div class="relative basis-full overflow-x-auto shadow-md sm:rounded-lg lg:basis-1/3">
      <CartOrderTable />
    </div>
  </div>
</template>
<style scoped></style>
