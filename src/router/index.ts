import { Router } from 'express'
import SwaggerDocs from '../utils/swagger'
import { CompanyRouter } from '../modules/company/index'
import { AuthRouter } from '../modules/auth/index'
import { UserRouter } from '../modules/user'
import config from '../lib/default'

const router = Router()
router.use(config.apiBaseURL, CompanyRouter)
router.use(config.apiBaseURL, AuthRouter)
router.use(config.apiBaseURL, UserRouter)

// Swager page
router.use(SwaggerDocs())

export default router
