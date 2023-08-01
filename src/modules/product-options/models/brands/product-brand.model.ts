import { Schema, model } from 'mongoose'

import type { IProductBrandDocument } from './product-brand.types'

const ProductBrands = new Schema({
  name: {
    type: String,
    required: true,
  },
  key: {
    type: String,
    required: true,
  },
  category_id: [
    {
      type: String,
      required: true,
    },
  ],
})

const ProductBrand = model<IProductBrandDocument>(
  'product_brands',
  ProductBrands
)

export default ProductBrand
