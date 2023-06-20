import { Schema, model } from 'mongoose'

import type { ICompanyDocument } from './company.types'

const CompanySchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  logo_img: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  orders_count: {
    type: Number,
    required: true,
  },
  rate: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
      },
      rate: {
        type: String,
        required: true,
      },
    },
  ],
  followers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
  ],
  review_comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
      },
      body: String,
      created_at: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  banner_img: {
    type: String,
    required: true,
  },
})

const Company = model<ICompanyDocument>('Companies', CompanySchema)

export default Company
