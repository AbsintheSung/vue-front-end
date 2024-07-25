import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
const baseURL = import.meta.env.VITE_APP_API_URL
const apiName = import.meta.env.VITE_APP_API_NAME
export const useCartStore = defineStore('cart', () => {
    //state
    const cartData = ref([])

    //getter
    const getCartLength = computed(() => cartData.value.length)

    //action
    const fetchCartData = async () => {
        try {
            const response = await axios(`${baseURL}/v2/api/${apiName}/cart`)
            cartData.value = response.data.data.carts
        } catch (error) {
            console.log(error)
        }
    }
    return {
        fetchCartData, getCartLength
    }
})