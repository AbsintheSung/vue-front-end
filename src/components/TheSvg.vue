<script setup>
import sprite from '@/assets/svg/icon.svg'
const props = defineProps({
  svgIcon: {
    title: String,
    default: '', //預設值
    required: true //若為true，代表傳進來的 props 一定要有此資料
  }
})
const svgStyle = props.svgIcon
</script>
<template>
  <svg class="h-full w-full">
    <use :href="`${sprite}#${svgStyle}`"></use>
  </svg>
</template>
<style scoped></style>
