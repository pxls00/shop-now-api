import Wish from '../models/wish.model'
import { ProductServices } from '../../product'

import { Types } from 'mongoose'


import type {
  IWishDocument,
} from '../models/wish.types'
import type { Document, FilterQuery } from 'mongoose'
import type {
  IQueryOptions,
  TWishKey,
  ISortOptionPipe,
  IGetWishListRes,
} from '../controllers/wish.types'

import type { IProductSalesCompany, IProductDocument} from '../../product/models/product.types'

const productServices = ProductServices

class WishServices {
  private removableFieldsOfCompany: Array<keyof IProductSalesCompany> = [
    'rate_base',
    '_id',
    'name',
    'logo_img',
  ]
  private removableFields: Array<keyof IProductDocument> = [
    'rate',
    'amount_by_option',
    'tag_names',
    'id',
  ]

  public async getWishList(id: string | number, 
    queryOption: IQueryOptions
  ): Promise<IGetWishListRes | undefined | {message: string}> {
    const userWish = await this.getUserWishById(id)
    if(!userWish) {
      return {message: "To your wish list anything added yet"}
    }

    // Pagination
    const pagination = []
    if (!isNaN(queryOption.limit)) {
      pagination.push({ $limit: Number(queryOption.limit) })
    } else if (!isNaN(queryOption.skip)) {
      pagination.push({ $skip: Number(queryOption.skip) })
    }

    // Sort
    const sortOption = {} as ISortOptionPipe
    sortOption[queryOption.sort_options.key as TWishKey] =
      queryOption.sort_options.value

    // Get paginated data
    const wishes = await Wish.aggregate([
      { $match: { user: new Types.ObjectId(id) } },
      { $unwind: '$wishes' },
      { $sort: sortOption },
      { $skip: queryOption.skip },
      { $limit: queryOption.limit },
      { $group: {
          _id: '$_id',
          user: { $first: '$user' },
          wishes: { $push: '$wishes' }
        }
      },
      {
        $facet: {
          metadata: [{ $count: 'total' }],
          data: pagination,
        },
      }
    ])

    const count = wishes[0].metadata[0].total as number
    const result = wishes[0].data as IProductDocument[]

    return {
      data: result,
      total_count: count,
      has_next_page:
        count > Number(queryOption.skip) + Number(queryOption.limit),
    }
    
  }

  public async getUserWishById(id: string | number): Promise<IWishDocument | undefined | null> {
    return await Wish.findOne({ user: id })
  }

  // public async getWishByField() {}

  public async addProductToWishes(
    id: string,
    idOfProduct: string
  ): Promise<{message: string} | void> {
    const wish = await this.getUserWishById(id)

    if(!wish) {
      return {message: "User is not defined"}
    } else {
      const isExistProduct = wish.wishes.find(item => item._id.toString() === idOfProduct.toString())
      
      if(isExistProduct) {
        return {message: "Product already exists"} 
      } else {
        wish.wishes.push(idOfProduct as any)

        await wish.save()

        return {message: "Product added successfuly"}
      }
    }
  }

  public async createWish(id: string) {
    const wish = new Wish({user: id});
    await wish.save();
  }

  public async removeProductFromWishes(id: string, idOfProduct: string): Promise<{message: string} | void> {
    const wish = await this.getUserWishById(id)

    if(!wish) {
      return {message: "To your wish anything added yet"} 
    } else {
      wish.wishes = wish.wishes.filter(item => item._id.toString() !== idOfProduct.toString())

      await wish.save()
      return
    }
  }
}

function removeFieldsFromData(
  data: IProductDocument[],
  fieldsOfCompany: Array<keyof IProductSalesCompany>,
  fields: Array<keyof IProductDocument>
): IProductDocument[] {
  const compiedData = data.map((item: IProductDocument) => {
    const newItem = { ...item.toObject() } as IProductDocument

    newItem.rate = ['asdasdasd']
    // delete newItem.amount_by_option
    for (let i = 0; i < fields.length; i++) {
      const fieldItem = fields[i] as keyof IProductDocument
      delete newItem[fieldItem]
    }

    newItem.sales_company = fieldsOfCompany.reduce((acc: any, field) => {
      acc[field] = item.sales_company[field]
      return acc
    }, {})

    return newItem
  })
  return compiedData
}

export default new WishServices()
