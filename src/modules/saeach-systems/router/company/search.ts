import { Router } from 'express'
import config from '../../lib/config'
// import ProductTagsController from '../../controllers/tags/tags.controller'

const router = Router()

// const controller = new ProductTagsController()

// tags
router.get(`${config.moduleRouteCompanySearchURL}`)

export default router
