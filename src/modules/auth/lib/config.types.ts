import { IBaseModuleConfig } from '../../../types/index.types'

export interface IConfigModule extends IBaseModuleConfig {
  moduleRegisterRoute: Readonly<string>
}
