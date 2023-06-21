import { Router } from 'express'
import config from '../lib/config'

import CompanyController from '../controllers/company.controller'

const router = Router()

const controller = new CompanyController()

/**
 *  @openapi
 *  /api/companies:
 *    get:
 *      tags:
 *      - Companies
 *      summary: Get Companies List
 *      description: Responds if the app is up and running
 */
router.get(`${config.moduleRouteBaseURL}`, controller.getCompanyList)
router.get(
  `${config.moduleRouteBaseURL}/:${config.moduleRouteItemIdURL}`,
  controller.getCompanyById
)

export default router
