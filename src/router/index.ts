import { Router } from 'express'
import config from '../lib/default'

// Marketplace
import MarketPlaceRouter from '../marketplace/router/index'

// Company Admin
// import CompanyAdminRouter from '../company-admin/router/index'

const router = Router()

// MarketPlace router
router.use(config.apiMarketPlaceURL, MarketPlaceRouter)

// CompanyAdmin router
// router.use(config.apiCompanyAdminURL, CompanyAdminRouter)

export default router
