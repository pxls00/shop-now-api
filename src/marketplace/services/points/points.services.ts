import PointsModel from '../../../models/points-list//index.model'

import type {
  IPointItemDocument,
  IPointItem,
} from '../../../models/points-list/index.types'

class PointsService {
  public async getPointsList(): Promise<IPointItemDocument[]> {
    return await PointsModel.find({})
  }

  public async getPointsById(
    id: string
  ): Promise<IPointItemDocument | undefined | null> {
    const pointItem = await PointsModel.findById(id)
    return pointItem
  }

  public async createPoint(fields: IPointItem): Promise<IPointItemDocument | undefined | null> {
    const isPointExists = await PointsModel.findOne({
      'related_admin.email': fields.related_admin.email,
    })

    if (isPointExists) {
      return 
    }

    const Point = new PointsModel(fields)
    await Point.save()

    return Point
  }

  // public async updatePointById(
  //   id: string,
  //   updatePayload: IPointBaseFields
  // ) {
  //   const Point = await PointModel.findByIdAndUpdate(
  //     id,
  //     { name: updatePayload.name },
  //     { new: true }
  //   )
  //   if (!Point) {
  //     return undefined
  //   }
  //   return Point
  // }

  // public async deletePointById(id: string) {
  //   const tagItem = await PointModel.findByIdAndDelete(id)
  //   if (tagItem) {
  //     return tagItem
  //   }
  //   return undefined
  // }
}

export default new PointsService()
