<script setup>
import { computed } from 'vue'
const props = defineProps({
  orderItem: {
    type: Object,
    default: () => {
      return []
    }
  }
})

//為空陣列為true 非空為false
const isItemsEmpty = computed(() => Array.isArray(props.items) && props.items.length === 0)
function totalQuantity(orders) {
  return Object.values(orders).reduce((total, order) => total + order.qty, 0)
}
</script>
<template>
  <article class="mx-auto w-full font-yeseva md:w-2/3" v-if="!isItemsEmpty">
    <dl
      class="border-1 mb-2 flex flex-col gap-2 rounded-lg border border-gray-600 p-2 shadow"
      v-for="item in orderItem"
      :key="item.id"
    >
      <div class="flex">
        <dt class="w-1/3">訂單編號 :</dt>
        <dd class="w-2/3 text-center">{{ item.id }}</dd>
      </div>
      <div class="flex">
        <dt class="w-1/3">成立時間 :</dt>
        <dd class="w-2/3 text-center">
          <time :datetime="item.create_at">{{ item.create_at }}</time>
        </dd>
      </div>
      <div class="flex">
        <dt class="w-1/3">總件數 :</dt>
        <dd class="w-2/3 text-center">{{ totalQuantity(item.products) }} 個</dd>
      </div>
      <div class="flex">
        <dt class="w-1/3">總金額 :</dt>
        <dd class="w-2/3 text-center">
          <span>NT$ {{ item.total }} 元</span>
        </dd>
      </div>
      <div class="flex">
        <dt class="w-1/3">付款狀態 :</dt>
        <dd
          class="w-2/3 text-center font-bold"
          :class="item.is_paid ? 'text-green-600' : 'text-red-600'"
        >
          {{ item.is_paid ? '已付款' : '未付款' }}
        </dd>
      </div>
      <div class="flex" v-if="item.is_paid">
        <dt class="w-1/3">付款時間 :</dt>
        <dd class="w-2/3 text-center">
          <time datetime="2017-01-17">{{ item.paid_date }}</time>
        </dd>
      </div>
      <div class="flex sm:justify-end">
        <router-link
          :to="`/orderpay/${item.id}`"
          class="w-full border-2 border-black px-4 py-1 text-center sm:w-fit"
          >查看詳情</router-link
        >
      </div>
    </dl>
  </article>
</template>
<style scoped></style>
