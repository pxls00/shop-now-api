import { check, type ValidationChain } from 'express-validator'

export function checkNameBodyRequest(): ValidationChain {
  return check(
    'name',
    `Name of the color must be more 2 and lesser than 30 characters`
  ).isLength({ min: 2, max: 30 })
}

export function checkKeyBodyRequest(): ValidationChain {
  return check(
    'key',
    `Key of the color must be more 2 and lesser than 30 characters`
  ).isLength({ min: 2, max: 30 })
}

export function checkValueBodyRequest(): ValidationChain {
  return check('value')
    .isArray()
    .withMessage('Items must be an array')
    .custom((value) => {
      for (let i = 0; i < value.length; i++) {
        if (typeof value[i] !== 'string') {
          throw new Error('Each item must be a string')
        }
        if (value[i].length > 30) {
          throw new Error('Each item should not exceed 30 characters')
        }
      }
      return true
    })
}
