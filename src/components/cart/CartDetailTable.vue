<script setup></script>
<template>
  <table class="w-full px-2 text-left text-sm rtl:text-right">
    <thead class="text-xs uppercase">
      <tr>
        <th scope="col" class="px-16 py-3">
          <span class="sr-only">Image</span>
        </th>
        <th scope="col" class="px-4 py-3">商品名稱</th>
        <th scope="col" class="px-4 py-3">商品數量</th>
        <th scope="col" class="px-4 py-3">商品價格</th>
        <th scope="col" class="px-4 py-3">刪除</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-black">
        <td class="p-4">
          <img src="" class="max-h-full w-16 max-w-full md:w-32" alt="Apple Watch" />
        </td>
        <td class="px-6 py-4 font-semibold">Apple Watch</td>
        <td class="px-6 py-4">
          <div class="flex items-center">
            <button class="" type="button">-</button>
            <div>
              <input
                type="number"
                id="first_product"
                class="block w-14 rounded-lg border px-2.5 py-1 text-sm"
                placeholder="1"
                required
              />
            </div>
            <button class="" type="button">+</button>
          </div>
        </td>
        <td class="px-6 py-4 font-semibold">$599</td>
        <td class="px-6 py-4">
          <a href="#" class="font-medium hover:underline">Remove</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<style scoped></style>
