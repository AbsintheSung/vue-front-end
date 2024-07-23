<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { userSchema } from '@/plugins/vee-vailbate.config'
import imgIcon from '@/assets/images/sparkler.png'
const schema = userSchema
</script>
<template>
  <div class="pb-6 pt-8">
    <img class="mx-auto" :src="imgIcon" />
    <h2 class="text-center font-noto text-2xl font-bold">聯絡人資訊</h2>
  </div>
  <form class="mx-auto w-full font-noto md:w-2/3">
    <div class="mb-5">
      <label for="useremail" class="mb-2 block text-sm font-medium">電子信箱-Email</label>
      <input
        type="text"
        id="useremail"
        class="block w-full rounded-lg border-2 border-black bg-custom-bg-1 p-2.5 text-sm"
        placeholder="Bonnie Green"
      />
      <p class="mt-2 text-sm font-bold text-red-600">Oops! Username already taken!</p>
    </div>
    <div class="mb-5">
      <label for="username" class="mb-2 block text-sm font-medium">姓名</label>
      <input
        type="text"
        id="username"
        class="block w-full rounded-lg border-2 border-black bg-custom-bg-1 p-2.5 text-sm"
        placeholder="Bonnie Green"
      />
      <p class="mt-2 text-sm font-bold text-red-600">Oops! Username already taken!</p>
    </div>
    <div class="mb-5">
      <label for="userphone" class="mb-2 block text-sm font-medium">電話</label>
      <input
        type="tel"
        id="userphone"
        class="block w-full rounded-lg border-2 border-black bg-custom-bg-1 p-2.5 text-sm"
        placeholder="Bonnie Green"
      />
      <p class="mt-2 text-sm font-bold text-red-600">Oops! Username already taken!</p>
    </div>
    <div class="mb-5">
      <label for="useraddress" class="mb-2 block text-sm font-medium">地址</label>
      <input
        type="text"
        id="useraddress"
        class="block w-full rounded-lg border-2 border-black bg-custom-bg-1 p-2.5 text-sm"
        placeholder="Bonnie Green"
      />
      <p class="mt-2 text-sm font-bold text-red-600">Oops! Username already taken!</p>
    </div>
    <div class="mb-5">
      <label for="usermessage" class="mb-2 block text-sm font-medium">留言</label>
      <input
        type="text"
        id="usermessage"
        class="block w-full rounded-lg border-2 border-black bg-custom-bg-1 p-2.5 text-sm"
        placeholder="Bonnie Green"
      />
    </div>
  </form>
</template>
<style scoped></style>
