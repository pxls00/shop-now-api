import { Router } from 'express'
import config from '../lib/config'

import CategoryController from '../../../controllers/category/category.controller'
import categoryNameValidator from '../middlewares/validators/category-name.validator'

const router = Router()

const controller = new CategoryController()

router.get(`${config.moduleRouteBaseURL}`, controller.getCategoryList)
router.get(
  `${config.moduleRouteBaseURL}/:${config.moduleRouteItemIdURL}`,
  controller.getCategoryById
)
router.post(
  `${config.moduleRouteBaseURL}`,
  categoryNameValidator(),
  controller.createCategory
)
router.post(
  `${config.moduleRouteBaseURL}/:${config.moduleRouteItemIdURL}`,
  categoryNameValidator(),
  controller.createCategory
)
router.patch(
  `${config.moduleRouteBaseURL}/:${config.moduleRouteItemIdURL}`,
  categoryNameValidator(),
  controller.updateCategoryById
)
router.delete(
  `${config.moduleRouteBaseURL}/:${config.moduleRouteItemIdURL}`,
  controller.deleteCategoryById
)

export default router
