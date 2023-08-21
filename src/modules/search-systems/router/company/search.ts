import { Router } from 'express'
import config from '../../lib/config'
import CompanyTagsController from '../../controller/company/index.conroller'
// import { checkNameBodyRequest } from '../../middlewares/validators/company-option'

const router = Router()

const controller = new CompanyTagsController()

// tags
router.get(
  `${config.moduleRouteCompanySearchURL}`,
  controller.getCompanyTagList
)

export default router
