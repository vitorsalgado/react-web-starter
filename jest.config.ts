import 'dotenv/config'
import * as Path from 'path'
import type { Config as JestConfig } from '@jest/types'

const shared: JestConfig.InitialOptions = {
  verbose: true,
  collectCoverage: false,
  restoreMocks: true,

  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.test.json',
      },
    ],
  },
  globals: {
    VARS: {},
  },
}

const config: JestConfig.InitialOptions = {
  projects: [
    {
      displayName: 'Unit',
      rootDir: './src',
      testEnvironment: 'jsdom',
      setupFilesAfterEnv: [Path.resolve('./src/_test.config.ts')],
      moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|ico|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': Path.resolve(
          './config/jest/mocks/files/index.js',
        ),
        '\\.(css|less|scss)$': Path.resolve('./config/jest/mocks/styles/index.js'),
        '^@app/(.*)$': '<rootDir>/$1',
      },

      ...shared,
    },
  ],
}

export default config
