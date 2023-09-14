import { check, type ValidationChain } from 'express-validator'

function checkBodyRequest(): ValidationChain[] {
  return [
    check(
      'name',
      `Name of the user must be more 5 and lesser than 30 characters`
    ).isLength({ min: 5, max: 30 }),
    check(
      'password',
      'Password of user should be more 8 and lesser than 16 characters'
    ).isLength({ min: 8, max: 16 }),
    check('email', 'Email must contain @').isEmail(),
  ]
}

export default checkBodyRequest
