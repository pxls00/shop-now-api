import { Router } from 'express'
import config from '../../lib/config'
import ProductTagsController from '../../controller/product/index.controller'
// import { checkNameBodyRequest } from '../../middlewares/validators/product-option'

const router = Router()

const controller = new ProductTagsController()

// tags
router.get(`${config.moduleRouteProductSearchURL}`, controller.getProductTagList)

export default router
