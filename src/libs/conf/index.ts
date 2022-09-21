const ENV_PRODUCTION = 'production'
const ENV_TEST = 'test'

const is = (val: unknown, expected: string) => typeof val !== 'undefined' && val !== null && val === expected
const isNot = (val: unknown, expected: string) => !is(val, expected)

const isProd = (): boolean => is(process.env.NODE_ENV, ENV_PRODUCTION)
const isTest = (): boolean => is(process.env.NODE_ENV, ENV_TEST)
const isLogEnabled = (): boolean => isNot(process.env.NODE_ENV, ENV_PRODUCTION)

export const Config = {
  isProd,
  isTest,
  isLogEnabled,
}
