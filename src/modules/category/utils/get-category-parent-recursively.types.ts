import type { ICategoryDocument } from '../models/category.types'

export interface IGetCategoryParentRecursivelyById {
  parent_category: ICategoryDocument
  main_category?: ICategoryDocument
}
