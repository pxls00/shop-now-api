import type { Document } from 'mongoose'
import type { IUserDocument } from '../user/index.types'
import type { ICompanyDocument } from '../company/index.types'
// Enums

// Types

// Interfaces

export interface IProductAmountCustomOption {
  [$key: string]: string
}

export interface IProductAmountByOption {
  amount: number
  color: string
  img: string
  custom_options?: IProductAmountCustomOption
}

export interface IProductSalesCompany {
  name: string
  _id: string
  logo_img: string
  rate_base: number
}

export interface IProductOptionColor {
  key: string
  name: string
  img: string
}

export interface IProductOptionBrand {
  key: string
  name: string
}

export interface IProductEmpty {
  name: string
  price: number
  sale_price?: number
  in_sale: boolean
  brand: IProductOptionBrand
  created_at: Date
}

export interface IProducFieldsBase extends IProductEmpty {
  delivery_time_to_reseive_point: string
  tag_names: string[]
  short_desc: string
  category_id: string[]
  full_desc?: string
  images: string[]
  amount_by_option?: IProductAmountByOption[]
}

export interface IRateItem {
  user: IUserDocument
  comment: string
  rate_number: number
  created_at: Date
}

export interface IProductDocument extends IProducFieldsBase, Document {
  sales_company: ICompanyDocument
  orders_count: number
  rate?: Array<string>
  rate_base: number
  category: string[]
  amount: number
}

export interface IOrderedProductSalesCompany {
  name: string
  _id: string
  logo_img: string
}

export interface IOrderedProductDocument extends IProductEmpty {
  amount: number
  img: string
  color?: string
  custom_options?: IProductAmountCustomOption
  _id: string
  sales_company: IOrderedProductSalesCompany
}
