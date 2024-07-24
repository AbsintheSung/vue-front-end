<script setup></script>
<template>
  <table class="w-full text-left text-sm rtl:text-right">
    <thead>
      <tr>
        <th scope="col" class="hidden px-28 py-3 md:block">
          <span class="sr-only">Image</span>
        </th>
        <th scope="col" class="w-1/2 whitespace-nowrap px-6 py-3">商品名稱</th>
        <th scope="col" class="w-1/4 whitespace-nowrap px-6 py-3">數量</th>
        <th scope="col" class="w-1/4 whitespace-nowrap px-6 py-3">價格</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-b-slate-700">
        <td class="hidden px-6 py-4 md:block">
          <img
            src="https://github.com/AbsintheSung/7TAO_webpage/blob/main/assets/images/event/02.jpg?raw=true"
            class="object-cover md:w-full"
            alt="圖片"
          />
        </td>
        <td scope="row" class="px-6 py-4 font-medium">我是商品名稱</td>
        <td class="px-6 py-4">123</td>
        <td class="whitespace-nowrap px-6 py-4">NT$ 3500</td>
      </tr>
    </tbody>
    <tfoot>
      <tr class="font-semibold">
        <th scope="row" class="hidden px-6 py-3 text-base md:block"></th>
        <th scope="row" class="px-6 py-3 text-base">總計</th>
        <td class="px-6 py-3">4個</td>
        <td class="whitespace-nowrap px-6 py-3">NT$ 6000</td>
      </tr>
    </tfoot>
  </table>
</template>
<style scoped></style>
