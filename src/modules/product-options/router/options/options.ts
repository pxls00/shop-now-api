import { Router } from 'express'
import config from '../../lib/config'
import ProductOptionsController from '../../controllers/options/options.controller'
import {
  checkNameBodyRequest,
  checkValueBodyRequest,
} from '../../middlewares/validators/product-option'

const router = Router()
const controller = new ProductOptionsController()

// options
router.get(`${config.moduleRouteOptionURL}`, controller.getProductOptionList)

// router.get(
//   `${config.moduleRouteOptionURL}/:${config.moduleRouteOptionItemIdURL}`,
//   controller.getProductOptionList
// )

router.get(
  `${config.moduleRouteOptionURL}/:${config.moduleRouteOptionItemIdURL}`,
  controller.getProductOptionByCategoryId
)

router.post(
  `${config.moduleRouteOptionURL}`,
  [checkNameBodyRequest(), checkValueBodyRequest()],
  controller.createProductOption
)

router.patch(
  `${config.moduleRouteOptionURL}/:${config.moduleRouteOptionItemIdURL}`,
  [checkNameBodyRequest(), checkValueBodyRequest()],
  controller.updateProductOptionById
)

router.delete(
  `${config.moduleRouteOptionURL}/:${config.moduleRouteOptionItemIdURL}`,
  controller.deleteProductOptionById
)

export default router
