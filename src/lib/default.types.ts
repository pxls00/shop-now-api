export interface IDefaultConfig {
  port: Readonly<string>
  host: Readonly<string>
  dbPassowrd: Readonly<string>
  dbUri: Readonly<string>
  apiBaseDocsUrl: Readonly<string>
  apiMarketPlaceURL: Readonly<string>
  apiMarketplaceDocsInfoTitle: Readonly<string>
  apiMainAdminDocsInfoTitle: Readonly<string>
  apiCompanyAdminDocsInfoTitle: Readonly<string>
  apiCompanyAdminURL: Readonly<string>
  emailHostUser: Readonly<string>
  emailHostPassword: Readonly<string>
  passwordSalt: Readonly<number>
  secret_key_for_auth: Readonly<string>
  user_token_expiress_time: Readonly<number>
}
