<script setup>
defineProps({
  userInfo: {
    type: Object,
    default: () => ({})
  }
})
</script>
<template>
  <table class="w-full font-noto font-semibold">
    <tbody>
      <tr class="border-b">
        <th class="w-[100px] px-4 py-3 text-left font-semibold text-gray-600">姓名</th>
        <td class="px-4 py-3 text-center text-gray-900">{{ userInfo.name }}</td>
      </tr>
      <tr class="border-b">
        <th class="px-4 py-3 text-left font-semibold text-gray-600">信箱</th>
        <td class="px-4 py-3 text-center text-gray-900">{{ userInfo.email }}</td>
      </tr>
      <tr class="border-b">
        <th class="px-4 py-3 text-left font-semibold text-gray-600">聯絡電話</th>
        <td class="px-4 py-3 text-center text-gray-900">{{ userInfo.tel }}</td>
      </tr>
      <tr>
        <th class="px-4 py-3 text-left font-semibold text-gray-600">聯絡地址</th>
        <td class="px-4 py-3 text-center text-gray-900">
          {{ userInfo.address }}
        </td>
      </tr>
      <tr>
        <th class="px-4 py-3 text-left font-semibold text-gray-600">付款狀態</th>
        <td
          class="px-4 py-3 text-center font-bold"
          :class="userInfo.is_paid ? 'text-green-600' : 'text-red-600'"
        >
          {{ userInfo.is_paid ? '已付款' : '未付款' }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
<style scoped></style>
