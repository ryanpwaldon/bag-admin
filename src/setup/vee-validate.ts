/* eslint-disable */

import { defineRule, configure } from 'vee-validate'
import { required, email, min_value, max_value, numeric, alpha_num } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'
import en from '@vee-validate/i18n/dist/locale/en.json'

configure({ generateMessage: localize({ en }) })
defineRule('required', required)
defineRule('email', email)
defineRule('min_value', min_value)
defineRule('max_value', max_value)
defineRule('numeric', numeric)
defineRule('alpha_num', alpha_num)
