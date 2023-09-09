import { Schema, model } from 'mongoose'
// import autopopulateimport from 'mongoose-autopopulate';
import type { ICategoryDocument } from './category.types'

const CategorySchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  key: {
    required: true,
    type: String,
  },
  nested_categories: {
    type: [this],
    default: () => [],
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
})

const Category = model<ICategoryDocument>('category', CategorySchema)

export default Category
