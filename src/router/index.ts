import { Router } from 'express'
import SwaggerDocs from '../utils/swagger'
import { CompanyRouter } from '../modules/company'
import { AuthRouter } from '../modules/auth'
import { UserRouter } from '../modules/user'
import { CategoryRouter } from '../modules/category'
import {
  ProductOptionRouter,
  ProductBrandRouter,
} from '../modules/product-options'
import config from '../lib/default'

const router = Router()
router.use(config.apiBaseURL, CompanyRouter)
router.use(config.apiBaseURL, AuthRouter)
router.use(config.apiBaseURL, UserRouter)
router.use(config.apiBaseURL, CategoryRouter)
router.use(config.apiBaseURL, ProductOptionRouter)
router.use(config.apiBaseURL, ProductBrandRouter)

// Swager page
router.use(SwaggerDocs())

export default router
