import bcrypt from 'bcrypt'
import config from '../lib/default'

export const hashPassword = function (password: string): string {
  return bcrypt.hashSync(password, config.passwordSalt)
}

export const comparePassword = function (
  expectPassword: string,
  receivePassword: string
): boolean {
  return bcrypt.compareSync(expectPassword, receivePassword)
}
