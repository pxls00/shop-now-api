import { Router } from 'express'
import { CompanyRouter } from '../modules/companies/index'
import config from '../lib/configs/default'

const router = Router()
router.use(config.apiBaseURL, CompanyRouter)

export default router