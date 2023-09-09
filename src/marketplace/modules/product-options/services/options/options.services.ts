import ProductOption from '../../models/options/product-option.model'
import { Types } from 'mongoose'

import type {
  IProductOptionDocument,
  IProductOptionBaseFields,
} from '../../models/options/product-option.types'

class ProductOptionService {
  public async getProductOptionList(): Promise<IProductOptionDocument[]> {
    return await ProductOption.find({})
  }

  public async getProductOptionById(
    id: string
  ): Promise<IProductOptionDocument | undefined | null> {
    const productOption = await ProductOption.findById(id)
    return productOption
  }

  public async getProductOptionByCategoryId(
    id: string
  ): Promise<IProductOptionDocument[] | undefined | null> {
    const categoryId = new Types.ObjectId(id)
    const productOption = await ProductOption.find({
      category_id: { $in: [categoryId] },
    })
    return productOption
  }

  public async createProductOption(
    fields: IProductOptionBaseFields
  ): Promise<IProductOptionDocument | undefined> {
    const isProductBrandExists = await ProductOption.findOne({
      key: fields.key,
    })
    if (isProductBrandExists) {
      return undefined
    }
    const productOption = new ProductOption(fields)
    await productOption.save()
    return productOption
  }

  public async updateProductOptionById(
    id: string,
    updatePayload: IProductOptionBaseFields
  ) {
    const productOption = await ProductOption.findByIdAndUpdate(
      id,
      {
        name: updatePayload.name,
        category_id: updatePayload.category_id,
        value: updatePayload.value,
      },
      { new: true }
    )
    if (!productOption) {
      return undefined
    }
    return productOption
  }

  public async deleteProductOptionById(id: string) {
    const productOptionItem = await ProductOption.findByIdAndDelete(id)
    if (productOptionItem) {
      return productOptionItem
    }
    return undefined
  }
}

export default new ProductOptionService()
