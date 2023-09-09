import { check, type ValidationChain } from 'express-validator'

function checkBodyRequest(): ValidationChain[] {
  return [
    check(
      'name',
      `Name of the category must be more 1 and lesser than 30 characters`
    ).isLength({ min: 1, max: 80 }),
  ]
}

export default checkBodyRequest
