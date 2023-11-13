import { Schema, model } from 'mongoose'
import autopopulate from 'mongoose-autopopulate'

import type { IOrderDetailDocument } from './index.types'

const OrderDetailScheme = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
      autopopulate: true,
    },
    price: {
      type: Number,
      required: true
    },
    get_product: {
      type: String,
      default: 'pick-up-point'
    },
    status: {
      type: String,
      default: "ordered"
    },
    delivery_time: {
      type: String,
      default: "1day"
    },
    order_id: {
      type: String,
      required: true
    },
    has_paid: {
      type: Boolean,
      default: false
    },
    products_length: {
      type: Number,
      required: true
    },
    order_detail_id: {
      type: String,
      required: true
    },
    order_info_id: {
      type: String,
      required: true
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

OrderDetailScheme.plugin(autopopulate)

const OrderDetail = model<IOrderDetailDocument>('order_detail', OrderDetailScheme)

export default OrderDetail
