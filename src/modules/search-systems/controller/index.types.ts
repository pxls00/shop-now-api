import type { IProductTagDocument } from '../../product-options/models/tags/product-tag.types'

// Interfaces
export interface IPaginationOptionsQuery {
  skip: number
  limit: number
  search: string
}

export interface ISearchSystemTagsRes<T> {
  data: T[]
  total_count: number
  has_next_page: boolean
}
