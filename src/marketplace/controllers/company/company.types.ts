import type { ICompanyDocument } from '../../../models/company/index.types'

// Enums
export enum ESortOptions {
  by_popular,
  by_order_count,
  by_rate,
}

// Types
export type TSortOptionKey = keyof ICompanyDocument
export type TSortOptionValue = -1

export type TSortOptionsQuery = {
  [$key in keyof typeof ESortOptions]: boolean
}

export type TSortOptions = {
  [$key in keyof typeof ESortOptions]: ISortOption
}
// Interfaces
export interface IQueryOptionsQuery {
  skip: number
  limit: number
  search: string
}

export interface ISortOption {
  key: TSortOptionKey
  value: TSortOptionValue
}

export interface IGetCompanyListQuery
  extends TSortOptionsQuery,
    IQueryOptionsQuery {}
export interface IQueryOptions extends IQueryOptionsQuery {
  sortOption: ISortOption
}

export interface IGetCompanyListRes {
  data: ICompanyDocument[]
  total_count: number
  has_next_page: boolean
}
