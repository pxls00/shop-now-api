import OrderBasketService from '../../services/order-baskets/order-basket.services'

import type { Response } from 'express'
import type { IRequestAuthenticated } from '../../types/index.types'
import type { IOrderedProductDocument } from '@/models/product/index.types'

import type {
  IGetOrderBasketItemParam,
  IQueryOptions,
  IGetOrderBasketListQuery,
  ISortOption,
  TSortOptions,
} from './order-basket.types'

const services = OrderBasketService

class OrderBasketController {
  public async getOrderBasketListOfUser(
    req: IRequestAuthenticated,
    res: Response
  ) {
    try {
      if (!req.user) {
        return res.status(403).json({ message: 'User unauthorized' })
      }

      const {
        skip,
        limit,
        search,
        by_added_recenly,
        by_cheaper,
        by_more_expensive,
      } = req.query as unknown as IGetOrderBasketListQuery

      const sortOptions: TSortOptions = {
        by_added_recenly: {
          key: 'created_at',
          value: -1,
        },
        by_cheaper: {
          key: 'price',
          value: 1,
        },
        by_more_expensive: {
          key: 'price',
          value: -1,
        },
      }

      let sortOption = {} as ISortOption

      if (by_more_expensive) {
        sortOption = sortOptions['by_more_expensive']
      } else if (by_cheaper) {
        sortOption = sortOptions['by_cheaper']
      } else if (by_added_recenly) {
        sortOption = sortOptions['by_added_recenly']
      }

      const queryOption = {
        skip,
        limit,
        search,
        sort_options: sortOption,
      } as IQueryOptions

      if (isNaN(skip)) {
        queryOption.skip = 0
      } else if (isNaN(limit)) {
        queryOption.limit = 0
      }

      const response = await services.getOrderBasketList(
        req.user.id as string,
        queryOption
      )

      return res.status(200).send(response)
    } catch (error) {
      return res.json({ message: error })
    }
  }

  public async addProductToOrderBasketList(
    req: IRequestAuthenticated,
    res: Response
  ) {
    try {
      if (!req.user) {
        return res.status(403).json({ message: 'User unauthorized' })
      }

      const product = req.body as IOrderedProductDocument

      const newOrder = (await services.addProductToOrderBaskets(
        req.user.id as string,
        product
      )) as undefined | { message: string }

      if (newOrder?.message !== 'Product added successfuly') {
        return res.status(404).json(newOrder)
      }

      return res.status(201).json(newOrder)
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  public async removeProductFromOrderBasketList(
    req: IRequestAuthenticated,
    res: Response
  ) {
    try {
      if (!req.user) {
        return res.status(403).json({ message: 'User unauthorized' })
      }

      const { basket_id } = req.params as unknown as IGetOrderBasketItemParam

      const orderBasket = (await services.removeProductFromOrderBasketList(
        req.user.id as string,
        basket_id
      )) as undefined | { message: string }

      if (
        orderBasket &&
        (orderBasket['message'] as unknown as { message: string })
      ) {
        return res.status(404).json(orderBasket)
      }

      return res.status(201).json({ message: 'Successfuly removed' })
    } catch (error) {
      return res.status(404).json({ message: error })
    }
  }
}

export default OrderBasketController
