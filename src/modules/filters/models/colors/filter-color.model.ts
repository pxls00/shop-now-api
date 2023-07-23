import { Schema, model } from 'mongoose'

import type { IFilterColorDocument } from './filter-color.type'

const FilterColors = new Schema({
  name: {
    type: String,
    required: true,
  },
  key: {
    type: String,
    required: true,
  },
})

const FilterColor = model<IFilterColorDocument>('filter_colors', FilterColors)

export default FilterColor
