/**
 * Environment variables schema and data transformation.
 * This should be used instead of direct calling process.env.
 * @module EnvVars
 */

import Joi from 'joi'

/**
 * Environment variables schema
 * @enum
 * @readonly
 */
export default Joi.object({
  // Runtime
  NODE_ENV: Joi.string().allow('', 'test', 'production').default(''),
  CI: Joi.boolean().default(false),

  // Application
  PUBLIC_URL: Joi.string().allow('').default(''),

  // Dev Server
  DEV_SERVER_HOST: Joi.string().default('0.0.0.0'),
  DEV_SERVER_PORT: Joi.number().default(3000),

  // Testing
  TEST_DEBUG: Joi.boolean().default(false).truthy('true', 'on', 't', 1).falsy('false', 'off', 'f', 0),
  TEST_HEADLESS: Joi.boolean().default(true).truthy('true', 'on', 't', 1).falsy('false', 'off', 'f', 0),
  TEST_INCOGNITO: Joi.boolean().default(false).truthy('true', 'on', 't', 1).falsy('false', 'off', 'f', 0),
})
  .unknown(true)
  .options({ abortEarly: false })
