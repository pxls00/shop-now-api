import { Router } from 'express'
import SwaggerDocs from '../utils/swagger'
import { CompanyRouter } from '../modules/company'
import { AuthRouter } from '../modules/auth'
import { UserRouter } from '../modules/user'
import { CategoryRouter } from '../modules/category'
import {
  ProductOptionRouter,
  ProductBrandRouter,
  ProductTagRouter,
} from '../modules/product-options'
import { ProductRouter } from '../modules/product'
import config from '../lib/default'

const router = Router()
router.use(config.apiBaseURL, CompanyRouter)
router.use(config.apiBaseURL, AuthRouter)
router.use(config.apiBaseURL, UserRouter)
router.use(config.apiBaseURL, CategoryRouter)
router.use(config.apiBaseURL, ProductOptionRouter)
router.use(config.apiBaseURL, ProductBrandRouter)
router.use(config.apiBaseURL, ProductTagRouter)
router.use(config.apiBaseURL, ProductRouter)

// Swager page
router.use(SwaggerDocs())

export default router
