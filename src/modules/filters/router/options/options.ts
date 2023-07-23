import { Router } from 'express'
import config from '../../lib/config'
import FilterOptionsController from '../../controllers/options/options.controller'

const router = Router()
const controller = new FilterOptionsController()

// options
router.get(
  `${config.moduleRouteBaseURL}/${config.moduleRouteOptionURL}`,
  controller.getFilterOptionList
)
router.post(
  `${config.moduleRouteBaseURL}/${config.moduleRouteOptionURL}`,
  controller.createFilterOption
)
router.patch(
  `${config.moduleRouteBaseURL}/${config.moduleRouteOptionURL}/:${config.moduleRouteOptionItemIdURL}`,
  controller.updateFilterOptionById
)
router.delete(
  `${config.moduleRouteBaseURL}/${config.moduleRouteOptionURL}/:${config.moduleRouteOptionItemIdURL}`,
  controller.deleteFilterOptionById
)

export default router
