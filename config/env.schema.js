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
    DEBUG_MODE: Joi.boolean().default(false).truthy('true', 'on', 't', 1).falsy('false', 'off', 'f', 0),
    USE_SOURCE_MAP: Joi.boolean().default(true),
    ASSET_PATH: Joi.string().default('/'),

    // Dev Server
    DEV_SERVER_PORT: Joi.number().default(3000),

    // Analyser
    ANALYSER_PORT: Joi.number().default(3001)
  })
  .unknown(true)
  .options({ abortEarly: false })
