<script setup>
import CartDetailTable from '@/components/cart/CartDetailTable.vue'
import CartOrderTable from '@/components/cart/CartOrderTable.vue'
</script>
<template>
  <div class="flex flex-wrap gap-3 lg:flex-nowrap">
    <div class="relative basis-full overflow-x-auto shadow-md sm:rounded-lg lg:basis-2/3">
      <CartDetailTable />
    </div>

    <div class="relative basis-full overflow-x-auto shadow-md sm:rounded-lg lg:basis-1/3">
      <CartOrderTable />
    </div>
  </div>
</template>
<style scoped></style>
