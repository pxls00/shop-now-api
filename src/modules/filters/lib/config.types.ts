import { IBaseModuleConfig } from '../../../types/index.types'

export interface IConfigModule extends IBaseModuleConfig {
  moduleRouteItemIdURL: Readonly<string>
  moduleRouteColorURL: Readonly<string>
  moduleRouteColorItemIdURL: Readonly<string>
  moduleRouteOptionURL: Readonly<string>
  moduleRouteOptionItemIdURL: Readonly<string>
  moduleRouteBrandURL: Readonly<string>
  moduleRouteBrandItemIdURL: Readonly<string>
}
