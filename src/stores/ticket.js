import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
const baseURL = import.meta.env.VITE_APP_API_URL
const apiName = import.meta.env.VITE_APP_API_NAME
export const useTicketStore = defineStore('tickets', () => {
  //state
  const ticketData = ref({}) //初始資料


  //getter
  const getTicketData = computed(() => ticketData.value.products)
  const getTicketPage = computed(() => ticketData.value.pagination)

  //action
  const fetchAllTicketData = async () => {
    try {
      const response = await axios(`${baseURL}/v2/api/${apiName}/products`);
      ticketData.value = response.data;
    } catch (error) {
      console.log(error)
    }
  }

  return { ticketData, getTicketData, fetchAllTicketData, getTicketPage }
})
