import { Schema, model } from 'mongoose'

import type { IProductTagDocument } from './product-tag.types'

const ProductTags = new Schema({
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
})

const ProductTag = model<IProductTagDocument>('product_tags', ProductTags)

export default ProductTag
