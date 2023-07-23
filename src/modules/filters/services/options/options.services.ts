import FilterOption from '../../models/options/filter-option.model'

import type {
  IFilterOptionDocument,
  IFilterOptionBaseFields,
} from '../../models/options/filter-option.types'

class FilterServices {
  public async getFilterOptionList(): Promise<IFilterOptionDocument[]> {
    return await FilterOption.find({})
  }

  public async getFilterOptionById(
    id: string
  ): Promise<IFilterOptionDocument | undefined | null> {
    const filterOption = await FilterOption.findById(id)
    return filterOption
  }

  public async createFilterOption(fields: IFilterOptionBaseFields) {
    const filterOption = new FilterOption(fields)
    await filterOption.save()
    return filterOption
  }

  public async updateFilterOptionById(
    id: string,
    updatePayload: IFilterOptionBaseFields
  ) {
    const filterOption = await FilterOption.findByIdAndUpdate(
      id,
      { name: updatePayload.name },
      { new: true }
    )
    if (!filterOption) {
      return undefined
    }
    return filterOption
  }

  public async deleteFilterOptionById(id: string) {
    const brandItem = await FilterOption.findByIdAndDelete(id)
    if (brandItem) {
      return brandItem
    }
    return undefined
  }
}

export default new FilterServices()
