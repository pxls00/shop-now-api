import type { ICategoryDocument } from '../../../../models/category/index.types'
import type { IGetCategoryRecursivelyById } from './get-category-recursively.types'

function getCategoryRecursivelyById(
  id: string,
  categories: ICategoryDocument[],
  nested_position = 1 as number,
  main_category?: ICategoryDocument
): IGetCategoryRecursivelyById | void {
  for (let i = 0; i < categories.length; i++) {
    const item = categories[i] as ICategoryDocument
    if (item._id.toString() === id.toString()) {
      if (nested_position < 2) {
        return {
          category: item,
        }
      }
      return {
        category: item,
        main_category: main_category,
      }
    } else if (item._id.toString() !== id && item.nested_categories.length) {
      if (nested_position < 2) {
        return getCategoryRecursivelyById(
          id,
          item.nested_categories as ICategoryDocument[],
          ++nested_position,
          item
        )
      }
      return getCategoryRecursivelyById(
        id,
        item.nested_categories as ICategoryDocument[],
        ++nested_position,
        main_category
      )
    }
  }
}

export default getCategoryRecursivelyById
