/* eslint @typescript-eslint/no-explicit-any: 0 */

import { ObjectSchema, Schema } from 'yup'
import { computed, ComputedRef, Ref, ref, watch } from 'vue'

type Field = {
  initial: any
  value: Ref<any>
  error: Ref<string | undefined>
  modified: ComputedRef<boolean>
  validate: () => void
}

const createFields = <T extends object>(schema: ObjectSchema<T>) => {
  return Object.entries(schema.fields).reduce((fields, item) => {
    const [key, schema] = item as [keyof T, Schema<any>]
    const initial = schema.cast(schema.default())
    const value = ref(initial)
    const modified = computed(() => value.value !== initial)
    const error = ref(undefined)
    const validate = async () => {
      try {
        await schema.validate(value.value)
        error.value = undefined
      } catch (err) {
        error.value = err.message
      }
    }
    watch(value, validate)
    fields[key] = { initial, value, modified, validate, error }
    return fields
  }, {} as Record<keyof T, Field>)
}

const validateAll = async (fields: Record<string, Field>) => {
  const fieldEntries = Object.entries(fields)
  const fieldValues = fieldEntries.map(entry => entry[1])
  await Promise.all(fieldValues.map(field => field.validate()))
  const errors = fieldValues.map(field => field.error.value)
  return errors.every(value => !value)
}

export default <T extends object>(schema: ObjectSchema<T>) => {
  const fields = createFields(schema)
  const getValues = () => {
    const fieldEntries: [string, Field][] = Object.entries(fields)
    return fieldEntries.reduce((values, [key, field]) => {
      values[key] = field.value.value
      return values
    }, {} as Record<string, any>)
  }
  const handleSubmit = (callback: Function) => async (e: Event) => {
    e.preventDefault()
    const isValid = await validateAll(fields)
    if (isValid) callback()
  }
  return { fields, getValues, handleSubmit }
}
