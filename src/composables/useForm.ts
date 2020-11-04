import set from 'lodash/set'
import merge from 'lodash/merge'
import isEqual from 'lodash/isEqual'
import isPlainObject from 'lodash/isPlainObject'
import { ValidationError, ObjectSchema } from 'yup'
import { computed, Ref, ref } from 'vue'

export const cloneKeys = <T>(target: T) => {
  return Object.entries(target).reduce((clone: { [key: string]: object | undefined }, [key, value]) => {
    clone[key] = isPlainObject(value) ? cloneKeys(value) : undefined
    return clone
  }, {})
}

export default <T extends object>(schema: ObjectSchema<T>) => {
  const defaults = merge(schema.default(), schema.cast(schema.default()))
  const values = ref({ ...defaults }) as Ref<T>
  const errors = ref(cloneKeys(values.value))
  const modified = computed(() => !isEqual(defaults, values.value))
  const udpateError = (path: string, message?: string) => set(errors.value, path, message)
  const updateValue = async <T>(path: string, value: T) => {
    set(values.value, path, value)
    await schema
      .validateAt(path, values.value)
      .then(() => udpateError(path, undefined))
      .catch((error: ValidationError) => udpateError(path, error.message))
  }
  const handleSubmit = (callback: Function) => async (e: Event) => {
    e.preventDefault()
    const valid = await schema
      .validate(values.value, { abortEarly: false })
      .then(() => true)
      .catch((error: ValidationError) => {
        error.inner.forEach(({ path, message }) => udpateError(path, message))
        return false
      })
    if (valid) callback(values.value, defaults)
  }
  return { values, defaults, errors, modified, updateValue, handleSubmit }
}
