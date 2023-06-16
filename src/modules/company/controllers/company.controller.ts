import type { Request, Response } from 'express'
import type { IGetCompanyListQuery, IQueryOptions, TSortOptions, ISortOption } from './company.types'
import type { IGetCompanyByIdRes, IGetCompanyListRes } from '../services/company.types';
import CompanyService from '../services/company.services';

class CompanyController {
  private services: CompanyService =  new CompanyService()


  public async getCompanyList(req: Request, res: Response): Promise<Response<IGetCompanyListRes>> {
    try {
      const {skip, search, limit, by_rate, by_order_count} = req.query as unknown as IGetCompanyListQuery
      const sortOptions: TSortOptions = {
        by_order_count: {
          key: 'orders_count',
          value: -1
        },
        by_popular: {
          key: 'followers',
          value: -1
        },
        by_rate: {
          key: 'rate',
          value: -1
        }
      }
      let sortOption = {} as ISortOption
      const queryOption: IQueryOptions = {
        skip,
        search,
        limit,
        sortOption: sortOption
      }

      if(by_order_count) {
        sortOption = sortOptions['by_order_count']
      } else if (by_rate) {
        sortOption = sortOptions['by_rate']
      } else {
        sortOption = sortOptions['by_popular']
      }

      const response = await this.services.getCompanyList(queryOption)

      return res.json(response)
    } catch (error) {
      console.error(error)
      return res.json({message:error})
    }
  }

  public async getCompanyById(req: Request, res: Response): Promise<Response<IGetCompanyByIdRes>> {
    const { company_id } = req.params
    const query = {id: company_id}
    const response = this.services.getCompanyById(query)

    return res.json(response)
  }

  // public async followCompanyById(req: Request, res: Response): Promise<Response<void>> {
  //   const { company_id } = req.params
  // }
}

export default CompanyController