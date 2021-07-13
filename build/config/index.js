'use strict'

const Joi = require('joi')
const EnvSchema = require('./env-vars-schema')
const { resolvePath } = require('./utils')

const EnvVars = Joi.attempt(process.env, EnvSchema)

if (!EnvVars.PUBLIC_URL || EnvVars.PUBLIC_URL === '/') {
  EnvVars.SECURITY_PUBLIC_URL = `http://0.0.0.0:${EnvVars.DEV_SERVER_PORT} ws://0.0.0.0:${EnvVars.DEV_SERVER_PORT}`
}

module.exports = {
  isProduction: EnvVars.NODE_ENV === 'production',
  isTest: EnvVars.NODE_ENV === 'test',

  publicPath: EnvVars.PUBLIC_URL || `http://0.0.0.0:${EnvVars.DEV_SERVER_PORT}/`,

  devServer: {
    devURL: EnvVars.DEV_SERVER || `http://0.0.0.0:${EnvVars.DEV_SERVER_PORT}/`,
    port: EnvVars.DEV_SERVER_PORT
  },

  testing: {
    debug: EnvVars.TEST_DEBUG,
    headless: EnvVars.TEST_HEADLESS,
    incognito: EnvVars.TEST_INCOGNITO
  },

  paths: {
    sources: resolvePath('src'),
    build: resolvePath('dist'),
    indexHTML: resolvePath('./src/index.html'),
    entrypoint: resolvePath('./src/index.tsx'),
    packageJSON: resolvePath('package.json'),
    nodeModules: resolvePath('node_modules')
  },

  analyser: {
    port: EnvVars.ANALYSER_PORT
  },

  envsAsString: {
    'process.env': Object.keys(EnvVars).reduce((env, key) => {
      env[key] = JSON.stringify(EnvVars[key])
      return env
    }, {})
  },

  vars: EnvVars
}
