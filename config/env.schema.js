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
    NODE_ENV: Joi.string().allow('development', 'test', 'production').default('production'),
    DEBUG_MODE: Joi.boolean().default(false).truthy('true', 'on', 't', 1).falsy('false', 'off', 'f', 0),
    USE_SOURCE_MAP: Joi.boolean().default(true),
    ASSET_PATH: Joi.string().default(''),
    PUBLIC_URL: Joi.string().allow('').default(''),

    // Dev Server
    DEV_SERVER: Joi.string().default('').allow(''),
    DEV_SERVER_PORT: Joi.number().default(3000),

    // Analyser
    ANALYSER_PORT: Joi.number().default(3001),

    // Testing
    TEST_DEBUG: Joi.boolean().default(false).truthy('true', 'on', 't', 1).falsy('false', 'off', 'f', 0),
    TEST_HEADLESS: Joi.boolean().default(true).truthy('true', 'on', 't', 1).falsy('false', 'off', 'f', 0),
    TEST_INCOGNITO: Joi.boolean().default(false).truthy('true', 'on', 't', 1).falsy('false', 'off', 'f', 0),
  })
  .unknown(true)
  .options({ abortEarly: false })
