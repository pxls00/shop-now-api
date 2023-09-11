import tagsServices from '../../services/tags/tags.services'
import { validationResult } from 'express-validator'

import type { IGetProductTagItemParam } from './tags.types'
import type { Request, Response } from 'express'
import type { IProductTagBaseFields } from '../../../../../models/product-options/tags/product-tag.types'

const productTagServices = tagsServices

class ProductTagsController {
  public async getProductTagList(req: Request, res: Response) {
    try {
      const productTags = await productTagServices.getProductTagList()
      res.status(200).json({
        data: productTags,
        total_count: productTags.length,
      })
    } catch (error) {
      return res.json(error)
    }
  }

  public async getProductTagById(req: Request, res: Response) {
    try {
      const { tag_id } = req.params as unknown as IGetProductTagItemParam
      const productTag = await productTagServices.getProductTagById(tag_id)
      if (!productTag) {
        res.status(404).json('Tag is not defined')
      }
      return res.status(200).json(productTag)
    } catch (error) {
      res.json(error)
    }
  }

  public async getProductOptionByCategoryId(req: Request, res: Response) {
    try {
      const { tag_id } = req.params as unknown as IGetProductTagItemParam

      const productOptions = await productTagServices.getProductTagByCategoryId(
        tag_id
      )
      return res.status(200).json(productOptions)
    } catch (error) {
      res.json(error)
    }
  }

  public async createProductTag(req: Request, res: Response) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json(errors)
      }

      const { name, category_id } = req.body as IProductTagBaseFields

      const newProductTag = await productTagServices.createProductTag({
        name,
        category_id,
      })
      if (!newProductTag) {
        return res
          .status(409)
          .json({ message: `Tag with this key already exists` })
      }
      return res.status(201).json(newProductTag)
    } catch (error) {
      return res.json(error)
    }
  }

  public async updateProductTagById(req: Request, res: Response) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json(errors)
      }

      const { tag_id } = req.params as unknown as IGetProductTagItemParam

      const newProductTag = await productTagServices.updateProductTagById(
        tag_id,
        req.body as IProductTagBaseFields
      )
      if (!newProductTag) {
        return res
          .status(409)
          .json({ message: `Tag with this key already exists` })
      }
      return res.status(201).json(newProductTag)
    } catch (error) {
      return res.json(error)
    }
  }

  public async deleteProductTagById(req: Request, res: Response) {
    try {
      const { tag_id } = req.params as unknown as IGetProductTagItemParam

      const item = await productTagServices.deleteProductTagById(tag_id)
      if (!item) {
        return res.status(404).json({ message: 'Tag is not defined' })
      }
      return res.status(201).json({ message: 'Tag deleted succesfully' })
    } catch (error) {
      return res.json(error)
    }
  }
}

export default ProductTagsController
