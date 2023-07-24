import { Router } from 'express'
import config from '../lib/config'
import categoryConfig from '../../category/lib/config'

import FilterController from '../controllers/filter.controller'

const router = Router()

const controller = new FilterController()

// filters
router.get(`${config.moduleRouteBaseURL}`, controller.getFilterList)
router.get(
  `${config.moduleRouteBaseURL}/:${categoryConfig.moduleRouteItemIdURL}`,
  controller.getFilterByCategoryId
)
// router.post(`${config.moduleRouteBaseURL}`, controller.createFilter)
// router.patch(`${config.moduleRouteBaseURL}/:${config.moduleRouteItemIdURL}`, controller.updateFilterById)
// router.delete(`${config.moduleRouteBaseURL}/:${config.moduleRouteItemIdURL}`, controller.deleteFilterById)

export default router
