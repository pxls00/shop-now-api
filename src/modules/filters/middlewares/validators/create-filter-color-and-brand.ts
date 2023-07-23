import { check, type ValidationChain } from 'express-validator'

function checkBodyRequest(): ValidationChain[] {
  return [
    check(
      'name',
      `Name of the color must be more 2 and lesser than 30 characters`
    ).isLength({ min: 2, max: 30 }),
    check(
      'key',
      `Key of the color must be more 2 and lesser than 30 characters`
    ).isLength({ min: 2, max: 30 }),
  ]
}

export default checkBodyRequest
