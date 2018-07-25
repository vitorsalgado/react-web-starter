'use strict'

const Joi = require('joi')
const Path = require('path')
const FS = require('fs')

const EnvSchema = require('./env.schema')
const EnvVars = Joi.attempt(process.env, EnvSchema)

const appDirectory = FS.realpathSync(process.cwd())
const resolvePath = relativePath => Path.resolve(appDirectory, relativePath)

module.exports = {
  isProduction: EnvVars.NODE_ENV === 'production',
  isTest: EnvVars.NODE_ENV === 'test',
  isDebugMode: EnvVars.DEBUG_MODE,

  publicURL: EnvVars.ASSET_PATH,
  useSourceMap: EnvVars.USE_SOURCE_MAP ? 'source-map' : false,

  devServer: {
    port: EnvVars.DEV_SERVER_PORT
  },

  paths: {
    sources: resolvePath('src'),
    build: resolvePath('dist'),
    indexHTML: resolvePath('./wwwroot/index.html'),
    indexJS: resolvePath('./src/index.jsx'),
    packageJSON: resolvePath('package.json'),
    nodeModules: resolvePath('node_modules')
  },

  analyser: {
    port: EnvVars.ANALYSER_PORT
  },

  envsAsString: {
    'process.env': Object
      .keys(EnvVars)
      .reduce((env, key) => {
        env[key] = JSON.stringify(EnvVars[key])
        return env
      }, {})
  }
}
