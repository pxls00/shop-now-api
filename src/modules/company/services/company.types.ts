import type { TSortOptionValue } from '../controllers/company.types'
import type { ICompanyDocument } from '../models/company.types';

export interface ISortOption {
  [$key: string]: TSortOptionValue
}

export interface IGetCompanyListRes {
  data: ICompanyDocument[]
  total_count: number
  has_next_page: boolean
}

export interface IGetCompanyByIdRes {
  data: ICompanyDocument
}