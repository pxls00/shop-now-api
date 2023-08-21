import { check, type ValidationChain } from 'express-validator'

export function checkNameBodyRequest(): ValidationChain {
  return check(
    'name',
    `Name of the tag must be more 2 and lesser than 30 characters`
  ).isLength({ min: 2, max: 30 })
}
