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
const emits = defineEmits({
  sendOrderId: null //不進行驗證
})
//為空陣列為true 非空為false
const isItemsEmpty = computed(() => Array.isArray(props.items) && props.items.length === 0)
const handleDetail = (id) => {
  emits('sendOrderId', id)
}
</script>
<template>
  <div class="overflow-x-auto" v-if="!isItemsEmpty">
    <table class="w-full text-left text-sm rtl:text-right">
      <thead>
        <tr>
          <th scope="col" class="whitespace-nowrap px-6 py-3">訂單編號</th>
          <th scope="col" class="whitespace-nowrap px-6 py-3">成立時間</th>
          <th scope="col" class="whitespace-nowrap px-6 py-3">付款狀態</th>
          <th scope="col" class="whitespace-nowrap px-6 py-3">查看詳情</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b border-b-slate-700" v-for="item in orderItem" :key="item.id">
          <td scope="row" class="whitespace-nowrap px-6 py-4 font-medium">{{ item.id }}</td>
          <td class="px-6 py-4">{{ item.create_at }}</td>
          <td class="whitespace-nowrap px-6 py-4">{{ item.is_paid ? '已付款' : '未付款' }}</td>
          <td class="whitespace-nowrap px-6 py-4">
            <button
              class="border-2 border-black px-4 py-1 hover:bg-black hover:text-white"
              @click="handleDetail(item.id)"
            >
              查看
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped></style>
