import { check, type ValidationChain } from 'express-validator'

function checkBodyRequest(): ValidationChain[] {
  return [
    check('worktime.work_time', `Should be formated ##:##~##:##`).matches(
      /^[1-9][0-9]*:[0-5][0-9]~([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/
    ),
    check('related_admin.email', 'Admin`s Email must contain @').isEmail(),
    check('contact_number').matches(/\(\d{2}\) \d{3}-\d{2}-\d{2}/),
  ]
}

export default checkBodyRequest
