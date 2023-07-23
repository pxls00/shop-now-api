import FilterColor from '../../models/colors/filter-color.model'

import type {
  IFilterColorDocument,
  IFilterColorBaseFields,
} from '../../models/colors/filter-color.type'

class FilterServices {
  public async getFilterColorList(): Promise<IFilterColorDocument[]> {
    return await FilterColor.find({})
  }

  public async getFilterColorById(
    id: string
  ): Promise<IFilterColorDocument | undefined | null> {
    const filterColor = await FilterColor.findById(id)
    return filterColor
  }

  public async createFilterColor(
    fields: IFilterColorBaseFields
  ): Promise<IFilterColorDocument | undefined> {
    const isFilterColorExists = await FilterColor.findOne({ key: fields.key })
    if (isFilterColorExists) {
      return undefined
    }
    const filterColor = new FilterColor(fields)
    await filterColor.save()
    return filterColor
  }

  public async updateFilterColorById(
    id: string,
    updatePayload: IFilterColorBaseFields
  ): Promise<IFilterColorDocument | undefined> {
    const filterColor = await FilterColor.findByIdAndUpdate(
      id,
      { name: updatePayload.name },
      { new: true }
    )
    if (!filterColor) {
      return undefined
    }
    return filterColor
  }

  public async deleteFilterColorById(
    id: string
  ): Promise<IFilterColorDocument | undefined> {
    const colorItem = await FilterColor.findByIdAndDelete(id)
    if (colorItem) {
      return colorItem
    }
    return undefined
  }
}

export default new FilterServices()
