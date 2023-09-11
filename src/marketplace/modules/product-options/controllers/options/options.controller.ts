import optionsServices from '../../services/options/options.services'
import { validationResult } from 'express-validator'
import generateKey from '../../../../../utils/generate-key'

import type { Request, Response } from 'express'
import type { IGetProductOptionItemParam } from './options.types'
import type { IProductOptionBaseFields } from '../../../../../models/product-options/options/product-option.types'
const productOptionsServices = optionsServices

class ProductOptionsController {
  public async getProductOptionList(req: Request, res: Response) {
    try {
      const productOptions = await productOptionsServices.getProductOptionList()
      res.status(200).json({
        data: productOptions,
        total_count: productOptions.length,
      })
    } catch (error) {
      return res.json(error)
    }
  }

  public async getProductOptionById(req: Request, res: Response) {
    try {
      const { option_id } = req.params as unknown as IGetProductOptionItemParam
      const productOptions = await productOptionsServices.getProductOptionById(
        option_id
      )

      if (!productOptions) {
        res.status(404).json('Options is not defined')
      }
      return res.status(200).json(productOptions)
    } catch (error) {
      res.json(error)
    }
  }

  public async getProductOptionByCategoryId(req: Request, res: Response) {
    try {
      const { option_id } = req.params as unknown as IGetProductOptionItemParam

      const productOptions =
        await productOptionsServices.getProductOptionByCategoryId(option_id)
      return res.status(200).json(productOptions)
    } catch (error) {
      res.json(error)
    }
  }

  public async createProductOption(req: Request, res: Response) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json(errors)
      }

      const { category_id, name, value } = req.body as IProductOptionBaseFields

      const key = generateKey(name)

      const newProductOption = await productOptionsServices.createProductOption(
        { category_id, name, value, key }
      )
      if (!newProductOption) {
        return res
          .status(409)
          .json({ message: 'Option with this key already exists' })
      }

      return res.status(201).json(newProductOption)
    } catch (error) {
      return res.json(error)
    }
  }

  public async updateProductOptionById(req: Request, res: Response) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json(errors)
      }

      const { option_id } = req.params as unknown as IGetProductOptionItemParam

      const newProductOption =
        await productOptionsServices.updateProductOptionById(
          option_id,
          req.body as IProductOptionBaseFields
        )

      if (!newProductOption) {
        return res
          .status(409)
          .json({ message: `Option with this key already exists` })
      }
      return res.status(201).json(newProductOption)
    } catch (error) {
      return res.json(error)
    }
  }

  public async deleteProductOptionById(req: Request, res: Response) {
    try {
      const { option_id } = req.params as unknown as IGetProductOptionItemParam

      const item = await productOptionsServices.deleteProductOptionById(
        option_id
      )
      if (!item) {
        return res.status(404).json({ message: 'Option is not defined' })
      }

      return res.status(201).json({ message: 'Option deleted succesfully' })
    } catch (error) {
      return res.json(error)
    }
  }
}

export default ProductOptionsController
