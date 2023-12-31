import { Schema, model } from 'mongoose'
import autopopulate from 'mongoose-autopopulate'
// import getArhimeticMeanNumber from '../utils/get-arhimetic-mean-number'

import type { ICompanyDocument } from './index.types'

const CompanySchema = new Schema(
  {
    name: {
      required: true,
      type: String,
    },
    logo_img: {
      type: String,
      default: '',
    },
    description: {
      required: true,
      type: String,
    },
    tag_names: {
      type: Array,
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    orders_count: {
      type: Number,
      default: 0,
    },
    rate: [
      {
        user: Object,
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
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
        autopopulate: true,
      },
    ],
    followers_count: {
      type: Number,
      default: 0,
    },
    banner_img: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

CompanySchema.plugin(autopopulate)

const Company = model<ICompanyDocument>('companies', CompanySchema)

export default Company
