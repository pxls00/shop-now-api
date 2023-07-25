import brandsServices from '../../services/brands/brands.services'
import { validationResult } from 'express-validator'

import type { IGetFilterBrandItemParam } from './brands.types'
import type { IGetFilterItemParam } from '../filter.types'
import type { Request, Response } from 'express'
import type { IFilterBrandBaseFields } from '../../models/brands/filter-brands.types'
import type { IGetCategoryItemParam } from '../../../category/controllers/category.types'

const filterBrandServices = brandsServices

class FilterBrandsController {
  public async getFilterBrandList(req: Request, res: Response) {
    try {
      const filterBrands = await filterBrandServices.getFilterBrandList()
      res.status(200).json({
        data: filterBrands,
        total_count: filterBrands.length,
      })
    } catch (error) {
      return res.json(error)
    }
  }

  public async getFilterBrandById(req: Request, res: Response) {
    try {
      const { filter_id } = req.params
      const filterBrand = await filterBrandServices.getFilterBrandById(
        filter_id
      )
      if (!filterBrand) {
        res.status(404).json('Brand is not defined')
      }
      return res.status(200).json(filterBrand)
    } catch (error) {
      res.json(error)
    }
  }

  public async getFilterOptionByCategoryId(req: Request, res: Response) {
    try {
      const { filter_id } = req.params as unknown as IGetFilterItemParam

      const filterOptions =
        await filterBrandServices.getFilterBrandByCategoryId(filter_id)
      return res.status(200).json(filterOptions)
    } catch (error) {
      res.json(error)
    }
  }

  public async createFilterBrand(req: Request, res: Response) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json(errors)
      }

      const { name, key, category_id } = req.body as IFilterBrandBaseFields

      const newFilterBrand = await filterBrandServices.createFilterBrand({
        name,
        key,
        category_id,
      })
      if (!newFilterBrand) {
        return res
          .status(409)
          .json({ message: `Brand with this key already exists` })
      }
      return res.status(201).json(newFilterBrand)
    } catch (error) {
      return res.json(error)
    }
  }

  public async updateFilterBrandById(req: Request, res: Response) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json(errors)
      }

      const { brand_id } = req.params as unknown as IGetFilterBrandItemParam

      const newFilterBrand = await filterBrandServices.updateFilterBrandById(
        brand_id,
        req.body as IFilterBrandBaseFields
      )
      if (!newFilterBrand) {
        return res
          .status(409)
          .json({ message: `Brand with this key already exists` })
      }
      return res.status(201).json(newFilterBrand)
    } catch (error) {
      return res.json(error)
    }
  }

  public async deleteFilterBrandById(req: Request, res: Response) {
    try {
      const { brand_id } = req.params as unknown as IGetFilterBrandItemParam

      const item = await filterBrandServices.deleteFilterBrandById(brand_id)
      if (!item) {
        return res.status(404).json({ message: 'Brand is not defined' })
      }
      return res.status(204).json({ message: 'Brand deleted succesfully' })
    } catch (error) {
      return res.json(error)
    }
  }
}

export default FilterBrandsController
