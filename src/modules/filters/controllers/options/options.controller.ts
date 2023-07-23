// import CategoryService from '../services/category.services'

import type { Request, Response } from 'express'
// const filterServices = FilterService

class FilterOptionsController {
  public async getFilterOptionList(req: Request, res: Response) {
    try {
    } catch (error) {
      return res.json(error)
    }
  }

  public async getFilterOptionById(req: Request, res: Response) {
    try {
    } catch (error) {
      res.json(error)
    }
  }

  public async createFilterOption(req: Request, res: Response) {
    try {
    } catch (error) {
      return res.json(error)
    }
  }

  public async updateFilterOptionById(req: Request, res: Response) {
    try {
    } catch (error) {
      return res.json(error)
    }
  }

  public async deleteFilterOptionById(req: Request, res: Response) {
    try {
    } catch (error) {
      return res.json(error)
    }
  }
}

export default FilterOptionsController
