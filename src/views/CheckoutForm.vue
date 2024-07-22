<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { userSchema } from '@/plugins/vee-vailbate.config' // 导入验证规则配置

const schema = userSchema
console.log(schema)
</script>
<template>
  <div></div>
</template>
<style scoped></style>
