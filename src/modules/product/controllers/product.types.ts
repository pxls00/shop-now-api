import type {
  IProductDocument,
  IProductAmountCustomOption,
} from '../models/product.types'

// Enums
export enum ESortOptions {
  by_order_count,
  by_rate,
  by_cheaper,
  by_more_expensive,
  by_added_recenly,
}

export enum EFilterOptionsBase {
  fl_category,
  fl_price,
  fl_color,
  fl_brand,
  fl_custom_options,
}
/**
 * 1. Search
 * 2. Category
 * 3. Filter_price
 * 4. Filter_color
 * 5. Filter_options
 * 6. Sort_options
 * 7. pagination
 */

// Types
export type TProductKey = keyof IProductDocument
export type TSortOptionValue = -1 | 1

export type TSortOptionsQuery = {
  [$key in keyof typeof ESortOptions]: boolean
}

export type TSortOptions = {
  [$key in keyof typeof ESortOptions]: ISortOption
}
// Interfaces
export interface ISortOption {
  key: TProductKey
  value: TSortOptionValue
}

export type ISortOptionPipe = {
  [$key in keyof IProductDocument]: TSortOptionValue
}
export interface IGetProductItemParam {
  product_id: string
}

export interface IProductFilterOptionsQuery {
  fl_category_id: string
  fl_price: string
  fl_color: string
  fl_brand: string
  fl_custom_options: IProductAmountCustomOption
}

export interface IPaginationOptionsQuery {
  skip: number
  limit: number
  search: string
}

export interface IQueryOptions extends IPaginationOptionsQuery {
  sort_options: ISortOption
  filter_options: IProductFilterOptionsQuery
}

export interface IGetProductListQuery
  extends IProductFilterOptionsQuery,
    TSortOptionsQuery,
    IPaginationOptionsQuery {}

export interface IGetProductListRes {
  data: IProductDocument[]
  total_count: number
  has_next_page: boolean
}
