import { Router } from 'express'
import config from '../../lib/config'
import FilterBrandsController from '../../controllers/brands/brands.controller'

const router = Router()

const controller = new FilterBrandsController()

// brands
router.get(
  `${config.moduleRouteBaseURL}/${config.moduleRouteBrandURL}`,
  controller.getFilterBrandList
)
router.post(
  `${config.moduleRouteBaseURL}/${config.moduleRouteBrandURL}`,
  controller.getFilterBrandById
)
router.patch(
  `${config.moduleRouteBaseURL}/${config.moduleRouteBrandURL}/:${config.moduleRouteBrandItemIdURL}`,
  controller.updateFilterBrandById
)
router.delete(
  `${config.moduleRouteBaseURL}/${config.moduleRouteBrandURL}/:${config.moduleRouteBrandItemIdURL}`,
  controller.deleteFilterBrandById
)

export default router
