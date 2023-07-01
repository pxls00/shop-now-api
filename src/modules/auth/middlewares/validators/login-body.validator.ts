import { check, type ValidationChain } from 'express-validator'

function checkBodyRequest(): ValidationChain[] {
  return [
    check(
      'password',
      'Password of user should be more 8 and lesser 16 characters'
    ).isLength({ min: 8, max: 16 }),
    check('email', 'Email must contain @').isEmail(),
  ]
}

export default checkBodyRequest
