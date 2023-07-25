import { Router } from 'express'
import config from '../../lib/config'
import FilterColorsController from '../../controllers/colors/colors.controller'
import {
  checkKeyBodyRequest,
  checkNameBodyRequest,
} from '../../middlewares/validators/filter-option'

const router = Router()

const controller = new FilterColorsController()

// colors
router.get(`${config.moduleRouteColorURL}`, controller.getFilterColorList)
router.post(
  `${config.moduleRouteColorURL}`,
  [checkKeyBodyRequest(), checkNameBodyRequest()],
  controller.createFilterColor
)
router.patch(
  `${config.moduleRouteColorURL}/:${config.moduleRouteColorItemIdURL}`,
  [checkNameBodyRequest()],
  controller.updateFilterColorById
)
router.delete(
  `${config.moduleRouteColorURL}/:${config.moduleRouteColorItemIdURL}`,
  controller.deleteFilterColorById
)

export default router
