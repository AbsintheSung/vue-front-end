<script setup>
defineProps({
  isOrderConfirm: {
    type: Boolean,
    default: false
  },
  isPayConfirm: {
    type: Boolean,
    default: false
  },
  isPayComplete: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <div class="timeline relative mx-auto my-6 flex w-full justify-between md:w-2/3">
    <div class="flex flex-col items-center">
      <div
        class="flex h-12 w-12 items-center justify-center border-2 border-black bg-custom-bg-1"
        :class="[{ active: isOrderConfirm }]"
      >
        1
      </div>
      <p class="text-black">訂單確認</p>
    </div>
    <div class="flex flex-col items-center">
      <div
        class="flex h-12 w-12 items-center justify-center border-2 border-black bg-custom-bg-1"
        :class="[{ active: isPayConfirm }]"
      >
        2
      </div>
      <p class="text-black">結帳付款</p>
    </div>
    <div class="flex flex-col items-center">
      <div
        class="flex h-12 w-12 items-center justify-center border-2 border-black bg-custom-bg-1"
        :class="[{ active: isPayComplete }]"
      >
        3
      </div>
      <p class="text-black">付款完成</p>
    </div>
  </div>
</template>
<style scoped>
.active {
  background-color: black;
  color: #fbff22;
}
</style>
