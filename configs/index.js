'use strict'

const Joi = require('joi')
const EnvSchema = require('./envvars')
const { resolvePath } = require('./utils')

const EnvVars = Joi.attempt(process.env, EnvSchema)

module.exports = {
  isProduction: EnvVars.NODE_ENV === 'production',
  isTest: EnvVars.NODE_ENV === 'test',

  publicPath: EnvVars.PUBLIC_URL ? EnvVars.PUBLIC_URL : `http://${EnvVars.DEV_SERVER_HOST}:${EnvVars.DEV_SERVER_PORT}`,

  devServer: {
    host: EnvVars.DEV_SERVER_HOST,
    port: EnvVars.DEV_SERVER_PORT
  },

  testing: {
    debug: EnvVars.TEST_DEBUG,
    headless: EnvVars.TEST_HEADLESS,
    incognito: EnvVars.TEST_INCOGNITO
  },

  paths: {
    sourcesRoot: resolvePath('src'),
    buildDestination: resolvePath('dist'),
    indexHTML: resolvePath('./src/index.html'),
    applicationEntrypoint: resolvePath('./src/index.tsx')
  },

  envsAsString: {
    'process.env': Object.keys(EnvVars).reduce((env, key) => {
      env[key] = JSON.stringify(EnvVars[key])
      return env
    }, {})
  },

  vars: EnvVars
}
