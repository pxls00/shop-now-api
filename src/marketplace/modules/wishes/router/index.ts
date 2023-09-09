import { Router } from 'express'
import config from '../lib/config'
import WishController from '../controllers/wish.controller'
import AuthMiddleware from '../../../middleware/auth-user/index.middleware'

const router = Router()
const controller = new WishController()


router.get(`${config.moduleRouteBaseURL}`, AuthMiddleware, controller.getWishListOfUser)

router.post(`${config.moduleRouteBaseURL}/:${config.moduleRouteItemIdURL}`, AuthMiddleware, controller.addProductToWishes)

router.delete(`${config.moduleRouteBaseURL}/:${config.moduleRouteItemIdURL}`, AuthMiddleware, controller.removeProductFromWishes)


export default router