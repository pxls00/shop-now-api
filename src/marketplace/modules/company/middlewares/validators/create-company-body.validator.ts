import { check, type ValidationChain } from 'express-validator'

function checkBodyRequest(): ValidationChain[] {
  return [
    check(
      'name',
      `Name of the company must be more 1 and lesser than 30 characters`
    ).isLength({ min: 1, max: 30 }),
    check('email', 'Email must contain @').isEmail(),
    check('phone_number').matches(/\(\d{2}\) \d{3}-\d{2}-\d{2}/),
    check(
      'description',
      'Description of the company must be more 5 and lesser than 255 characters'
    ),
  ]
}

export default checkBodyRequest
