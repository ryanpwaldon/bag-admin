import clone from 'lodash/clone'
import isEqual from 'lodash/isEqual'
import { AnySchema, ObjectSchema } from 'yup'
import { computed, ComputedRef, Ref, ref, watch } from 'vue'

type Field = {
  initial: unknown
  value: Ref<unknown>
  error: Ref<string | undefined>
  modified: ComputedRef<boolean>
  validate: () => void
}

const createFields = <T extends Record<keyof T, AnySchema>>(schema: ObjectSchema<T>) => {
  return Object.entries(schema.fields).reduce((fields, item) => {
    const [key, schema] = item as [keyof T, AnySchema]
    const initial = ref(schema.cast(schema.getDefault()))
    const value = ref(clone(initial.value))
    const modified = computed(() => !isEqual(value.value, initial.value))
    const error = ref(undefined)
    const validate = async () => {
      try {
        await schema.validate(value.value)
        error.value = undefined
      } catch (err) {
        error.value = err.message
      }
    }
    watch(value, () => error.value && validate(), { deep: true })
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

export default <T extends Record<keyof T, AnySchema>>(schema: ObjectSchema<T>) => {
  const fields = createFields(schema)
  const modified = computed(() => !(Object.values(fields) as Field[]).map(({ modified }) => modified).every(value => !value.value))
  const getValues = () => {
    const fieldEntries: [string, Field][] = Object.entries(fields)
    return schema.cast(
      fieldEntries.reduce((values, [key, field]) => {
        values[key] = field.value.value
        return values
      }, {} as Record<string, unknown>)
    )
  }
  const handleSubmit = (callback: Function) => async (e: Event) => {
    e.preventDefault()
    const isValid = await validateAll(fields)
    if (isValid) callback()
  }
  return { fields, modified, getValues, handleSubmit }
}
