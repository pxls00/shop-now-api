import { validationResult } from 'express-validator'
import tagsServices from '../../services/company-options/tags.services'

import type { IGetCompanyTagItemParam } from './tags.types'
import type { Request, Response } from 'express'
import type { ICompanyTagBaseFields } from '../../../models/company-tag/index.types'

const companyTagServices = tagsServices

class CompanyTagsController {
  public async getCompanyTagList(req: Request, res: Response) {
    try {
      const companyTags = await companyTagServices.getCompanyTagList()
      res.status(200).json({
        data: companyTags,
        total_count: companyTags.length,
      })
    } catch (error) {
      return res.json(error)
    }
  }

  public async getCompanyTagById(req: Request, res: Response) {
    try {
      const { tag_id } = req.params as unknown as IGetCompanyTagItemParam
      const companyTag = await companyTagServices.getCompanyTagById(tag_id)
      if (!companyTag) {
        res.status(404).json('Tag is not defined')
      }
      return res.status(200).json(companyTag)
    } catch (error) {
      res.json(error)
    }
  }

  public async createCompanyTag(req: Request, res: Response) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json(errors)
      }

      const { name } = req.body as ICompanyTagBaseFields

      const newCompanyTag = await companyTagServices.createCompanyTag({
        name,
      })
      if (!newCompanyTag) {
        return res
          .status(409)
          .json({ message: `Tag with this key already exists` })
      }
      return res.status(201).json(newCompanyTag)
    } catch (error) {
      return res.json(error)
    }
  }

  public async updateCompanyTagById(req: Request, res: Response) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json(errors)
      }

      const { tag_id } = req.params as unknown as IGetCompanyTagItemParam

      const newCompanyTag = await companyTagServices.updateCompanyTagById(
        tag_id,
        req.body as ICompanyTagBaseFields
      )
      if (!newCompanyTag) {
        return res
          .status(409)
          .json({ message: `Tag with this key already exists` })
      }
      return res.status(201).json(newCompanyTag)
    } catch (error) {
      return res.json(error)
    }
  }

  public async deleteCompanyTagById(req: Request, res: Response) {
    try {
      const { tag_id } = req.params as unknown as IGetCompanyTagItemParam

      const item = await companyTagServices.deleteCompanyTagById(tag_id)
      if (!item) {
        return res.status(404).json({ message: 'Tag is not defined' })
      }
      return res.status(201).json({ message: 'Tag deleted succesfully' })
    } catch (error) {
      return res.json(error)
    }
  }
}

export default CompanyTagsController
