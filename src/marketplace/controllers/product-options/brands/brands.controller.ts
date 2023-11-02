import BrandsServices from '../../../services/product-options/brands/brands.services'
import { validationResult } from 'express-validator'
import generateKey from '../../../../utils/generate-key'

import type { IGetProductBrandItemParam } from './brands.types'
import type { Request, Response } from 'express'
import type { IProductBrandBaseFields } from '../../../../models/product-options/brands/product-brand.types'

const productBrandServices = BrandsServices

class ProductBrandsController {
  public async getProductBrandList(req: Request, res: Response) {
    try {
      const productBrands = await productBrandServices.getProductBrandList()
      res.status(200).json({
        data: productBrands,
        total_count: productBrands.length,
      })
    } catch (error) {
      return res.json(error)
    }
  }

  public async getProductBrandById(req: Request, res: Response) {
    try {
      const { brand_id } = req.params as unknown as IGetProductBrandItemParam
      const productBrand = await productBrandServices.getProductBrandById(
        brand_id
      )
      if (!productBrand) {
        res.status(404).json('Brand is not defined')
      }
      return res.status(200).json(productBrand)
    } catch (error) {
      res.json(error)
    }
  }

  public async getProductOptionByCategoryId(req: Request, res: Response) {
    try {
      const { brand_id } = req.params as unknown as IGetProductBrandItemParam

      const productOptions =
        await productBrandServices.getProductBrandByCategoryId(brand_id)
      return res.status(200).json(productOptions)
    } catch (error) {
      res.json(error)
    }
  }

  public async createProductBrand(req: Request, res: Response) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json(errors)
      }

      const { name, category_id } = req.body as IProductBrandBaseFields

      const key = generateKey(name)

      const newProductBrand = await productBrandServices.createProductBrand({
        name,
        key,
        category_id,
      })
      if (!newProductBrand) {
        return res
          .status(409)
          .json({ message: `Brand with this key already exists` })
      }
      return res.status(201).json(newProductBrand)
    } catch (error) {
      return res.json(error)
    }
  }

  public async updateProductBrandById(req: Request, res: Response) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json(errors)
      }

      const { brand_id } = req.params as unknown as IGetProductBrandItemParam

      const newProductBrand = await productBrandServices.updateProductBrandById(
        brand_id,
        req.body as IProductBrandBaseFields
      )
      if (!newProductBrand) {
        return res
          .status(409)
          .json({ message: `Brand with this key already exists` })
      }
      return res.status(201).json(newProductBrand)
    } catch (error) {
      return res.json(error)
    }
  }

  public async deleteProductBrandById(req: Request, res: Response) {
    try {
      const { brand_id } = req.params as unknown as IGetProductBrandItemParam

      const item = await productBrandServices.deleteProductBrandById(brand_id)
      if (!item) {
        return res.status(404).json({ message: 'Brand is not defined' })
      }
      return res.status(201).json({ message: 'Brand deleted succesfully' })
    } catch (error) {
      return res.json(error)
    }
  }
}

export default ProductBrandsController
