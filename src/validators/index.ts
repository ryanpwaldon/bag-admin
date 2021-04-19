import { TriggerProperty } from '@/types/internal'
import { AnySchema, array, boolean, mixed, number, object, string } from 'yup'

export const requiredString = string()
  .required('This field is required.')
  .default('')

export const requiredNumber = number()
  .required('This field is required.')
  .typeError('Please enter a valid number.')
  .min(0, 'Number must be greater than 0.')

export const triggerGroup = object({
  matchAll: boolean()
    .required()
    .default(true),
  triggers: array()
    .of(
      object({
        property: string().required(),
        condition: string().required(),
        value: mixed().when(
          'property',
          (property: TriggerProperty): AnySchema => {
            switch (property) {
              case TriggerProperty.Product:
                return array()
                  .of(
                    object({
                      id: string().required(),
                      variants: array().of(object({ id: string().required() }))
                    })
                  )
                  .min(1, 'Product trigger requires at least 1 item.')
                  .ensure()
              case TriggerProperty.ProductTag:
                return string().required('Product tag value is empty.')
              case TriggerProperty.ProductType:
                return string().required('Product type value is empty.')
              case TriggerProperty.ProductVendor:
                return string().required('Product vendor value is empty.')
              case TriggerProperty.Subtotal:
                return number()
                  .required('Subtotal is empty.')
                  .typeError('Subtotal is not a number.')
                  .min(0, 'Subtotal must be larger than 0.')
              default:
                throw new Error('Trigger does not exist.')
            }
          }
        )
      })
    )
    .required()
    .default([])
}).required()
