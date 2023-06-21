import { Router } from 'express'
import SwaggerDocs from '../utils/swagger'
import { CompanyRouter } from '../modules/company/index'
import config from '../lib/default'

const router = Router()
router.use(config.apiBaseURL, CompanyRouter)

// Swager page
router.use(SwaggerDocs())

export default router
