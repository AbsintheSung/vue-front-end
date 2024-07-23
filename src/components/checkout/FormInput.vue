<script setup>
import { Field, ErrorMessage } from 'vee-validate'
defineProps({
  inputInfo: {
    type: Object,
    default: () => {
      return {
        title: '',
        type: 'text',
        id: '',
        name: ''
      }
    }
  }
})
const userInput = defineModel('userInput', { type: String })
</script>
<template>
  <div class="mb-5">
    <label for="useremail" class="mb-2 block text-sm font-medium">{{ inputInfo.title }}</label>
    <Field
      :type="inputInfo.type"
      :id="inputInfo.id"
      :name="inputInfo.name"
      class="block w-full rounded-lg border-2 border-black bg-custom-bg-1 p-2.5 text-sm"
      :placeholder="inputInfo.placeholder"
      v-model="userInput"
    />
    <ErrorMessage :name="inputInfo.name" class="mt-2 text-sm font-bold text-red-600" />
    <!-- <p class="mt-2 text-sm font-bold text-red-600">Oops! Username already taken!</p> -->
  </div>
</template>
<style scoped></style>
