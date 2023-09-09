import ProductTag from '../../models/tags/product-tag.model'
import { Types } from 'mongoose'

import type {
  IProductTagDocument,
  IProductTagBaseFields,
} from '../../models/tags/product-tag.types'

class ProductTagService {
  public async getProductTagList(): Promise<IProductTagDocument[]> {
    return await ProductTag.find({})
  }

  public async getProductTagById(
    id: string
  ): Promise<IProductTagDocument | undefined | null> {
    const productTag = await ProductTag.findById(id)
    return productTag
  }

  public async getProductTagByCategoryId(
    id: string
  ): Promise<IProductTagDocument[] | undefined | null> {
    const categoryId = new Types.ObjectId(id)
    const productOption = await ProductTag.find({
      category_id: { $in: [categoryId] },
    })

    return productOption
  }

  public async createProductTag(fields: IProductTagBaseFields) {
    const isProductTagExists = await ProductTag.findOne({
      name: fields.name,
    })

    if (isProductTagExists) {
      return undefined
    }

    const productTag = new ProductTag(fields)
    await productTag.save()
    return productTag
  }

  public async updateProductTagById(
    id: string,
    updatePayload: IProductTagBaseFields
  ) {
    const productTag = await ProductTag.findByIdAndUpdate(
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
    const tagItem = await ProductTag.findByIdAndDelete(id)
    if (tagItem) {
      return tagItem
    }
    return undefined
  }
}

export default new ProductTagService()
