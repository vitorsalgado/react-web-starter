import Joi from 'joi'
import EnvSchema from './env'
import { resolvePath } from './utils'

const EnvVars = Joi.attempt(process.env, EnvSchema)

export default {
  env: EnvVars.NODE_ENV,
  isProduction: EnvVars.NODE_ENV === 'production',
  isTest: EnvVars.NODE_ENV === 'test',
  isCI: EnvVars.CI,

  publicPath: EnvVars.PUBLIC_URL ? EnvVars.PUBLIC_URL : `http://${EnvVars.DEV_SERVER_HOST}:${EnvVars.DEV_SERVER_PORT}`,

  devServer: {
    host: EnvVars.DEV_SERVER_HOST,
    port: EnvVars.DEV_SERVER_PORT,
  },

  testing: {
    debug: EnvVars.TEST_DEBUG,
    headless: EnvVars.TEST_HEADLESS,
    incognito: EnvVars.TEST_INCOGNITO,
  },

  paths: {
    sourcesRoot: resolvePath('src'),
    buildDestination: resolvePath('dist'),
    indexHTML: resolvePath('./src/index.html'),
    applicationEntrypoint: resolvePath('./src/index.tsx'),
  },

  vars: EnvVars,
}
