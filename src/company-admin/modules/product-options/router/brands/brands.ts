import { Router } from 'express'
import config from '../../lib/config'
import ProductBrandsController from '../../controllers/brands/brands.controller'
import { checkNameBodyRequest } from '../../middlewares/validators/product-option'

const router = Router()

const controller = new ProductBrandsController()

// brands
router.get(`${config.moduleRouteBrandURL}`, controller.getProductBrandList)
router.get(
  `${config.moduleRouteBrandURL}/:${config.moduleRouteBrandItemIdURL}`,
  controller.getProductOptionByCategoryId
)
router.post(
  `${config.moduleRouteBrandURL}`,
  [checkNameBodyRequest()],
  controller.createProductBrand
)
router.patch(
  `${config.moduleRouteBrandURL}/:${config.moduleRouteBrandItemIdURL}`,
  [checkNameBodyRequest()],
  controller.updateProductBrandById
)
router.delete(
  `${config.moduleRouteBrandURL}/:${config.moduleRouteBrandItemIdURL}`,
  controller.deleteProductBrandById
)

export default router
