import colorsServices from '../../services/colors/colors.services'
import { validationResult } from 'express-validator'

import type { IGetFilterColorItemParam } from './colors.types'
import type { Request, Response } from 'express'
import type { IFilterColorBaseFields } from '../../models/colors/filter-color.type'
const filterColorServices = colorsServices

class FilterColorsController {
  public async getFilterColorList(req: Request, res: Response) {
    try {
      const filterColors = await filterColorServices.getFilterColorList()
      res.status(200).json({
        data: filterColors,
        total_count: filterColors.length,
      })
    } catch (error) {
      return res.json(error)
    }
  }

  public async getFilterColorById(req: Request, res: Response) {
    try {
      const { color_id } = req.params as unknown as IGetFilterColorItemParam
      const filterColor = await filterColorServices.getFilterColorById(color_id)
      if (!filterColor) {
        res.status(404).json('Color is not defined')
      }
      return res.status(200).json(filterColor)
    } catch (error) {
      res.json(error)
    }
  }

  public async createFilterColor(req: Request, res: Response) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json(errors)
      }

      const newFilterColor = await filterColorServices.createFilterColor(
        req.body as IFilterColorBaseFields
      )
      if (!newFilterColor) {
        return res
          .status(409)
          .json({ message: `Color with this key already exists` })
      }
      return res.status(201).json(newFilterColor)
    } catch (error) {
      return res.json(error)
    }
  }

  public async updateFilterColorById(req: Request, res: Response) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json(errors)
      }

      const { color_id } = req.params as unknown as IGetFilterColorItemParam

      const newFilterColor = await filterColorServices.updateFilterColorById(
        color_id,
        req.body as IFilterColorBaseFields
      )
      if (!newFilterColor) {
        return res
          .status(409)
          .json({ message: `Color with this key already exists` })
      }
      return res.status(201).json(newFilterColor)
    } catch (error) {
      return res.json(error)
    }
  }

  public async deleteFilterColorById(req: Request, res: Response) {
    try {
      const { color_id } = req.params as unknown as IGetFilterColorItemParam

      const item = await filterColorServices.deleteFilterColorById(color_id)
      if (!item) {
        return res.status(404).json({ message: 'Color is not defined' })
      }
      return res.status(204).json({ message: 'Color deleted succesfully' })
    } catch (error) {
      return res.json(error)
    }
  }
}

export default FilterColorsController
