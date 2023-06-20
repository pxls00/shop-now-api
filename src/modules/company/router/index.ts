import { Router } from 'express'

import CompanyController from '../controllers/company.controller'

const routerEndpointName = '/companies'
const router = Router()

const controller = new CompanyController()

router.get(`${routerEndpointName}`, controller.getCompanyList)
router.get(`${routerEndpointName}/:company_id`, controller.getCompanyById)

export default router
