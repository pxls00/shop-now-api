import type { ICategoryDocument } from '../models/category.types'
import type { IGetCategoryParentRecursivelyById } from './get-category-parent-recursively.types'

function getCategoryParentRecursivelyById(
  id: string,
  categories: ICategoryDocument[],
  nested_position = 1 as number,
  parent_category?: ICategoryDocument,
  main_category?: ICategoryDocument
): IGetCategoryParentRecursivelyById | void {
  for (let i = 0; i < categories.length; i++) {
    const item = categories[i] as ICategoryDocument
    if (item._id.toString() === id.toString()) {
      if (nested_position < 2) {
        return {
          parent_category: item as ICategoryDocument,
        }
      }
      return {
        parent_category: parent_category as ICategoryDocument,
        main_category: main_category,
      }
    } else if (item._id.toString() !== id && item.nested_categories.length) {
      if (nested_position < 2) {
        return getCategoryParentRecursivelyById(
          id,
          item.nested_categories as ICategoryDocument[],
          ++nested_position,
          item,
          item
        )
      }
      return getCategoryParentRecursivelyById(
        id,
        item.nested_categories as ICategoryDocument[],
        ++nested_position,
        item,
        main_category
      )
    }
  }
}

export default getCategoryParentRecursivelyById
