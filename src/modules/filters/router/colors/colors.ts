import { Router } from 'express'
import config from '../../lib/config'
import FilterColorsController from '../../controllers/colors/colors.controller'
import filterFieldsValidator from '../../middlewares/validators/create-filter-color-and-brand'

const router = Router()

const controller = new FilterColorsController()

// colors
router.get(
  `${config.moduleRouteBaseURL}/${config.moduleRouteColorURL}`,
  controller.getFilterColorList
)
router.post(
  `${config.moduleRouteBaseURL}/${config.moduleRouteColorURL}`,
  filterFieldsValidator(),
  controller.createFilterColor
)
router.patch(
  `${config.moduleRouteBaseURL}/${config.moduleRouteColorURL}/:${config.moduleRouteColorItemIdURL}`,
  filterFieldsValidator(),
  controller.updateFilterColorById
)
router.delete(
  `${config.moduleRouteBaseURL}/${config.moduleRouteColorURL}/:${config.moduleRouteColorItemIdURL}`,
  controller.deleteFilterColorById
)

export default router
