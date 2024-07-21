<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
defineProps({
  getFilterData: {
    type: Array,
    default: () => {
      return []
    }
  }
})
const handleFilter = (filterData) => {
  router.push(`/type-active/${filterData}`)
}
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <button
      v-for="filterItem in getFilterData"
      :key="filterItem"
      class="border-2 border-s-4 border-black px-3 py-1 hover:border-s-[#FBFF22]"
      @click="handleFilter(filterItem)"
    >
      {{ filterItem }}
    </button>
  </div>
</template>
<style scoped></style>
