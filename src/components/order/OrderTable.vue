<script setup>
defineProps({
  orderList: {
    type: Object,
    default: () => ({})
  },
  orderPrice: {
    type: Object,
    default: () => ({})
  }
})
</script>
<template>
  <table class="w-full text-left text-sm rtl:text-right">
    <thead>
      <tr>
        <th scope="col" class="hidden px-28 py-3 md:block"></th>
        <th scope="col" class="w-1/2 whitespace-nowrap px-6 py-3">商品名稱</th>
        <th scope="col" class="w-1/4 whitespace-nowrap px-6 py-3">數量</th>
        <th scope="col" class="w-1/4 whitespace-nowrap px-6 py-3">價格</th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="border-b border-b-slate-700"
        v-for="(itemValue, itemKey) in orderList"
        :key="itemKey"
      >
        <td class="hidden px-6 py-4 md:block">
          <img :src="itemValue.product.imageUrl" class="object-cover md:w-full" alt="圖片" />
        </td>
        <td scope="row" class="px-6 py-4 font-medium">{{ itemValue.product.title }}</td>
        <td class="px-6 py-4">{{ itemValue.qty }}</td>
        <td class="whitespace-nowrap px-6 py-4">NT$ {{ itemValue.total }}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr class="font-semibold">
        <th scope="row" class="hidden px-6 py-3 text-base md:block"></th>
        <th scope="row" class="px-6 py-3 text-base">總計</th>
        <td class="px-6 py-3">{{ orderPrice.qty }}個</td>
        <td class="whitespace-nowrap px-6 py-3">NT$ {{ orderPrice.total }}</td>
      </tr>
    </tfoot>
  </table>
</template>
<style scoped></style>
