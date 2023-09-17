import type { Document } from 'mongoose'
import type { IUserDocument } from '../../models/user/index.types'

// Enums

// Types

// Interfaces
export interface ICompanyFieldsBase {
  name: string
  email: string
  phone_number: string
  description: string
  tag_names: string[]
}

export interface IRateItem {
  user: IUserDocument
  comment: string
  rate_number: number
  created_at: Date
}

export interface ICompanyDocument extends ICompanyFieldsBase, Document {
  logo_img: string
  created_at: Date
  orders_count: number
  rate?: Array<IRateItem>
  rate_base: number
  followers?: Array<IUserDocument>
  followers_count: number
  banner_img: string
}
