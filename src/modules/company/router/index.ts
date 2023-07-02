import { Router } from 'express'
import config from '../lib/config'

import CompanyController from '../controllers/company.controller'
import createBodyValidator from '../middlewares/validators/create-company-body.validator'

const router = Router()

const controller = new CompanyController()

router.get(`${config.moduleRouteBaseURL}`, controller.getCompanyList)
router.get(
  `${config.moduleRouteBaseURL}/:${config.moduleRouteItemIdURL}`,
  controller.getCompanyById
)
router.post(
  `${config.moduleRouteBaseURL}`,
  createBodyValidator(),
  controller.createCompany
)

export default router
