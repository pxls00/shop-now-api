import { validationResult } from 'express-validator'

import ProductService from '../../services/product/product.services'

import type { Request, Response } from 'express'
import type { IProducFieldsBase } from '../../../models/product/index.types'
import type {
  IGetProductItemParam,
  IQueryOptions,
  IGetProductListQuery,
  IProductFilterOptionsQuery,
  ISortOption,
  TSortOptions,
} from './product.types'

const services = ProductService

class ProductController {
  public async getProductList(req: Request, res: Response) {
    try {
      const {
        skip,
        limit,
        search,
        fl_price,
        fl_brand,
        fl_color,
        fl_category_id,
        fl_custom_options,
        fl_in_sale,
        by_added_recenly,
        by_cheaper,
        by_more_expensive,
        by_order_count,
        by_rate,
      } = req.query as unknown as IGetProductListQuery
      const filterOptions: IProductFilterOptionsQuery = {
        fl_brand,
        fl_category_id,
        fl_color,
        fl_custom_options,
        fl_price,
        fl_in_sale,
      }

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
      } else if (by_added_recenly) {
        sortOption = sortOptions['by_added_recenly']
      }

      const queryOption = {
        skip,
        limit,
        search,
        sort_options: sortOption,
        filter_options: filterOptions,
      } as IQueryOptions

      if (isNaN(skip)) {
        queryOption.skip = 0
      } else if (isNaN(limit)) {
        queryOption.limit = 0
      }

      const response = await services.getProductList(queryOption)

      return res.status(200).send(response)
    } catch (error) {
      return res.json({ message: error })
    }
  }

  public async getProductById(req: Request, res: Response) {
    try {
      const { product_id } = req.params as unknown as IGetProductItemParam
      const response = await services.getProductById(product_id)

      if (!response) {
        return res.status(404).json({ message: 'Product not found' })
      }
      return res.status(200).json(response)
    } catch (error) {
      return res.status(404).json({ message: error })
    }
  }

  public async createProduct(req: Request, res: Response) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json(errors)
      }

      const body = req.body as IProducFieldsBase
      const newProduct = await services.createProduct(body)

      return res.status(201).json(newProduct)
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  public async updateProduct(req: Request, res: Response) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json(errors)
      }

      const { product_id } = req.params as unknown as IGetProductItemParam

      const body = req.body as IProducFieldsBase
      const newProduct = await services.updateProduct(body, product_id)

      if (!newProduct) {
        return res.status(404).json({ message: 'Product not found' })
      }

      return res.status(201).json(newProduct)
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  public async deleteProductById(req: Request, res: Response) {
    try {
      const { product_id } = req.params as unknown as IGetProductItemParam
      const response = await services.deleteProduct(product_id)

      if (!response) {
        return res.status(404).json({ message: 'Product not found' })
      }

      return res.status(200).json('Product deleted successfuly')
    } catch (error) {
      return res.status(404).json({ message: error })
    }
  }
}

export default ProductController
