require('dotenv').config()

module.exports = {
  displayName: 'tests',
  notify: false,
  verbose: true,
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      diagnostics: true
    }
  },
  coverageDirectory: '../coverage',
  errorOnDeprecated: true,
  testEnvironment: 'enzyme',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16'
  },
  moduleNameMapper: { '\\.(css|scss|ico)$': 'identity-obj-proxy' },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '../node_modules/ts-jest'
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$', '^.+\\.module\\.(css|sass|scss)$'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['./jest.enzyme.setup.js'],
  testMatch: ['<rootDir>/**/*.spec.{js,jsx,ts,tsx}']
}
