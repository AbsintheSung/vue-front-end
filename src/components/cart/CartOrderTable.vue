<script setup>
const userCouponValue = defineModel('userInputCoupon', { type: String })
const props = defineProps({
  getPrice: {
    type: Object,
    defauit: () => ({})
  },
  postCoupon: {
    type: Function,
    defauit: () => {}
  },
  confirmJump: {
    type: Function,
    defauit: () => {}
  }
})
setTimeout(() => {
  console.log(props.getPrice.coupon)
}, 2000)
</script>
<template>
  <table class="w-full text-left font-yeseva text-sm rtl:text-right">
    <tbody>
      <tr class="border-b">
        <th scope="row" class="px-6 py-3 font-noto text-xs font-medium uppercase">金額</th>
        <td class="px-6 py-4 text-end">NT$ {{ getPrice.final_total }}元</td>
      </tr>
      <tr class="border-b">
        <th scope="row" class="px-6 py-3 font-noto text-xs font-medium uppercase">優惠券</th>
        <td v-if="getPrice.coupon" class="px-6 py-4 text-end">
          {{ getPrice.coupon.title }}
          <span class="text-green-700">折扣:{{ getPrice.coupon.percent }}%</span>
        </td>
        <td v-else class="px-6 py-4 text-end">無使用優惠</td>
        <!-- <td class="px-6 py-4 text-end">LinePay</td> -->
        <!-- <td class="px-6 py-4 text-end">無使用優惠</td> -->
      </tr>
    </tbody>
  </table>
  <div class="p-6 font-noto">
    <h3 class="mb-4">套用優惠券</h3>
    <span class="text-[12px] text-red-600"
      >注意:套用優惠時，請確認所有商品都在購物車內後，再輸入優惠碼。</span
    >
    <div class="flex w-full items-stretch">
      <input
        type="text"
        class="w-full flex-grow border-2 border-r-0 border-black bg-custom-bg-1 p-2 focus:outline-none"
        v-model="userCouponValue"
      />
      <button
        class="flex items-center justify-center border-2 border-l-0 border-black bg-black px-4"
        @click="postCoupon"
      >
        <FontAwesomeIcon :icon="['fas', 'paper-plane']" class="text-[#FBFF22]" />
      </button>
    </div>
    <button class="my-4 w-full bg-black py-4 text-center text-[#FBFF22]" @click="confirmJump">
      確認
    </button>
  </div>
</template>
<style scoped></style>
