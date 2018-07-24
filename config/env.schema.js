'use strict'

/**
 * Environment variables schema and data transformation.
 * This should be used instead of direct calling process.env.
 * @module EnvVars
 */

const Joi = require('joi')

/**
 * Environment variables schema
 * @enum
 * @readonly
 */
module.exports = Joi.object(
  {
    NODE_ENV: Joi.string().allow('development', 'test', 'production').default('development'),
    USE_SOURCE_MAP: Joi.boolean().default(true),
    ASSET_PATH: Joi.string().default('/'),

    // Dev Server
    DEV_SERVER_PORT: Joi.string().default('3000')
  })
  .unknown(true)
  .options({ abortEarly: false })
