import { Property } from '@/types/internal'
import { AnySchema, array, boolean, mixed, number, object, string } from 'yup'

export const requiredString = string()
  .required('This field is required.')
  .default('')

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
          (property: Property): AnySchema => {
            switch (property) {
              case 'product':
                return array()
                  .of(string())
                  .min(1, 'Product trigger requires at least 1 item.')
                  .ensure()
              case 'productTag':
                return string().required('Product tag value is empty.')
              case 'productType':
                return string().required('Product type value is empty.')
              case 'productVendor':
                return string().required('Product vendor value is empty.')
              case 'subtotal':
                return number()
                  .required('Subtotal is empty.')
                  .typeError('Subtotal is not a number.')
                  .min(0, 'Subtotal must be larger than 0.')
              default:
                throw new Error('Property does not exist.')
            }
          }
        )
      })
    )
    .required()
    .default([])
}).required()
