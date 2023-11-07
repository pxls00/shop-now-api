import { Schema, model } from 'mongoose'
import autopopulate from 'mongoose-autopopulate'

import type { IOrderBasketDocument } from './index.types'

const OrderBaskets = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
      autopopulate: true,
    },
    totalPrice: {
      type: Number,
      default: 0,
    },
    products: [
      {
        name: {
          required: true,
          type: String,
        },
        _id: {
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
        amount: {
          type: Number,
          required: true,
        },
        img: {
          required: true,
          type: String,
        },
        color: {
          type: String,
          default: '',
        },
        created_at: {
          type: Date,
          default: Date.now,
        },
        custom_options: Object,
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

OrderBaskets.plugin(autopopulate)

const OrderBasket = model<IOrderBasketDocument>('order_baskets', OrderBaskets)

export default OrderBasket
