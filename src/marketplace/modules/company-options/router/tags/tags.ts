import { Router } from 'express'
import config from '../../lib/config'
import CompanyTagsController from '../../../../controllers/company-options/tags.controller'
import { checkNameBodyRequest } from '../../middlewares/validators/company-option'

const router = Router()

const controller = new CompanyTagsController()

// tags
router.get(`${config.moduleRouteTagURL}`, controller.getCompanyTagList)

router.post(
  `${config.moduleRouteTagURL}`,
  [checkNameBodyRequest()],
  controller.createCompanyTag
)

router.patch(
  `${config.moduleRouteTagURL}/:${config.moduleRouteTagItemIdURL}`,
  [checkNameBodyRequest()],
  controller.updateCompanyTagById
)

router.delete(
  `${config.moduleRouteTagURL}/:${config.moduleRouteTagItemIdURL}`,
  controller.deleteCompanyTagById
)

export default router
