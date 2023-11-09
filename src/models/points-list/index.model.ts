import { Schema, model } from 'mongoose'

import type { IPointItemDocument } from './index.types'

const PointsListSchema = new Schema({
  location: {
    city: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    orientation: {
      type: String,
      required: true,
    },
    degrees: {
      lng: {
        type: String,
        required: true,
      },
      ltd: {
        type: String,
        required: true,
      },
    },
  },
  worktime: {
    work_time: {
      type: String,
      required: true,
    },
    non_working_days: {
      type: String,
      default: '',
    },
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  related_admin: {
    // temporarily
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
})

const Points = model<IPointItemDocument>('company_tags', PointsListSchema)

export default Points
