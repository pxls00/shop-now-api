import Wish from '../models/wish.model'

import type { IWishDocument } from '../models/wish.types'
import type {
  IQueryOptions,
  TWishKey,
  ISortOptionPipe,
  IGetWishListRes,
} from '../controllers/wish.types'

import type {
  IProductSalesCompany,
  IProductDocument,
} from '../../product/models/product.types'

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

  public async getWishList(
    id: string | number,
    queryOption: IQueryOptions
  ): Promise<IGetWishListRes | undefined | { message: string }> {
    const userWish = await this.getUserWishById(id)
    if (!userWish) {
      return { message: 'To your wish list anything added yet' }
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

    const wishList = await Wish.findOne({ user: id })

    if (!wishList) return { message: 'To your wish list anything added yet' }

    if (queryOption.search) {
      wishList.wishes = wishList.wishes.filter((item) =>
        item.name.toLowerCase().includes(queryOption.search.toLowerCase())
      )
    }

    // // Sort the populated wishes

    if ('created_at' in sortOption) {
      wishList.wishes.sort(function (a, b) {
        const date1 = new Date(a.created_at) as unknown as number
        const date2 = new Date(b.created_at) as unknown as number

        return date2 - date1
      })
    }

    if ('price' in sortOption) {
      if (sortOption.price === 1) {
        wishList.wishes.push(1 as any)
        wishList.wishes.sort((a, b) => a.price - b.price)
      } else {
        wishList.wishes.sort((a, b) => b.price - a.price)
      }
    }

    if ('order_count' in sortOption || 'rate_base' in sortOption) {
      wishList.wishes.sort(
        (a: IProductDocument, b: IProductDocument) =>
          b[Object.keys(sortOption)[0] as keyof IProductDocument] -
          a[Object.keys(sortOption)[0] as keyof IProductDocument]
      )
    }

    const wishListCount = wishList.wishes.length

    // // Skip and limit the sorted wishes
    wishList.wishes = wishList.wishes.slice(
      queryOption.skip,
      queryOption.skip + queryOption.limit
    )

    const removedFields = removeFieldsFromData(
      wishList.wishes,
      this.removableFieldsOfCompany,
      this.removableFields
    )

    return {
      data: removedFields,
      total_count: wishListCount,
      has_next_page:
        wishListCount > Number(queryOption.skip) + Number(queryOption.limit),
    }
  }

  public async getUserWishById(
    id: string | number
  ): Promise<IWishDocument | undefined | null> {
    return await Wish.findOne({ user: id })
  }

  // public async getWishByField() {}

  public async addProductToWishes(
    id: string,
    idOfProduct: string
  ): Promise<{ message: string } | void> {
    const wish = await this.getUserWishById(id)

    if (!wish) {
      return { message: 'User is not defined' }
    } else {
      const isExistProduct = wish.wishes.find(
        (item) => item._id.toString() === idOfProduct.toString()
      )

      if (isExistProduct) {
        return { message: 'Product already exists' }
      } else {
        wish.wishes.push(idOfProduct as any)

        await wish.save()

        return { message: 'Product added successfuly' }
      }
    }
  }

  public async createWish(id: string) {
    const wish = new Wish({ user: id })
    await wish.save()
  }

  public async removeProductFromWishes(
    id: string,
    idOfProduct: string
  ): Promise<{ message: string } | void> {
    const wish = await this.getUserWishById(id)

    if (!wish) {
      return { message: 'To your wish anything added yet' }
    } else {
      wish.wishes = wish.wishes.filter(
        (item) => item._id.toString() !== idOfProduct.toString()
      )

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
