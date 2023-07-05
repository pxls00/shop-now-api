import type { ICategoryDocument } from '../models/category.types'

export interface IGetCategoryRecursivelyById {
  category: ICategoryDocument
  main_category?: ICategoryDocument
}
