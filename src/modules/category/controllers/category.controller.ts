import { validationResult } from 'express-validator'
import CategoryService from '../services/category.services'
import generateKey from '../utils/generate-key'

import type { Request, Response } from 'express'
import type { IGetCategoryItemParam } from './category.types'
import type { ICategoryFieldsBase } from '../models/category.types'

const categoryServices = CategoryService

class CategoryController {
  public async getCategoryList(req: Request, res: Response) {
    try {
      const categories = await categoryServices.getCategoryList()
      res.status(200).json({
        data: categories,
        total_count: categories.length,
      })
      return
    } catch (error) {
      return res.json(error)
    }
  }

  public async getCategoryById(req: Request, res: Response) {
    try {
      const { category_id } = req.params as unknown as IGetCategoryItemParam
      const category = await categoryServices.getCategoryById(category_id)
      if (!category) {
        return res.status(404).json({ message: 'Category is not defined' })
      }
      return res.status(200).json(category)
    } catch (error) {
      res.json(error)
    }
  }

  public async createCategory(req: Request, res: Response) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json(errors)
      }

      const newCategoryfields = req.body as ICategoryFieldsBase
      newCategoryfields.key = generateKey(newCategoryfields.name)

      const createdCategory = await categoryServices.createCategory(
        newCategoryfields,
        req.params.category_id || ''
      )

      if (!createdCategory) {
        return res.status(404).json({ message: 'Category is not defined' })
      }
      return res.status(201).json(createdCategory)
    } catch (error) {
      return res.json(error)
    }
  }

  public async updateCategoryById(req: Request, res: Response) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json(errors)
      }

      const { category_id } = req.params as unknown as IGetCategoryItemParam
      const newCategoryfields = req.body as ICategoryFieldsBase
      newCategoryfields.key = generateKey(newCategoryfields.name)

      const category = await categoryServices.updateCategoryById(
        category_id,
        newCategoryfields
      )
      if (!category) {
        return res.status(404).json({ message: 'Category is not defined' })
      }
      return res.status(201).json(category)
    } catch (error) {
      return res.json(error)
    }
  }

  public async deleteCategoryById(req: Request, res: Response) {
    try {
      const { category_id } = req.params as unknown as IGetCategoryItemParam

      const category = await categoryServices.deleteCategoryById(category_id)

      if (!category) {
        return res.status(404).json({ message: 'Category is not defined' })
      }
      return res.status(201).json('Category deleted successfuly')
    } catch (error) {
      return res.json(error)
    }
  }
}

export default CategoryController
