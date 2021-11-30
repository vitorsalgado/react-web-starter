const ENV_PRODUCTION = 'production'
const ENV_TEST = 'test'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Env = process ? process.env : { env: {} }
const NodeEnv = Env.NODE_ENV

const isProd = (): boolean => NodeEnv === ENV_PRODUCTION
const isTest = (): boolean => NodeEnv === ENV_TEST
const isLogEnabled = (): boolean => NodeEnv !== ENV_PRODUCTION

const Config = {
  isProd,
  isTest,
  isLogEnabled
}

export default Config
