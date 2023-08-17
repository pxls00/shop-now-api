import Product from '../models/product.model'

import type {
  IProducFieldsBase,
  IProductDocument,
  IProductSalesCompany,
  IProductAmountByOption,
} from '../models/product.types'
import type { Document, FilterQuery } from 'mongoose'
import type {
  IQueryOptions,
  TProductKey,
  ISortOptionPipe,
  IGetProductListRes,
} from '../controllers/product.types'
import type {
  TQueryGetOptions,
  IQueryGetOptionCustom,
  IQueryGetOption,
} from './product.types'

class ProductServices {
  private removableFields: Array<keyof IProductSalesCompany> = [
    '_id',
    'rate_base',
    'logo_img',
  ]

  public async getProductList(queryOption: IQueryOptions): Promise<any> {
    // Pagination
    const pagination = []
    if (!isNaN(queryOption.limit)) {
      pagination.push({ $limit: Number(queryOption.limit) })
    } else if (!isNaN(queryOption.skip)) {
      pagination.push({ $skip: Number(queryOption.skip) })
    }

    // Sort
    const sortOption = {} as ISortOptionPipe
    sortOption[queryOption.sort_options.key as TProductKey] =
      queryOption.sort_options.value

    // Query
    const queryFilter = {} as FilterQuery<TQueryGetOptions>

    if (queryOption.search) {
      queryFilter['tag_names'] = { $in: [new RegExp(queryOption.search, 'i')] }
    }

    // Check existable of filters
    for (const key in queryOption.filter_options) {
      const itemValue =
        queryOption.filter_options[
          key as keyof typeof queryOption.filter_options
        ]
      if (itemValue && key === 'fl_category') {
        queryFilter['category_id'] = {
          $in: [queryOption.filter_options.fl_category_id],
        }
      }
      if (itemValue && key === 'fl_price') {
        const priceRange = queryOption.filter_options.fl_price.split('~')
        const minPrice = Number(priceRange[0])
        const maxPrice = Number(priceRange[1])

        queryFilter['price'] = { $gte: minPrice, $lte: maxPrice }
      }
      if (itemValue && key === 'fl_color') {
        queryFilter['amount_by_option'] = {
          $elemMatch: { color: { $in: queryOption.filter_options.fl_color } },
        }
      }

      if (itemValue && key === 'fl_brand') {
        queryFilter['brand'] = { $in: [queryOption.filter_options.fl_brand] }
      }
    }

    // Get paginated data
    const productsFitlered = (await Product.find(queryFilter)
      .sort(sortOption)
      .skip(queryOption.skip)
      .limit(queryOption.limit)) as IProductDocument[]

    // Fitler By Custom Option
    if (queryOption.filter_options.fl_custom_options) {
      const customOptions = JSON.parse(
        queryOption.filter_options.fl_custom_options as unknown as string
      )
      const filteredWithCustomOptionsData = productsFitlered.filter(
        (item: IProductDocument) => {
          if (item.amount_by_option.length) {
            return item.amount_by_option.some(
              (amountItem: IProductAmountByOption) => {
                const customOptionKeys = Object.keys(customOptions)
                if (
                  amountItem.custom_options &&
                  Object.keys(amountItem.custom_options).length
                ) {
                  return customOptionKeys.every((customOptionQueryKey) => {
                    if (
                      amountItem.custom_options &&
                      amountItem.custom_options[customOptionQueryKey] &&
                      (amountItem.custom_options[
                        customOptionQueryKey
                      ] as string) ===
                        (customOptions[customOptionQueryKey] as string)
                    ) {
                      return true
                    }
                    return false
                  })
                }
                return false
              }
            ) as boolean
          }
          return false
        }
      )
      return {
        data: filteredWithCustomOptionsData,
        total_count: filteredWithCustomOptionsData.length,
        has_next_page:
          filteredWithCustomOptionsData.length >
          Number(queryOption.skip) + Number(queryOption.limit),
      }
    } else {
      // Get total count
      const totalCount = await Product.countDocuments(queryFilter)

      return {
        data: productsFitlered,
        total_count: totalCount,
        has_next_page:
          totalCount > Number(queryOption.skip) + Number(queryOption.limit),
      }
    }
  }

  public async getProductById(
    id: string
  ): Promise<IProductDocument | undefined | null> {
    const product = (await Product.findById(id)) as IProductDocument
    const clearedProducts = removeFieldsFromData(
      [product],
      this.removableFields
    )
    return clearedProducts[-1]
  }

  // public async getProductByField() {}

  public async createProduct(
    fields: IProducFieldsBase
  ): Promise<IProductDocument> {
    const product = new Product(fields)
    ;(await product.save()) as Document<IProductDocument>
    return product
  }
}

function removeFieldsFromData(
  data: IProductDocument[],
  fields: Array<keyof IProductSalesCompany>
): IProductDocument[] {
  const compiedData = data.map((item: IProductDocument) => {
    const newItem = { ...item.toObject() } as IProductDocument

    newItem.sales_company = fields.reduce((acc: any, field) => {
      acc[field] = item.sales_company[field]
      return acc
    }, {})

    return newItem
  })
  return compiedData
}

export default new ProductServices()
