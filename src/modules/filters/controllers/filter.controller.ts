import FilterServices from '../services/filter.services'

import type { Request, Response } from 'express'
import type { IGetFilterItemParam } from './filter.types'
import type { IGetCategoryItemParam } from '../../category/controllers/category.types'

const filterServices = FilterServices

class FilterController {
  public async getFilterList(req: Request, res: Response) {
    try {
      const filters = await filterServices.getFilterList()
      res.status(200).json({
        data: filters,
        total_count: filters.length,
      })
    } catch (error) {
      return res.json(error)
    }
  }

  public async getFilterByCategoryId(req: Request, res: Response) {
    try {
      const { category_id } = req.params as unknown as IGetCategoryItemParam
      const filter = await filterServices.getFilterByCategoryId(category_id)
      if (!filter) {
        return res.status(404).json({ message: 'Filter is not defined' })
      }
      return res.status(200).json(filter)
    } catch (error) {
      res.json(error)
    }
  }

  public async getFilterById(req: Request, res: Response) {
    try {
      const { filter_id } = req.params as unknown as IGetFilterItemParam
      const filter = await filterServices.getFilterById(filter_id)
      if (!filter) {
        return res.status(404).json({ message: 'Filter is not defined' })
      }
      return res.status(200).json(filter)
    } catch (error) {
      res.json(error)
    }
  }

  // public async createFilter(req: Request, res: Response) {
  //   try {
  //   } catch (error) {
  //     return res.json(error)
  //   }
  // }

  // public async updateFilterById(req: Request, res: Response) {
  //   try {
  //   } catch (error) {
  //     return res.json(error)
  //   }
  // }

  // public async deleteFilterById(req: Request, res: Response) {
  //   try {
  //   } catch (error) {
  //     return res.json(error)
  //   }
  // }
}

export default FilterController
