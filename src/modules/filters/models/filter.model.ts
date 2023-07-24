import { Schema, model } from 'mongoose'
import autopopulate from 'mongoose-autopopulate'
// import getArhimeticMeanNumber from '../utils/get-arhimetic-mean-number'
// import logger from '../../../utils/logger'

import type { IFilterDocument } from './filter.type'

const FilterSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  categories: [
    {
      required: true,
      type: String,
    },
  ],
  filter_options: {
    colors: {
      type: [{ type: Schema.Types.ObjectId, ref: 'filter_colors' }],
      default: [],
    },
    brands: {
      type: [{ type: Schema.Types.ObjectId, ref: 'filter_brands' }],
      default: [],
    },
    custom_options: {
      type: Array,
      default: [],
    },
  },
})

FilterSchema.plugin(autopopulate)

const Filter = model<IFilterDocument>('filters', FilterSchema)

export default Filter
