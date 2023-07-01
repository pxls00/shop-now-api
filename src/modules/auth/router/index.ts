import { Router } from 'express'
import config from '../lib/config'

import CompanyController from '../controllers/auth.controller'
import registerBodyValidator from '../middlewares/validators/register-body.validator'
import loginBodyValidator from '../middlewares/validators/login-body.validator'

import authMiddleware from '../middlewares/auth/check-user-token.middleware'

const router = Router()

const controller = new CompanyController()

/**
 *  @openapi
 *  /api/auth
 */
router.post(
  `${config.moduleRouteBaseURL}${config.moduleRegisterRoute}`,
  registerBodyValidator(),
  controller.register
)
router.post(
  `${config.moduleRouteBaseURL}${config.moduleLoginRoute}`,
  loginBodyValidator(),
  controller.login
)
router.delete(
  `${config.moduleRouteBaseURL}${config.moduleLogoutRoute}`,
  authMiddleware,
  controller.logout
)

export default router
