import { Schema, model } from 'mongoose'
import autopopulate from 'mongoose-autopopulate'
// import getArhimeticMeanNumber from '../utils/get-arhimetic-mean-number'
// import logger from '../../../utils/logger'

import type { IProductDocument } from './product.types'

const ProductSchema = new Schema(
  {
    name: {
      required: true,
      type: String,
    },
    price: {
      required: true,
      type: Number,
    },
    sale_price: {
      type: Number,
      default: -1,
    },
    brand: {
      type: String,
      required: true,
    },
    in_sale: {
      type: Boolean,
      default: false,
    },
    delivery_time_to_reseive_point: {
      type: String,
      required: true,
    },
    tag_names: {
      type: Array,
      required: true,
    },
    short_desc: {
      type: String,
      required: true,
    },
    full_desc: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    amount_by_option: [
      {
        amount: {
          required: true,
          type: Number,
        },
        color: {
          type: String,
          default: '',
        },
        img: {
          type: String,
          default: '',
        },
        custom_options: {
          type: Object,
          default: {},
        },
      },
    ],
    sales_company: {
      required: true,
      type: Schema.Types.ObjectId,
      ref: 'companies',
    },
    rate: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'users',
          required: true,
        },
        comment: {
          type: String,
          default: '',
        },
        rate_number: {
          type: Number,
          required: true,
        },
        created_at: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    rate_base: {
      type: Number,
      default: 5.0,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    orders_count: {
      type: Number,
      default: 0,
    },
    category_id: {
      type: Array,
      default: [],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

ProductSchema.plugin(autopopulate)

const Product = model<IProductDocument>('products', ProductSchema)

export default Product
