import optionsServices from '../../services/options/options.services'
import { validationResult } from 'express-validator'

import type { Request, Response } from 'express'
import type { IGetFilterOptionItemParam } from './options.types'
import type { IFilterOptionBaseFields } from '../../models/options/filter-option.types'
const filterOptionsServices = optionsServices

class FilterOptionsController {
  public async getFilterOptionList(req: Request, res: Response) {
    try {
      const filterOptions = await filterOptionsServices.getFilterOptionList()
      res.status(200).json({
        data: filterOptions,
        total_count: filterOptions.length,
      })
    } catch (error) {
      return res.json(error)
    }
  }

  public async getFilterOptionById(req: Request, res: Response) {
    try {
      const { option_id } = req.params as unknown as IGetFilterOptionItemParam
      const filterOptions = await filterOptionsServices.getFilterOptionById(
        option_id
      )

      if (!filterOptions) {
        res.status(404).json('Options is not defined')
      }
      return res.status(200).json(filterOptions)
    } catch (error) {
      res.json(error)
    }
  }

  public async createFilterOption(req: Request, res: Response) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json(errors)
      }

      const newFilterOption = await filterOptionsServices.createFilterOption(
        req.body as IFilterOptionBaseFields
      )
      if (!newFilterOption) {
        return res
          .status(409)
          .json({ message: 'Option with this key already exists' })
      }

      return res.status(201).json(newFilterOption)
    } catch (error) {
      return res.json(error)
    }
  }

  public async updateFilterOptionById(req: Request, res: Response) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json(errors)
      }

      const { option_id } = req.params as unknown as IGetFilterOptionItemParam

      const newFilterOption =
        await filterOptionsServices.updateFilterOptionById(
          option_id,
          req.body as IFilterOptionBaseFields
        )

      if (!newFilterOption) {
        return res
          .status(409)
          .json({ message: `Option with this key already exists` })
      }
      return res.status(201).json(newFilterOption)
    } catch (error) {
      return res.json(error)
    }
  }

  public async deleteFilterOptionById(req: Request, res: Response) {
    try {
      const { option_id } = req.params as unknown as IGetFilterOptionItemParam

      const item = await filterOptionsServices.deleteFilterOptionById(option_id)
      if (!item) {
        return res.status(404).json({ message: 'Option is not defined' })
      }

      return res.status(204).json({ message: 'Option deleted succesfully' })
    } catch (error) {
      return res.json(error)
    }
  }
}

export default FilterOptionsController
