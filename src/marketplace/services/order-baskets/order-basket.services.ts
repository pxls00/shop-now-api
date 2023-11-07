import OrderBasket from '../../../models/order-baskets/index.model'

import type { IOrderBasketDocument } from '../../../models/order-baskets/index.types'

import type {
  IQueryOptions,
  TOrderBasketKey,
  ISortOptionPipe,
  IGetOrderBasketListRes,
} from '../../controllers/order-baskets/order-basket.types'

import type { IOrderedProductDocument } from '../../../models/product/index.types'

class OrderBasketServices {
  public async getOrderBasketList(
    id: string | number,
    queryOption: IQueryOptions
  ): Promise<IGetOrderBasketListRes | undefined | { message: string }> {
    const userOrderBasket = await this.getUserOrderBasketById(id)
    if (!userOrderBasket) {
      return { message: 'To your order basket anything added yet' }
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
    sortOption[queryOption.sort_options.key as TOrderBasketKey] =
      queryOption.sort_options.value

    const orderBasket = await OrderBasket.findOne({ user: id })

    if (!orderBasket)
      return { message: 'To your order basket anything added yet' }

    if (queryOption.search) {
      orderBasket.products = orderBasket.products.filter((item) =>
        item.name.toLowerCase().includes(queryOption.search.toLowerCase())
      )
    }

    if ('created_at' in sortOption) {
      orderBasket.products.sort(function (a, b) {
        const date1 = new Date(a.created_at) as unknown as number
        const date2 = new Date(b.created_at) as unknown as number

        return date2 - date1
      })
    }

    if ('price' in sortOption) {
      if (sortOption.price === 1) {
        orderBasket.products.push(1 as any)
        orderBasket.products.sort((a, b) => a.price - b.price)
      } else {
        orderBasket.products.sort((a, b) => b.price - a.price)
      }
    }

    const orderBasketCount = orderBasket.products.length

    // Skip and limit the sorted products
    orderBasket.products = orderBasket.products.slice(
      queryOption.skip,
      queryOption.skip + queryOption.limit
    )

    return {
      data: orderBasket.products,
      total_count: orderBasketCount,
      total_price: orderBasket.totalPrice,
      has_next_page:
        orderBasketCount > Number(queryOption.skip) + Number(queryOption.limit),
    }
  }

  public async getUserOrderBasketById(
    id: string | number
  ): Promise<IOrderBasketDocument | undefined | null> {
    return await OrderBasket.findOne({ user: id })
  }

  public async addProductToOrderBaskets(
    id: string,
    orderedProductFields: IOrderedProductDocument
  ): Promise<{ message: string } | void> {
    const orderBasket = await this.getUserOrderBasketById(id)

    if (!orderBasket) {
      return { message: 'User is not defined' }
    } else {
      const isExistProduct = orderBasket.products.find(
        (item) => item._id.toString() === orderedProductFields._id.toString()
      )

      if (isExistProduct) {
        return { message: 'Product already exists' }
      } else {
        orderBasket.products.push(orderedProductFields)
        orderBasket.totalPrice += orderedProductFields.price

        await orderBasket.save()

        return { message: 'Product added successfuly' }
      }
    }
  }

  public async createOrderBasket(id: string) {
    const orderBasket = new OrderBasket({ user: id })
    await orderBasket.save()
  }

  public async removeProductFromOrderBasketList(
    id: string,
    idOfProduct: string
  ): Promise<{ message: string } | void> {
    const orderBasket = await this.getUserOrderBasketById(id)

    if (!orderBasket?.products.length) {
      return { message: 'To your order basket anything added yet' }
    } else {
      let orderPrice = 0
      orderBasket.products = orderBasket.products.filter((item) => {
        if (item._id.toString() !== idOfProduct.toString()) {
          return true
        }
        orderPrice = item.price
        return false
      })
      orderBasket.totalPrice -= orderPrice

      await orderBasket.save()
      return
    }
  }
}

export default new OrderBasketServices()
