import { check, type ValidationChain } from 'express-validator'
import type { IProductAmountByOption } from '../../models/product.types'

export function checkFieldLengthBodyRequest(
  field: string,
  min?: number,
  max?: number
): ValidationChain {
  return check(
    field,
    `${field} of the product must be more ${min || 0} and lesser than ${
      max || 255
    } characters`
  )
    .isString()
    .isLength({ min, max })
}

export function checkFieldIsNumbericBodyRequest(
  field: string
): ValidationChain {
  return check(field, `${field} of the product must be number`).isNumeric()
}

export function checkTagNamesBodyRequest(): ValidationChain {
  return check('tag_names')
    .isArray()
    .withMessage('Items must be an array')
    .custom((tag_names) => {
      for (let i = 0; i < tag_names.length; i++) {
        if (typeof tag_names[i] !== 'string') {
          throw new Error('Each item must be a string')
        }
      }
      return true
    })
}

export function checkAmountByOptionFieldBodyRequest(): ValidationChain {
  return check('amount_by_option')
    .isArray()
    .withMessage('Items must be an array')
    .custom((amount_by_option) => {
      for (let i = 0; i < amount_by_option.length; i++) {
        const item = amount_by_option[i] as IProductAmountByOption
        if (typeof item !== 'object') {
          throw new Error('Each item must be a object')
        }

        if (typeof item.amount !== 'number') {
          throw new Error('amount of amount_by_option item must be a number')
        }

        if (item.color && typeof item.color !== 'string') {
          throw new Error('color of amount_by_option item must be a string')
        }

        if (item.img && typeof item.img !== 'string') {
          throw new Error('img of amount_by_option item must be a string')
        }

        if (item.custom_options && typeof item.custom_options !== 'object') {
          throw new Error(
            'item.custom_options of amount_by_option item must be a array'
          )
        }
      }
      return true
    })
}

export function checkFieldIsArrayRequest(field: string): ValidationChain {
  return check(field, `${field} of the product must be an array`).isArray()
}

export function checkFieldIsBooleanRequest(field: string): ValidationChain {
  return check(field, `${field} of the product must be an boolean`).isBoolean()
}
