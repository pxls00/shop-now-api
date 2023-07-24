import { check, type ValidationChain } from 'express-validator'

function checkBodyRequest(): ValidationChain[] {
  return [
    check('value')
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
      }),
  ]
}

export default checkBodyRequest
