import { Router } from 'express'
import MarketPlaceRouter from '../marketplace/router/index'

import config from '../lib/default'

const router = Router()

// MarketPlace router
router.use(config.apiMarketPlaceURL, MarketPlaceRouter)

export default router
