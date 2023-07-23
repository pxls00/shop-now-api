import { Router } from 'express'
import config from '../../lib/config'
import FilterOptionsController from '../../controllers/options/options.controller'
import filterFieldsValidator from '../../middlewares/validators/create-filter-option'
import categoryConfig from '../../../category/lib/config'

const router = Router()
const controller = new FilterOptionsController()

// options
router.get(
  `${config.moduleRouteBaseURL}/${config.moduleRouteOptionURL}`,
  controller.getFilterOptionList
)

router.get(
  `${config.moduleRouteBaseURL}/${config.moduleRouteOptionURL}/:${config.moduleRouteOptionItemIdURL}`,
  controller.getFilterOptionList
)

router.get(
  `${config.moduleRouteBaseURL}/${config.moduleRouteOptionURL}/:${categoryConfig.moduleRouteItemIdURL}`,
  controller.getFilterOptionList
)

router.post(
  `${config.moduleRouteBaseURL}/${config.moduleRouteOptionURL}`,
  filterFieldsValidator(),
  controller.createFilterOption
)

router.patch(
  `${config.moduleRouteBaseURL}/${config.moduleRouteOptionURL}/:${config.moduleRouteOptionItemIdURL}`,
  filterFieldsValidator(),
  controller.updateFilterOptionById 
)

router.delete(
  `${config.moduleRouteBaseURL}/${config.moduleRouteOptionURL}/:${config.moduleRouteOptionItemIdURL}`,
  controller.deleteFilterOptionById
)

export default router
