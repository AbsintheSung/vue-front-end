<script setup>
import axios from 'axios'
import CartDetailTable from '@/components/cart/CartDetailTable.vue'
import CartOrderTable from '@/components/cart/CartOrderTable.vue'
import { ref, computed } from 'vue'
const baseURL = import.meta.env.VITE_APP_API_URL
const apiName = import.meta.env.VITE_APP_API_NAME
const cartData = ref([])
const priceData = ref({})
const cartDataComputed = computed(() => cartData.value)
const getCartsData = async () => {
  const response = await axios(`${baseURL}/v2/api/${apiName}/cart`)
  const { final_total: finalTotal, total } = response.data.data
  priceData.value = { final_total: finalTotal, total }
  cartData.value = response.data.data.carts
}
const handleModifyQty = async (product) => {
  try {
    const response = await axios.put(
      `${baseURL}/v2/api/${apiName}/cart/${product.data.product_id}`,
      product
    )
    if (response.status === 200) {
      await getCartsData()
    }
  } catch (error) {
    console.log(error)
  }
}
const handleDeletProduct = (dataId) => {
  console.log(dataId)
}
getCartsData()
</script>
<template>
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
