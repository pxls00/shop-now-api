import { Schema, model } from 'mongoose'

import type { ICompanyTagDocument } from './index.types'

const CompanyTags = new Schema({
  name: {
    type: String,
    required: true,
  },
})

const CompanyTag = model<ICompanyTagDocument>('company_tags', CompanyTags)

export default CompanyTag
