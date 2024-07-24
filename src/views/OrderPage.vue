<script setup>
import axios from 'axios'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import imgIcon from '@/assets/images/sparkler.png'
import OrderTable from '@/components/order/OrderTable.vue'
import OrderUserInfo from '@/components/order/OrderUserInfo.vue'
const baseURL = import.meta.env.VITE_APP_API_URL
const apiName = import.meta.env.VITE_APP_API_NAME
const router = useRoute()
const orderId = router.params.orderId
const getOneOrder = async () => {
  const response = await axios(`${baseURL}/v2/api/${apiName}/order/${orderId}`)
  console.log(response)
}

onMounted(() => {
  getOneOrder()
})
console.log(router.params.orderId)
</script>
<template>
  <div class="pb-6 pt-8">
    <img class="mx-auto" :src="imgIcon" />
    <h2 class="text-center font-noto text-2xl font-bold">訂單明細</h2>
  </div>
  <OrderTable />
  <div class="mx-auto my-6 w-full">
    <!-- <table class="w-full">
      <tbody>
        <tr class="border-b">
          <th class="w-[100px] px-4 py-3 text-left font-semibold text-gray-600">姓名</th>
          <td class="px-4 py-3 text-center text-gray-900">Absinthe</td>
        </tr>
        <tr class="border-b">
          <th class="px-4 py-3 text-left font-semibold text-gray-600">信箱</th>
          <td class="px-4 py-3 text-center text-gray-900">h123@gmail.com</td>
        </tr>
        <tr class="border-b">
          <th class="px-4 py-3 text-left font-semibold text-gray-600">聯絡電話</th>
          <td class="px-4 py-3 text-center text-gray-900">0911-777-888</td>
        </tr>
        <tr>
          <th class="px-4 py-3 text-left font-semibold text-gray-600">聯絡地址</th>
          <td class="px-4 py-3 text-center text-gray-900">
            高雄市政府高雄市政府高雄市政府高雄市政府高雄市政府
          </td>
        </tr>
      </tbody>
    </table> -->
    <OrderUserInfo />
    <div class="my-5 flex items-center justify-center">
      <button class="w-full bg-black py-2 text-white sm:w-fit sm:px-14">確認付款</button>
    </div>
  </div>
</template>
<style scoped></style>
