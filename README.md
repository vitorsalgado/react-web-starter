# React Web Starter &middot; ![ci](https://github.com/vitorsalgado/react-web-starter/workflows/CI/badge.svg) [![codecov](https://codecov.io/gh/vitorsalgado/react-web-starter/branch/master/graph/badge.svg?token=BB87R38Z87)](https://codecov.io/gh/vitorsalgado/react-web-starter)

Basic React.js starter project with all boring stuff already set.  
This repository should be used as a template for future React Web projects.

## Overview

* React
* TypeScript
* Yarn 2
* Docker
* WebPack
* GitHub Actions

## Environment and Build Configurations

System environment configurations mechanism with schema validation for variables.  
Check [configs](configs) folder.

## Test

- Jest
- React Testing Library
- Puppeteer

## Linting and Code Style &middot; [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This project uses a mix of tools to ensure code quality. It also contains to ensure that all committed files follow
project standards: **Husky, Lint Staged and Commitlint**.  
Check below all tools used for linting and code style;

- ESLint
- Prettier
- Stylelint
- Commitlint
- Lint Staged
- Husky

## Continuous Integration &middot; [![Codacy Badge](https://api.codacy.com/project/badge/Grade/96e11aea37d24f3fb3106c6ba213fb39)](https://www.codacy.com/app/vitorsalgado/frontend-toolkit?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=vitorsalgado/frontend-toolkit&amp;utm_campaign=Badge_Grade) [![Maintainability](https://api.codeclimate.com/v1/badges/dec583a41ea4f383ca26/maintainability)](https://codeclimate.com/github/vitorsalgado/frontend-toolkit/maintainability)

- **Github Actions** for continuous integration
- **Codecov** for test coverage reports
- **Codacy** and **CodeClimate** for code analysis

## Additional Tools

- **Storybook** Configured
- Mock Toolkit to mock HTTP calls using Wiremock
- Simple static server to serve **dist** content
