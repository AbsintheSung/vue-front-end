<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { userSchema } from '@/plugins/vee-vailbate.config'
import { ref } from 'vue'
import imgIcon from '@/assets/images/sparkler.png'
import FormInput from './FormInput.vue'
const initUserInput = {
  name: '',
  email: '',
  tel: '',
  address: '',
  message: ''
}
const userInput = ref({
  name: '',
  email: '',
  tel: '',
  address: '',
  message: ''
})
const inputInfo = [
  { title: '電子信箱', type: 'email', id: 'email', name: 'useremail', placeholder: '請輸入Email' },
  { title: '姓名', type: 'text', id: 'name', name: 'username', placeholder: '請輸入姓名' },
  { title: '電話', type: 'tel', id: 'tel', name: 'userphone', placeholder: 'ex:0900000000' },
  { title: '地址', type: 'text', id: 'address', name: 'useraddress', placeholder: '請輸入聯絡地址' }
]

const schema = userSchema
</script>
<template>
  <div class="pb-6 pt-8">
    <img class="mx-auto" :src="imgIcon" />
    <h2 class="text-center font-noto text-2xl font-bold">聯絡人資訊</h2>
  </div>
  <Form :validation-schema="schema" class="mx-auto w-full font-noto md:w-2/3">
    <template v-for="inputItem in inputInfo" :key="inputItem.id">
      <FormInput :inputInfo="inputItem" v-model:userInput="userInput[inputItem.id]" />
    </template>

    <!-- <div class="mb-5">
      <label for="useremail" class="mb-2 block text-sm font-medium">電子信箱-Email</label>
      <Field
        type="text"
        id="useremail"
        name="useremail"
        class="block w-full rounded-lg border-2 border-black bg-custom-bg-1 p-2.5 text-sm"
        placeholder="Bonnie Green"
      />
      <ErrorMessage name="useremail" class="mt-2 text-sm font-bold text-red-600" />
    </div>
    <div class="mb-5">
      <label for="username" class="mb-2 block text-sm font-medium">姓名</label>
      <Field
        type="text"
        id="username"
        name="username"
        class="block w-full rounded-lg border-2 border-black bg-custom-bg-1 p-2.5 text-sm"
        placeholder="Bonnie Green"
      />
      <ErrorMessage name="username" class="mt-2 text-sm font-bold text-red-600" />
    </div>
    <div class="mb-5">
      <label for="userphone" class="mb-2 block text-sm font-medium">電話</label>
      <Field
        type="tel"
        id="userphone"
        name="userphone"
        class="block w-full rounded-lg border-2 border-black bg-custom-bg-1 p-2.5 text-sm"
        placeholder="Bonnie Green"
      />
      <ErrorMessage name="userphone" class="mt-2 text-sm font-bold text-red-600" />
    </div>
    <div class="mb-5">
      <label for="useraddress" class="mb-2 block text-sm font-medium">地址</label>
      <Field
        type="text"
        id="useraddress"
        name="useraddress"
        class="block w-full rounded-lg border-2 border-black bg-custom-bg-1 p-2.5 text-sm"
        placeholder="Bonnie Green"
      />
      <ErrorMessage name="userphone" class="mt-2 text-sm font-bold text-red-600" />
    </div> -->
    <div class="mb-5">
      <label for="usermessage" class="mb-2 block text-sm font-medium">留言</label>
      <input
        type="text"
        id="usermessage"
        class="block w-full rounded-lg border-2 border-black bg-custom-bg-1 p-2.5 text-sm"
        placeholder="Bonnie Green"
        v-model="userInput.message"
      />
    </div>
    <div class="flex items-center justify-center py-4">
      <button type="submit" class="mx-auto w-full bg-black py-2 text-white md:w-1/2" @click.prevent>
        確認結帳
      </button>
    </div>
  </Form>
</template>
<style scoped></style>
