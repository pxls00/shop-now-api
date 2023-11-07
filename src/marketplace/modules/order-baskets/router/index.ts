// import logger from '../../../../utils/logger'
import { Router } from 'express'
import config from '../lib/config'
import OrderBasketController from '../../../controllers/order-baskets/order-basket.controller'
import AuthMiddleware from '../../../middleware/auth-user/index.middleware'

const router = Router()
const controller = new OrderBasketController()

router.get(
  `${config.moduleRouteBaseURL}`,
  AuthMiddleware,
  controller.getOrderBasketListOfUser
)

router.post(
  `${config.moduleRouteBaseURL}/`,
  AuthMiddleware,
  controller.addProductToOrderBasketList
)

router.delete(
  `${config.moduleRouteBaseURL}/:${config.moduleRouteItemIdURL}`,
  AuthMiddleware,
  controller.removeProductFromOrderBasketList
)

export default router
