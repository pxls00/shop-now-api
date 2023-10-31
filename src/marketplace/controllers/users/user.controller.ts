import UserServices from '../../services/user/user.services'

import type { Request, Response } from 'express'
// import type {IUserDocument} from '../models/user.types'

const userServices = UserServices

class UserController {
  public async getUserList(req: Request, res: Response) {
    try {
      const users = await userServices.getUserList()
      res.status(200).json({
        data: users,
        total_count: users.length,
      })
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  }
  public async getUserById(req: Request, res: Response) {
    try {
      const { user_id } = req.params
      const user = await userServices.getUserById(user_id)
      if (!user) {
        return res.status(404).json('User not found')
      }
      res.status(200).json(user)
    } catch (error) {
      res.json({ message: error })
    }
  }
}

export default UserController
