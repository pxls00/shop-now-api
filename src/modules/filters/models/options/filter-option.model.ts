import { Schema, model } from 'mongoose'

import type { IFilterOptionDocument } from './filter-option.types'

const FilterProducts = new Schema({
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
  key: {
    type: String,
    required: true,
  },
  value: [
    {
      type: String,
      required: true,
    },
  ],
})

const FilterProduct = model<IFilterOptionDocument>(
  'filter_options',
  FilterProducts
)

export default FilterProduct
