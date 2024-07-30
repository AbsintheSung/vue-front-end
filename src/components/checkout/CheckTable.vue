<script setup>
import { computed } from 'vue'
const props = defineProps({
  cartData: {
    type: Array,
    default: () => {
      return []
    }
  },
  priceData: {
    type: Object,
    default: () => {
      return {}
    }
  }
})
const productQty = computed(() => {
  if (props.cartData.length === 0) {
    return 0
  } else {
    return props.cartData.reduce((total, item) => total + item.qty, 0)
  }
})
</script>
<template>
  <div class="overflow-x-auto">
    <table class="w-full text-left font-noto text-sm rtl:text-right">
      <thead>
        <tr>
          <th scope="col" class="w-2/5 whitespace-nowrap px-6 py-3">商品名稱</th>
          <th scope="col" class="w-1/5 whitespace-nowrap px-6 py-3">數量</th>
          <th scope="col" class="w-2/5 whitespace-nowrap px-6 py-3">價格</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b border-b-slate-700" v-for="item in cartData" :key="item.id">
          <th scope="row" class="px-6 py-4 font-medium">
            <router-link class="hover:underline" :to="`/product-detail/${item.product.id}`">{{
              item.product.title
            }}</router-link>
          </th>
          <td class="px-6 py-4">{{ item.qty }}</td>
          <td class="px-6 py-4" v-if="item.coupon">
            <p>
              <del>NT$ {{ item.total }}</del>
            </p>
            <p class="text-xl font-bold">NT$ {{ item.final_total }}</p>
          </td>
          <td v-else class="px-6 py-4 text-xl font-bold">NT$ {{ item.total }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="font-semibold">
          <th scope="row" class="px-6 py-3 text-base">總計</th>
          <td class="px-6 py-3">{{ productQty }}</td>
          <td class="px-6 py-3 text-xl font-bold">NT$ {{ priceData.final_total }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
<style scoped></style>
