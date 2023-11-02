import ProductTagModel from '../../../../models/product-options/tags/product-tag.model'
import { Types } from 'mongoose'

import type {
  IProductTagDocument,
  IProductTagBaseFields,
} from '../../../../models/product-options/tags/product-tag.types'

class ProductTagService {
  public async getProductTagList(): Promise<IProductTagDocument[]> {
    return await ProductTagModel.find({})
  }

  public async getProductTagById(
    id: string
  ): Promise<IProductTagDocument | undefined | null> {
    const productTag = await ProductTagModel.findById(id)
    return productTag
  }

  public async getProductTagByCategoryId(
    id: string
  ): Promise<IProductTagDocument[] | undefined | null> {
    const categoryId = new Types.ObjectId(id)
    const productOption = await ProductTagModel.find({
      category_id: { $in: [categoryId] },
    })

    return productOption
  }

  public async createProductTag(fields: IProductTagBaseFields) {
    const isProductTagExists = await ProductTagModel.findOne({
      name: fields.name,
    })

    if (isProductTagExists) {
      return undefined
    }

    const productTag = new ProductTagModel(fields)
    await productTag.save()
    return productTag
  }

  public async updateProductTagById(
    id: string,
    updatePayload: IProductTagBaseFields
  ) {
    const productTag = await ProductTagModel.findByIdAndUpdate(
      id,
      { name: updatePayload.name, category_id: updatePayload.category_id },
      { new: true }
    )
    if (!productTag) {
      return undefined
    }
    return productTag
  }

  public async deleteProductTagById(id: string) {
    const tagItem = await ProductTagModel.findByIdAndDelete(id)
    if (tagItem) {
      return tagItem
    }
    return undefined
  }
}

export default new ProductTagService()
