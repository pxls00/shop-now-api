import ProductBrand from '../../models/brands/product-brand.model'
import { Types } from 'mongoose'

import type {
  IProductBrandDocument,
  IProductBrandBaseFields,
} from '../../models/brands/product-brand.types'

class ProductBrandService {
  public async getProductBrandList(): Promise<IProductBrandDocument[]> {
    return await ProductBrand.find({})
  }

  public async getProductBrandById(
    id: string
  ): Promise<IProductBrandDocument | undefined | null> {
    const productBrand = await ProductBrand.findById(id)
    return productBrand
  }

  public async getProductBrandByCategoryId(
    id: string
  ): Promise<IProductBrandDocument[] | undefined | null> {
    const categoryId = new Types.ObjectId(id)
    const productOption = await ProductBrand.find({
      category_id: { $in: [categoryId] },
    })

    return productOption
  }

  public async createProductBrand(fields: IProductBrandBaseFields) {
    const isProductBrandExists = await ProductBrand.findOne({
      key: fields.key,
    })

    if (isProductBrandExists) {
      return undefined
    }

    const productBrand = new ProductBrand(fields)
    await productBrand.save()
    return productBrand
  }

  public async updateProductBrandById(
    id: string,
    updatePayload: IProductBrandBaseFields
  ) {
    const productBrand = await ProductBrand.findByIdAndUpdate(
      id,
      { name: updatePayload.name, category_id: updatePayload.category_id },
      { new: true }
    )
    if (!productBrand) {
      return undefined
    }
    return productBrand
  }

  public async deleteProductBrandById(id: string) {
    const brandItem = await ProductBrand.findByIdAndDelete(id)
    if (brandItem) {
      return brandItem
    }
    return undefined
  }
}

export default new ProductBrandService()
