import { Router } from 'express'

import CompanyController from '../controllers/company.controller'

const routerEndpointName = '/companies'
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
router.get(`${routerEndpointName}`, controller.getCompanyList)
router.get(`${routerEndpointName}/:company_id`, controller.getCompanyById)

export default router
