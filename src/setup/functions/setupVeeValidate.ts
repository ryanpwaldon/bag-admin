/* eslint-disable */

import { defineRule, configure } from 'vee-validate'
import { required, email, min_value, max_value, numeric, alpha_num, alpha, alpha_spaces } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'
import en from '@vee-validate/i18n/dist/locale/en.json'

export default () => {
  configure({ generateMessage: localize({ en }) })
  defineRule('required', required)
  defineRule('email', email)
  defineRule('min_value', min_value)
  defineRule('max_value', max_value)
  defineRule('numeric', numeric)
  defineRule('alpha_spaces', alpha_spaces)
  defineRule('alpha_num', alpha_num)
  defineRule('array_single', value => {
    if (!value || value.length <= 1) return true
    return 'This field cannot include more than 1 item'
  })
}
