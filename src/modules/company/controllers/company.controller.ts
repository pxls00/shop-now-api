import { validationResult } from 'express-validator'
import CompanyService from '../services/company.services'

import type { Request, Response } from 'express'
import type {
  IGetCompanyListQuery,
  IQueryOptions,
  TSortOptions,
  ISortOption,
} from './company.types'
import type {
  IGetCompanyByIdRes,
  IGetCompanyListRes,
} from '../services/company.types'
import type { ICompanyFieldsBase } from '../models/company.types'
import { UserServices } from '../../user'
import type { IRequestAuthenticated } from '../../../types/index.types'

const services = CompanyService
const userServices = UserServices

class CompanyController {
  public async getCompanyList(
    req: Request,
    res: Response
  ): Promise<Response<IGetCompanyListRes>> {
    try {
      const { skip, search, limit, by_rate, by_order_count } =
        req.query as unknown as IGetCompanyListQuery
      const sortOptions: TSortOptions = {
        by_order_count: {
          key: 'orders_count',
          value: -1,
        },
        by_popular: {
          key: 'followers_count',
          value: -1,
        },
        by_rate: {
          key: 'rate',
          value: -1,
        },
      }
      let sortOption = {} as ISortOption

      if (by_order_count) {
        sortOption = sortOptions['by_order_count']
      } else if (by_rate) {
        sortOption = sortOptions['by_rate']
      } else {
        sortOption = sortOptions['by_popular']
      }

      const queryOption: IQueryOptions = {
        skip,
        search,
        limit,
        sortOption: sortOption,
      }

      if (isNaN(skip)) {
        queryOption.skip = 0
      } else if (isNaN(limit)) {
        queryOption.limit = 0
      }

      const response = await services.getCompanyList(queryOption)

      return res.status(200).send(response)
    } catch (error) {
      return res.json({ message: error })
    }
  }

  public async getCompanyById(
    req: Request,
    res: Response
  ): Promise<Response<IGetCompanyByIdRes>> {
    try {
      const { company_id } = req.params
      const response = await services.getCompanyById(company_id)
      if (!response) {
        return res.status(404).json({ message: 'Company not found' })
      }
      return res.status(200).json(response)
    } catch (error) {
      return res.status(404).json({ message: error })
    }
  }

  public async createCompany(req: Request, res: Response) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json(errors)
      }

      const { name, email, description, phone_number, tag_names } =
        req.body as ICompanyFieldsBase

      const isCompanyExistsWithGivenEmail = await services.getCompanyByField({
        email,
      })
      const isCompanyExistsWithGivenPhoneNumber =
        await services.getCompanyByField({
          phone_number,
        })

      if (
        isCompanyExistsWithGivenEmail &&
        Object.keys(isCompanyExistsWithGivenEmail).length
      ) {
        return res
          .status(409)
          .json({ message: 'Company with this email already exists' })
      }
      if (
        isCompanyExistsWithGivenPhoneNumber &&
        Object.keys(isCompanyExistsWithGivenPhoneNumber).length
      ) {
        return res
          .status(409)
          .json({ message: 'Company with this phone_number already exists' })
      }

      const companyFields: ICompanyFieldsBase = {
        name,
        email,
        description,
        phone_number,
        tag_names,
      }

      const createdCompany = await services.createCompany(companyFields)

      return res.status(201).json({
        message: 'Company has been created succesfully',
        createdCompany,
      })
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  public async followCompany(req: IRequestAuthenticated, res: Response) {
    try {
      if (!req.user) {
        return res.status(403).json({ message: 'User unauthorized' })
      }
      const { company_id } = req.params
      const currentUser = await userServices.getUserById(req.user.id as string)
      const company = await services.getCompanyById(company_id as string)

      if (!company) {
        return res.status(404).json({ message: 'Company not found' })
      }

      const isUserExistsInFollowersListOfCompany = company.followers?.find(
        (item) => item._id.toString() === currentUser?._id.toString()
      )
      if (isUserExistsInFollowersListOfCompany) {
        return res.status(409).json({ message: 'User already followed' })
      }

      company.followers?.push(currentUser?._id)
      await company.save()
      return res
        .status(201)
        .json({ message: 'User has been followed succesfully' })
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  // public async followCompanyById(req: Request, res: Response): Promise<Response<void>> {
  //   const { company_id } = req.params
  // }
}

export default CompanyController
