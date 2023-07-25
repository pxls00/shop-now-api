import FilterBrand from '../../models/brands/filter-brands.model'
import { Types } from 'mongoose'

import type {
  IFilterBrandDocument,
  IFilterBrandBaseFields,
} from '../../models/brands/filter-brands.types'

class FilterServices {
  public async getFilterBrandList(): Promise<IFilterBrandDocument[]> {
    return await FilterBrand.find({})
  }

  public async getFilterBrandById(
    id: string
  ): Promise<IFilterBrandDocument | undefined | null> {
    const filterBrand = await FilterBrand.findById(id)
    return filterBrand
  }

  public async getFilterBrandByCategoryId(
    id: string
  ): Promise<IFilterBrandDocument[] | undefined | null> {
    const categoryId = new Types.ObjectId(id)
    const filterOption = await FilterBrand.find({
      category_id: { $in: [categoryId] },
    })

    return filterOption
  }

  public async createFilterBrand(fields: IFilterBrandBaseFields) {
    const isFilterBrandExists = await FilterBrand.findOne({
      key: fields.key,
    })

    if (isFilterBrandExists) {
      return undefined
    }

    const filterBrand = new FilterBrand(fields)
    await filterBrand.save()
    return filterBrand
  }

  public async updateFilterBrandById(
    id: string,
    updatePayload: IFilterBrandBaseFields
  ) {
    const filterBrand = await FilterBrand.findByIdAndUpdate(
      id,
      { name: updatePayload.name, category_id: updatePayload.category_id },
      { new: true }
    )
    if (!filterBrand) {
      return undefined
    }
    return filterBrand
  }

  public async deleteFilterBrandById(id: string) {
    const brandItem = await FilterBrand.findByIdAndDelete(id)
    if (brandItem) {
      return brandItem
    }
    return undefined
  }
}

export default new FilterServices()
