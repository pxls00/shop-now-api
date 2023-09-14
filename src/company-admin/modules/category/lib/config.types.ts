import { IBaseModuleConfig } from '../../../types/index.types'

export interface IConfigModule extends IBaseModuleConfig {
  moduleRouteItemIdURL: Readonly<string>
}
