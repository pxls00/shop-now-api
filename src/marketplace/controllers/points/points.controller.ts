import { validationResult } from 'express-validator'
import PointServices from '../../services/points/points.services'

import type { IGetPointItemParam } from './points.types'
import type { Request, Response } from 'express'
import type { IPointItem } from '../../../models/points-list/index.types'

const pointServices = PointServices

class PointsController {
  public async getPointsList(req: Request, res: Response) {
    try {
      const pointList = await pointServices.getPointsList()
      res.status(200).json({
        data: pointList,
        total_count: pointList.length,
      })
    } catch (error) {
      return res.json(error)
    }
  }

  public async getPointById(req: Request, res: Response) {
    try {
      const { point_id } = req.params as unknown as IGetPointItemParam
      const pointItem = await pointServices.getPointsById(point_id)
      if (!pointItem) {
        res.status(404).json('Point is not defined')
      }
      return res.status(200).json(pointItem)
    } catch (error) {
      res.json(error)
    }
  }

  public async createPointItem(req: Request, res: Response) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json(errors)
      }

      const pointFields = req.body as IPointItem

      const newPointItem = await pointServices.createPoint(pointFields)
      if (!newPointItem) {
        return res
          .status(409)
          .json({ message: `Point with given admin's email already exists` })
      }
      return res.status(201).json(newPointItem)
    } catch (error) {
      return res.json(error)
    }
  }

  public async updatePointById(req: Request, res: Response) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json(errors)
      }

      const { point_id } = req.params as unknown as IGetPointItemParam

      const newCompanyTag = await pointServices.updatePointById(
        point_id,
        req.body as IPointItem
      )

      return res.status(201).json(newCompanyTag)
    } catch (error) {
      return res.json(error)
    }
  }

  public async deletePointByid(req: Request, res: Response) {
    try {
      const { point_id } = req.params as unknown as IGetPointItemParam

      const item = await pointServices.deletePointByid(point_id)
      if (!item) {
        return res.status(404).json({ message: 'Point is not defined' })
      }
      return res.status(201).json({ message: 'Point deleted succesfully' })
    } catch (error) {
      return res.json(error)
    }
  }
}

export default PointsController
