import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
const baseURL = import.meta.env.VITE_APP_API_URL
const apiName = import.meta.env.VITE_APP_API_NAME
export const useTicketStore = defineStore('tickets', () => {
  //state
  const ticketData = ref({}) //初始篩選資料
  const ticketAllData = ref({}) //初始全部資料


  //getter
  const getTicketAllData = computed(() => ticketAllData.value.products)
  const getTicketData = computed(() => ticketData.value.products)
  const getTicketPage = computed(() => ticketData.value.pagination)

  //action
  const fetchAllTicketData = async () => {
    try {
      const response = await axios(`${baseURL}/v2/api/${apiName}/products/all`);
      ticketAllData.value = response.data;
    } catch (error) {
      console.log(error)
    }
  }
  // const fetchTicketData = async () => {
  //   try {
  //     const response = await axios(`${baseURL}/v2/api/${apiName}/products`);
  //     ticketData.value = response.data;
  //     console.log(response)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  const fetchPageInfo = async (page = '', category = '') => {
    try {
      const response = await axios(`${baseURL}/v2/api/${apiName}/products`, {
        params: { page: page.toString(), category: category }
      });
      console.log(response)
      if (response.status === 200) {
        ticketData.value = response.data;
      }
      // console.log(response)
    } catch (error) {
      console.log(error)
    }
  }


  return { ticketData, getTicketData, getTicketPage, getTicketAllData, fetchPageInfo, fetchAllTicketData }
})
