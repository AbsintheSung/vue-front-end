<script setup>
defineProps({
  cartData: {
    type: Array,
    default: () => {
      return []
    }
  }
})
const emits = defineEmits({
  sendQuent: () => {
    return true
  },
  sendDeleId: () => {
    return true
  }
})
const handleMinusQuenity = (id, qty) => {
  if (qty <= 1) return
  const temp = {
    data: {
      product_id: id,
      qty: qty - 1
    }
  }
  emits('sendQuent', temp)
}
const handlePlusQuenity = (id, qty) => {
  const temp = {
    data: {
      product_id: id,
      qty: qty + 1
    }
  }
  emits('sendQuent', temp)
}
const handleDelete = (id) => {
  emits('sendDeleId', id)
}
</script>
<template>
  <table v-if="cartData.lenght != 0" class="w-full px-2 text-left text-sm rtl:text-right">
    <thead class="text-xs uppercase">
      <tr>
        <th scope="col" class="hidden px-16 py-3 md:block">
          <span class="sr-only">Image</span>
        </th>
        <th scope="col" class="px-2 py-3">商品名稱</th>
        <th scope="col" class="px-2 py-3">商品數量</th>
        <th scope="col" class="px-2 py-3">商品價格</th>
        <th scope="col" class="px-2 py-3">刪除</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-black" v-for="cartItem in cartData" :key="cartItem.id">
        <td class="hidden p-2 md:block">
          <img
            :src="cartItem.product.imageUrl"
            class="max-h-full w-16 max-w-full md:w-32"
            alt="圖片"
          />
        </td>
        <td class="p-2 font-semibold">{{ cartItem.product.title }}</td>
        <td class="p-2">
          <div class="flex items-center">
            <button
              class="flex items-center justify-center rounded-full bg-black p-1"
              type="button"
              @click="handleMinusQuenity(cartItem.id, cartItem.qty)"
            >
              <FontAwesomeIcon :icon="['fas', 'minus']" class="text-[#FBFF22]" />
            </button>
            <div>
              <!-- <input
                type="number"
                id="first_product"
                class="block w-14 rounded-lg border px-2.5 py-1 text-sm"
                placeholder="1"
                required
                :disabled="true"
                valu="cartItem.qty"
              /> -->
              <p class="p-2">{{ cartItem.qty }}</p>
            </div>
            <button
              class="flex items-center justify-center rounded-full bg-black p-1"
              type="button"
              @click="handlePlusQuenity(cartItem.id, cartItem.qty)"
            >
              <FontAwesomeIcon :icon="['fas', 'plus']" class="text-[#FBFF22]" />
            </button>
          </div>
        </td>
        <td class="p-2 font-semibold">NT$ {{ cartItem.final_total }}</td>
        <td class="p-2">
          <button class="font-medium" @click="handleDelete(cartItem.id)">刪除</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<style scoped></style>
