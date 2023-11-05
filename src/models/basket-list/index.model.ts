import { Schema, model } from 'mongoose'
import autopopulate from 'mongoose-autopopulate'

import  type { IOrderBasketList } from './index.types'

const OrderBasketSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
      autopopulate: true
    },
    products: [
      {
        name: {
          type: String,
          required: true
        },
        price: {
          type: String,
          required: true
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
        img: {
          type: String,
          default: '',
        },
        color: {
          type: String,
          default: '',
        },
        amount: {
          type: Number,
          required: true
        },
        custom_options: {
          type: Object,
          default: {},
        },
      }
    ]
  }
)

OrderBasketSchema.plugin(autopopulate)

const OrderBasket = model<IOrderBasketList>('order_baskets', OrderBasketSchema)

export default OrderBasket