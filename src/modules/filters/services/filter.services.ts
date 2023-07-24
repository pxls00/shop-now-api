import Filter from '../models/filter.model'

import type { IFilterDocument } from '../models/filter.type'

class FilterServices {
  public async getFilterList(): Promise<IFilterDocument[]> {
    return await Filter.find({})
  }

  public async getFilterByCategoryId(
    id: string
  ): Promise<IFilterDocument | undefined | null> {
    const filter = await Filter.findOne({ categories: { $in: [id] } })
    return filter
  }

  public async getFilterById(
    id: string
  ): Promise<IFilterDocument | undefined | null> {
    const filter = await Filter.findById(id)
    return filter
  }

  // public async getCategoryParentById(id: string) {
  // }

  // public async createCategory(id: string) {
  // }

  // public async updateCategoryById(id: string) {
  // }

  // public async deleteCategoryById(id: string) {
  // }

  // public async
}

export default new FilterServices()
