import FilterOption from '../../models/options/filter-option.model'
import { Types } from 'mongoose'

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

  public async getFilterOptionByCategoryId(
    id: string
  ): Promise<IFilterOptionDocument[] | undefined | null> {
    const categoryId = new Types.ObjectId(id)
    const filterOption = await FilterOption.find({
      category_id: { $in: [categoryId] },
    })
    return filterOption
  }

  public async createFilterOption(
    fields: IFilterOptionBaseFields
  ): Promise<IFilterOptionDocument | undefined> {
    const isFilterColorExists = await FilterOption.findOne({
      key: fields.key,
    })
    if (isFilterColorExists) {
      return undefined
    }
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
      { name: updatePayload.name, category_id: updatePayload.category_id },
      { new: true }
    )
    if (!filterOption) {
      return undefined
    }
    return filterOption
  }

  public async deleteFilterOptionById(id: string) {
    const filterOptionItem = await FilterOption.findByIdAndDelete(id)
    if (filterOptionItem) {
      return filterOptionItem
    }
    return undefined
  }
}

export default new FilterServices()
