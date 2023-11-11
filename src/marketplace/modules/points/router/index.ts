import { Router } from 'express'
import config from '../lib/config'
import PointsController from '../../../controllers/points/points.controller'
import checkBodyRequest from '../middlewares/validators/point-fields'

const router = Router()

const controller = new PointsController()

// tags
router.get(`${config.moduleRouteTagURL}`, controller.getPointsList)

router.get(
  `${config.moduleRouteTagURL}/:${config.moduleRouteTagItemIdURL}`,
  controller.getPointById
)

router.post(
  `${config.moduleRouteTagURL}`,
  checkBodyRequest(),
  controller.createPointItem
)

router.patch(
  `${config.moduleRouteTagURL}/:${config.moduleRouteTagItemIdURL}`,
  controller.updatePointById
)

router.delete(
  `${config.moduleRouteTagURL}/:${config.moduleRouteTagItemIdURL}`,
  controller.deletePointByid
)

export default router
