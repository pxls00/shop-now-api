import FilterBrand from '../../models/brands/filter-brands.model'

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

  public async createFilterBrand(fields: IFilterBrandBaseFields) {
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
      { name: updatePayload.name },
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
