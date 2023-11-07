import { IOrderedProductDocument } from '../../../models/product/index.types'

// Enums
export enum ESortOptions {
  by_cheaper,
  by_more_expensive,
  by_added_recenly,
}

// Types
export type TOrderBasketKey = keyof IOrderedProductDocument
export type TSortOptionValue = -1 | 1

export type TSortOptionsQuery = {
  [$key in keyof typeof ESortOptions]: boolean
}

export type TSortOptions = {
  [$key in keyof typeof ESortOptions]: ISortOption
}
// Interfaces
export interface ISortOption {
  key: TOrderBasketKey
  value: TSortOptionValue
}

export type ISortOptionPipe = {
  [$key in keyof IOrderedProductDocument]: TSortOptionValue
}
export interface IGetOrderBasketItemParam {
  basket_id: string
}

export interface IPaginationOptionsQuery {
  skip: number
  limit: number
  search: string
}

export interface IQueryOptions extends IPaginationOptionsQuery {
  sort_options: ISortOption
}

export interface IGetOrderBasketListQuery
  extends TSortOptionsQuery,
    IPaginationOptionsQuery {}

export interface IGetOrderBasketListRes {
  data: IOrderedProductDocument[]
  total_count: number
  has_next_page: boolean
  total_price: number
}
