import { Router } from 'express'
import config from '../../lib/config'
import categoryConfig from '../../../category/lib/config'
import FilterBrandsController from '../../controllers/brands/brands.controller'
import {
  checkKeyBodyRequest,
  checkNameBodyRequest,
} from '../../middlewares/validators/filter-option'

const router = Router()

const controller = new FilterBrandsController()

// brands
router.get(`${config.moduleRouteBrandURL}`, controller.getFilterBrandList)
router.get(
  `${config.moduleRouteBrandURL}/:${config.moduleRouteItemIdURL}`,
  controller.getFilterOptionByCategoryId
)
router.post(
  `${config.moduleRouteBrandURL}`,
  [checkKeyBodyRequest(), checkNameBodyRequest()],
  controller.createFilterBrand
)
router.patch(
  `${config.moduleRouteBrandURL}/:${config.moduleRouteBrandItemIdURL}`,
  [checkNameBodyRequest()],
  controller.updateFilterBrandById
)
router.delete(
  `${config.moduleRouteBrandURL}/:${config.moduleRouteBrandItemIdURL}`,
  controller.deleteFilterBrandById
)

export default router
