import type { IProductDocument } from '../../product/models/product.types'

// Enums
export enum ESortOptions {
  by_order_count,
  by_rate,
  by_cheaper,
  by_more_expensive,
  by_added_recenly,
}

// Types
export type TWishKey = keyof IProductDocument
export type TSortOptionValue = -1 | 1

export type TSortOptionsQuery = {
  [$key in keyof typeof ESortOptions]: boolean
}

export type TSortOptions = {
  [$key in keyof typeof ESortOptions]: ISortOption
}
// Interfaces
export interface ISortOption {
  key: TWishKey
  value: TSortOptionValue
}

export type ISortOptionPipe = {
  [$key in keyof IProductDocument]: TSortOptionValue
}
export interface IGetWishItemParam {
  wish_id: string
}

export interface IPaginationOptionsQuery {
  skip: number
  limit: number
  search: string
}

export interface IQueryOptions extends IPaginationOptionsQuery {
  sort_options: ISortOption
}

export interface IGetWishListQuery
  extends TSortOptionsQuery,
    IPaginationOptionsQuery {}

export interface IAddProductToWishBody {
  product_id: string
}

export interface IGetWishListRes {
  data: IProductDocument[]
  total_count: number
  has_next_page: boolean
}
