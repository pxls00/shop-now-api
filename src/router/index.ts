import { Router } from 'express'
import SwaggerDocs from '../utils/swagger'
import { CompanyRouter } from '../modules/company'
import { AuthRouter } from '../modules/auth'
import { UserRouter } from '../modules/user'
import { CategoryRouter } from '../modules/category'
import {
  FilterRouter,
  FilterColorRouter,
  FilterOptionRouter,
  FilterBrandRouter,
} from '../modules/filters'
import config from '../lib/default'

const router = Router()
router.use(config.apiBaseURL, CompanyRouter)
router.use(config.apiBaseURL, AuthRouter)
router.use(config.apiBaseURL, UserRouter)
router.use(config.apiBaseURL, CategoryRouter)
router.use(config.apiBaseURL, FilterRouter)
router.use(config.apiBaseURL, FilterColorRouter)
router.use(config.apiBaseURL, FilterOptionRouter)
router.use(config.apiBaseURL, FilterBrandRouter)

// Swager page
router.use(SwaggerDocs())

export default router
