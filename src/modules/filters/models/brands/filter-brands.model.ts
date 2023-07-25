import { Schema, model } from 'mongoose'

import type { IFilterBrandDocument } from './filter-brands.types'

const FilterBrands = new Schema({
  name: {
    type: String,
    required: true,
  },
  key: {
    type: String,
    required: true,
  },
  category_id: [
    {
      type: String,
      required: true,
    },
  ],
})

const FilterBrand = model<IFilterBrandDocument>('filter_brands', FilterBrands)

export default FilterBrand
