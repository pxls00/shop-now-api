import { Router } from 'express'
import config from '../lib/config'
import ProductController from '../../../controllers/product/product.controller'
import {
  checkFieldLengthBodyRequest,
  checkFieldIsNumbericBodyRequest,
  checkFieldIsArrayRequest,
  checkFieldIsBooleanRequest,
  checkTagNamesBodyRequest,
  checkAmountByOptionFieldBodyRequest,
} from '../middlewares/validators/check-create-body'

const router = Router()
const controller = new ProductController()

router.get(`${config.moduleRouteBaseURL}`, controller.getProductList)

router.get(
  `${config.moduleRouteBaseURL}/:${config.moduleRouteItemIdURL}`,
  controller.getProductById
)

router.post(
  `${config.moduleRouteBaseURL}`,
  [
    checkFieldLengthBodyRequest('name', 5, 255),
    checkFieldIsNumbericBodyRequest('price'),
    checkFieldIsNumbericBodyRequest('sale_price'),
    checkFieldIsBooleanRequest('in_sale'),
    checkFieldLengthBodyRequest('delivery_time_to_reseive_point'),
    checkFieldIsArrayRequest('tag_names'),
    checkFieldIsArrayRequest('category_id'),
    checkTagNamesBodyRequest(),
    checkFieldLengthBodyRequest('short_desc', 0, 255),
    checkFieldLengthBodyRequest('full_desc', 50),
    checkFieldIsArrayRequest('amount_by_option'),
    checkAmountByOptionFieldBodyRequest(),
  ],
  controller.createProduct
)

router.patch(
  `${config.moduleRouteBaseURL}/:${config.moduleRouteItemIdURL}`,
  [
    checkFieldLengthBodyRequest('name', 5, 255),
    checkFieldIsNumbericBodyRequest('price'),
    checkFieldIsNumbericBodyRequest('sale_price'),
    checkFieldIsBooleanRequest('in_sale'),
    checkFieldLengthBodyRequest('delivery_time_to_reseive_point'),
    checkFieldIsArrayRequest('tag_names'),
    checkFieldIsArrayRequest('category_id'),
    checkTagNamesBodyRequest(),
    checkFieldLengthBodyRequest('short_desc', 0, 255),
    checkFieldLengthBodyRequest('full_desc', 50),
    checkFieldIsArrayRequest('amount_by_option'),
    checkAmountByOptionFieldBodyRequest(),
  ],
  controller.updateProduct
)

router.delete(
  `${config.moduleRouteBaseURL}/:${config.moduleRouteItemIdURL}`,
  controller.deleteProductById
)
export default router
