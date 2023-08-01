import Category from '../models/category.model'
import getCategoryRecursivelyById from '../utils/get-category-recursively'
import getCategoryParentRecursivelyById from '../utils/get-category-parent-recursively'

// import type {Document} from 'mongoose'
import type {
  ICategoryDocument,
  ICategoryFieldsBase,
} from '../models/category.types'
import type { IGetCategoryRecursivelyById } from '../utils/get-category-recursively.types'
import type { IGetCategoryParentRecursivelyById } from '../utils/get-category-parent-recursively.types'
import mongoose from 'mongoose'

class CategoryServices {
  public async getCategoryList(): Promise<ICategoryDocument[]> {
    return await Category.find({})
  }

  public async getCategoryById(
    id: string
  ): Promise<ICategoryDocument | IGetCategoryRecursivelyById | undefined> {
    const categories = await this.getCategoryList()
    const category = categories.find(
      (item) => item._id.toString() === id.toString()
    )

    if (category) {
      return { category }
    }

    const { category: categoryResult, main_category } =
      getCategoryRecursivelyById(id, categories) as IGetCategoryRecursivelyById
    if (!categoryResult) {
      return undefined
    } else {
      if (main_category) {
        return {
          category: categoryResult,
          main_category,
        }
      }
      return { category: categoryResult }
    }
  }

  public async getCategoryParentById(
    id: string
  ): Promise<
    ICategoryDocument | IGetCategoryParentRecursivelyById | undefined
  > {
    const categories = await this.getCategoryList()
    const category = categories.find(
      (item) => item._id.toString() === id.toString()
    )

    if (category) {
      return { parent_category: category }
    }

    const { parent_category, main_category } = getCategoryParentRecursivelyById(
      id,
      categories
    ) as IGetCategoryParentRecursivelyById
    if (!parent_category) {
      return undefined
    } else {
      if (main_category) {
        return {
          parent_category,
          main_category,
        }
      }
      return { parent_category }
    }
  }

  public async createCategory(
    fields: ICategoryFieldsBase,
    id: string | undefined
  ): Promise<ICategoryDocument | null | undefined> {
    const newCategoryFields = { ...fields } as ICategoryDocument
    if (id) {
      const { category, main_category } = (await this.getCategoryById(
        id
      )) as IGetCategoryRecursivelyById

      if (!category) {
        return undefined
      }

      newCategoryFields['_id'] = new mongoose.Types.ObjectId()
      newCategoryFields['created_at'] = new Date()
      newCategoryFields['nested_categories'] = []

      category.nested_categories.push(newCategoryFields as ICategoryDocument)

      if (main_category) {
        await main_category.save()
        const model = await Category.findByIdAndUpdate(
          main_category._id,
          main_category,
          { new: true }
        )

        return model
      }

      await category.save()
      return category
    } else {
      const category = new Category(newCategoryFields)
      await category.save()
      return category
    }
  }

  public async updateCategoryById(
    id: string,
    updatePayload: ICategoryFieldsBase
  ) {
    const { category, main_category } = (await this.getCategoryById(
      id
    )) as IGetCategoryRecursivelyById

    if (!category) {
      return undefined
    }

    category.name = updatePayload.name
    category.key = updatePayload.key

    if (main_category) {
      await main_category.save()
      const model = await Category.findByIdAndUpdate(
        main_category._id,
        main_category,
        { new: true }
      )

      return model
    }

    await category.save()
    return category
  }

  public async deleteCategoryById(id: string) {
    const { parent_category, main_category } =
      (await this.getCategoryParentById(
        id
      )) as IGetCategoryParentRecursivelyById

    if (!parent_category) {
      return undefined
    }

    if (main_category) {
      parent_category.nested_categories =
        parent_category.nested_categories.filter(
          (item) => item._id.toString() !== id.toString()
        )
      await main_category.save()
      const model = await Category.findByIdAndUpdate(
        main_category._id,
        main_category,
        { new: true }
      )

      return model
    }

    await Category.findByIdAndDelete(parent_category.id)
    return parent_category
  }

  // public async
}

export default new CategoryServices()
