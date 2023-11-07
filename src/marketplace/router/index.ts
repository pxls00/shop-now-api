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
import {
  ProductSearchTagsRouter,
  CompanySearchTagsRouter,
} from '../modules/search-systems'
import { ProductRouter } from '../modules/product'
import { CompanyTagRouter } from '../modules/company-options'
import { WishRouter } from '../modules/wishes'
import { OrderBasketRouter } from '../modules/order-baskets'

const router = Router()

router.use(AuthRouter)
router.use(WishRouter)
router.use(OrderBasketRouter)
router.use(CompanyRouter)
router.use(UserRouter)
router.use(CategoryRouter)
router.use(ProductOptionRouter)
router.use(ProductBrandRouter)
router.use(ProductTagRouter)
router.use(ProductRouter)
router.use(ProductSearchTagsRouter)
router.use(CompanySearchTagsRouter)
router.use(CompanyTagRouter)

// Swager page
router.use(SwaggerDocs())

export default router
