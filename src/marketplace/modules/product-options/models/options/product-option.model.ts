import { Schema, model } from 'mongoose'

import type { IProductOptionDocument } from './product-option.types'

const ProductOptions = new Schema({
  name: {
    type: String,
    required: true,
  },
  category_id: [
    {
      type: String,
      required: true,
    },
  ],
  key: {
    type: String,
    required: true,
  },
  value: [
    {
      type: String,
      required: true,
    },
  ],
})

const ProductOption = model<IProductOptionDocument>(
  'product_options',
  ProductOptions
)

export default ProductOption
