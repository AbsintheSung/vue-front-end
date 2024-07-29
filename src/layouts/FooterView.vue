<script setup>
const footerYear = new Date().getFullYear()
</script>
<template>
  <footer class="border-t-2 border-black">
    <div class="container py-6">
      <p class="text-center font-noto">© {{ footerYear }} Figure. All Rights Reserved</p>
    </div>
  </footer>
</template>
<style scoped></style>
