<script setup></script>
<template>
  <div class="flex flex-wrap gap-3 lg:flex-nowrap">
    <div class="relative basis-full overflow-x-auto shadow-md sm:rounded-lg lg:basis-2/3">
      <table class="w-full text-left text-sm rtl:text-right">
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
          <tr class="border-b">
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
    </div>

    <div class="relative basis-full overflow-x-auto shadow-md sm:rounded-lg lg:basis-1/3">
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
        <button class="my-4 w-full bg-black py-4 text-center text-[#FBFF22]">結帳</button>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
