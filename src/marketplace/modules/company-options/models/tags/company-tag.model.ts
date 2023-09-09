import { Schema, model } from 'mongoose'

import type { ICompanyTagDocument } from './company-tag.types'

const CompanyTags = new Schema({
  name: {
    type: String,
    required: true,
  },
})

const CompanyTag = model<ICompanyTagDocument>('company_tags', CompanyTags)

export default CompanyTag
