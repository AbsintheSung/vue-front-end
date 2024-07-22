<script setup></script>
<template>
  <table class="w-full text-left text-sm rtl:text-right">
    <tbody>
      <tr class="border-b">
        <th scope="row" class="px-6 py-3 text-xs font-medium uppercase">金額</th>
        <td class="px-6 py-4 text-end">$2999</td>
      </tr>
      <tr class="border-b">
        <th scope="row" class="px-6 py-3 text-xs font-medium uppercase">付款方式</th>
        <td class="px-6 py-4 text-end">LinePay</td>
      </tr>
    </tbody>
  </table>
  <div class="p-6">
    <h3>套用優惠券</h3>
    <div class="flex w-full">
      <input type="text" class="my-2 flex-grow p-2" />
      <button class="flex-shrink-0">我是按鈕</button>
    </div>
    <button class="my-4 w-full bg-black py-4 text-center text-[#FBFF22]">確認</button>
  </div>
</template>
<style scoped></style>
