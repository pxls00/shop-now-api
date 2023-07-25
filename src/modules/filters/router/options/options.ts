import { Router } from 'express'
import config from '../../lib/config'
import FilterOptionsController from '../../controllers/options/options.controller'
import categoryConfig from '../../../category/lib/config'
import {
  checkKeyBodyRequest,
  checkNameBodyRequest,
  checkValueBodyRequest,
} from '../../middlewares/validators/filter-option'

const router = Router()
const controller = new FilterOptionsController()

// options
router.get(`${config.moduleRouteOptionURL}`, controller.getFilterOptionList)

router.get(
  `${config.moduleRouteOptionURL}/:${config.moduleRouteOptionItemIdURL}`,
  controller.getFilterOptionList
)

router.get(
  `${config.moduleRouteOptionURL}/:${categoryConfig.moduleRouteItemIdURL}`,
  controller.getFilterOptionList
)

router.post(
  `${config.moduleRouteOptionURL}`,
  [checkKeyBodyRequest(), checkNameBodyRequest(), checkValueBodyRequest()],
  controller.createFilterOption
)

router.patch(
  `${config.moduleRouteOptionURL}/:${config.moduleRouteOptionItemIdURL}`,
  [checkNameBodyRequest(), checkValueBodyRequest()],
  controller.updateFilterOptionById
)

router.delete(
  `${config.moduleRouteBaseURL}/${config.moduleRouteOptionURL}/:${config.moduleRouteOptionItemIdURL}`,
  controller.deleteFilterOptionById
)

export default router
