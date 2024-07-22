import { defineRule, configure } from 'vee-validate'
import { all } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

setLocale('zh_TW') //設置 繁體中文
configure({
    generateMessage: localize({ zh_TW: zhTW }), //將訊息轉成繁體
    validateOnInput: true, //為true時，輸入便會驗證，false離開focus狀態才會驗證
})

Object.entries(all).forEach(([name, rule]) => {
    // console.log(typeof name)
    defineRule(name, rule)
})

export const userSchema = {
    email: "required|email",
    userName: "required",
    phone: "required|numeric",
    address: "required",
};