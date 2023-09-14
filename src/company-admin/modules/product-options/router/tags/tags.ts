import { Router } from 'express'
import config from '../../lib/config'
import ProductTagsController from '../../controllers/tags/tags.controller'
import { checkNameBodyRequest } from '../../middlewares/validators/product-option'

const router = Router()

const controller = new ProductTagsController()

// tags
router.get(`${config.moduleRouteTagURL}`, controller.getProductTagList)
router.get(
  `${config.moduleRouteTagURL}/:${config.moduleRouteTagItemIdURL}`,
  controller.getProductOptionByCategoryId
)
router.post(
  `${config.moduleRouteTagURL}`,
  [checkNameBodyRequest()],
  controller.createProductTag
)
router.patch(
  `${config.moduleRouteTagURL}/:${config.moduleRouteTagItemIdURL}`,
  [checkNameBodyRequest()],
  controller.updateProductTagById
)
router.delete(
  `${config.moduleRouteTagURL}/:${config.moduleRouteTagItemIdURL}`,
  controller.deleteProductTagById
)

export default router
