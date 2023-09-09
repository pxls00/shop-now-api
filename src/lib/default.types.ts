export interface IDefaultConfig {
  port: Readonly<string>
  host: Readonly<string>
  dbPassowrd: Readonly<string>
  dbUri: Readonly<string>
  apiBaseURL: Readonly<string>
  apiMarketplaceDocsURL: Readonly<string>
  apiMarketplaceDocsInfoTitle: Readonly<string>
  apiMainAdminDocsURL: Readonly<string>
  apiMainAdminDocsInfoTitle: Readonly<string>
  apiCompanyAdminDocsURL: Readonly<string>
  apiCompanyAdminDocsInfoTitle: Readonly<string>
  emailHostUser: Readonly<string>
  emailHostPassword: Readonly<string>
  passwordSalt: Readonly<number>
  secret_key_for_auth: Readonly<string>
  user_token_expiress_time: Readonly<number>
}
