import type { ICategoryDocument } from '../../../../models/category/index.types'

export interface IGetCategoryRecursivelyById {
  category: ICategoryDocument
  main_category?: ICategoryDocument
}
