import { Router } from 'express'
import config from '../lib/config'

import UserController from '../controllers/user.controller'

const router = Router()

const controller = new UserController()

/**
 *  @openapi
 *  /api/users
 */

router.get(`${config.moduleRouteBaseURL}`, controller.getUserList)
router.get(
  `${config.moduleRouteBaseURL}/:${config.moduleRouteItemIdURL}`,
  controller.getUserById
)

export default router
