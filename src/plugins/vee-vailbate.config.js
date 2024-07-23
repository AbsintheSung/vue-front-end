import { defineRule, configure } from 'vee-validate'
import { all } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

setLocale('zh_TW') //設置 繁體中文
configure({
  generateMessage: (context) => {
    const defaultMessage = localize({
      zh_TW: zhTW
    })(context)
    const keyName = context.field
    return defaultMessage.replace(`${keyName} `, '')
  },
  validateOnInput: true
})

Object.entries(all).forEach(([name, rule]) => {
  // console.log(typeof name)
  defineRule(name, rule)
})

export const userSchema = {
  useremail: 'required|email',
  username: 'required',
  userphone: 'required|numeric',
  useraddress: 'required'
}
