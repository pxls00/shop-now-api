import WishService from '../services/wish.services'

import type { Response } from 'express'
import type { IRequestAuthenticated } from '../../../types/index.types'

import type {
  IGetWishItemParam,
  IQueryOptions,
  IGetWishListQuery,
  ISortOption,
  TSortOptions,
} from './wish.types'

const services = WishService

class WishController {
  public async getWishListOfUser(req: IRequestAuthenticated, res: Response) {
    try {
      if (!req.user) {
        return res.status(403).json({ message: 'User unauthorized' })
      }

      const {
        skip,
        limit,
        search,
        by_added_recently,
        by_cheaper,
        by_more_expensive,
        by_order_count,
        by_rate,
      } = req.query as unknown as IGetWishListQuery

      const sortOptions: TSortOptions = {
        by_added_recently: {
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
        by_order_count: {
          key: 'orders_count',
          value: -1,
        },
        by_rate: {
          key: 'rate_base',
          value: -1,
        },
      }

      let sortOption = {} as ISortOption

      if (by_order_count) {
        sortOption = sortOptions['by_order_count']
      } else if (by_rate) {
        sortOption = sortOptions['by_rate']
      } else if (by_more_expensive) {
        sortOption = sortOptions['by_more_expensive']
      } else if (by_cheaper) {
        sortOption = sortOptions['by_cheaper']
      } else if (by_added_recently) {
        sortOption = sortOptions['by_added_recently']
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

      const response = await services.getWishList(
        req.user.id as string,
        queryOption
      )

      return res.status(200).send(response)
    } catch (error) {
      return res.json({ message: error })
    }
  }

  public async addProductToWishes(req: IRequestAuthenticated, res: Response) {
    try {
      if (!req.user) {
        return res.status(403).json({ message: 'User unauthorized' })
      }

      const { wish_id } = req.params as unknown as IGetWishItemParam

      const newWish = (await services.addProductToWishes(
        req.user.id as string,
        wish_id
      )) as undefined | { message: string }

      if (newWish && (newWish['message'] as unknown as { message: string })) {
        return res.status(404).json(newWish)
      }

      return res.status(201).json(newWish)
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  public async removeProductFromWishes(
    req: IRequestAuthenticated,
    res: Response
  ) {
    try {
      if (!req.user) {
        return res.status(403).json({ message: 'User unauthorized' })
      }

      const { wish_id } = req.params as unknown as IGetWishItemParam

      const newWish = (await services.removeProductFromWishes(
        req.user.id as string,
        wish_id
      )) as undefined | { message: string }

      if (newWish && (newWish['message'] as unknown as { message: string })) {
        return res.status(404).json(newWish)
      }

      return res.status(201).json({ message: 'Successfuly removed' })
    } catch (error) {
      return res.status(404).json({ message: error })
    }
  }
}

export default WishController
