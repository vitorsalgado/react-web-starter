<h1 align="center">React Web Starter</h1>

<p align="center">
    <img src="docs/assets/logo.png" alt="Logo" />
    <br/>
    <i>React foundation project based on TypeScript with all boring stuff already set.</i>
</p>

<p align="center">
  <a href="CONTRIBUTING.md">Contributing Guidelines</a>
  ·
  <a href="https://github.com/vitorsalgado/react-web-starter/issues">Submit an Issue</a>
  <br>
  <br>
</p>

<p align="center">
  <a href="https://github.com/vitorsalgado/react-web-starter/actions/workflows/ci.yml">
    <img src="https://github.com/vitorsalgado/react-web-starter/actions/workflows/ci.yml/badge.svg">
  </a>&nbsp
  <a href="https://codecov.io/gh/vitorsalgado/react-web-starter">
    <img src="https://codecov.io/gh/vitorsalgado/react-web-starter/branch/master/graph/badge.svg?token=BB87R38Z87"/>
  </a>&nbsp
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"/>
  </a>&nbsp
</p>

## Overview

This is a template to serve as a template for new React projects with TypeScript.  
This project is also intended to serve as a learning experience for React and its ecosystem and to explore modern
frontend tools and practices.  
Some features contained in this project are:

- React
- Redux
- i18n
- TypeScript
- Jest
- End-to-End Tests with Puppeteer
- Yarn 2
- WebPack
- ESLint + Prettier + Stylelint + Commit Lint + Husky + Lint Staged (Linters)
- GitHub Actions (CI)
- Docker

## Contents

## Configurations

**WebPack** is used for build and bundling.  
Mostly build configurations are based on Environment Variables that can also be set using **DotEnv**.  
Check [Env Vars Joi Schema](configs/envvars/index.js).

## Test

**Jest** is the testing framework of this project.  
It comes with a setup for unit, integration and e2e tests with **React Testing Library** and **Puppeteer**.  
Check the [jest.config.ts](jest.config.ts).

## Linting and Code Style

Mix of tools used to ensure code and commit style and best practices:

- ESLint
- Prettier
- Stylelint
- Commitlint
- Lint Staged
- Husky

## CI &middot; [![Codacy Badge](https://api.codacy.com/project/badge/Grade/96e11aea37d24f3fb3106c6ba213fb39)](https://www.codacy.com/app/vitorsalgado/frontend-toolkit?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=vitorsalgado/frontend-toolkit&amp;utm_campaign=Badge_Grade) [![Maintainability](https://api.codeclimate.com/v1/badges/dec583a41ea4f383ca26/maintainability)](https://codeclimate.com/github/vitorsalgado/frontend-toolkit/maintainability)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fvitorsalgado%2Freact-web-starter.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fvitorsalgado%2Freact-web-starter?ref=badge_shield)

- **Github Actions** for continuous integration
- **Codecov** for test coverage reports
- **Codacy** and **CodeClimate** for code analysis

## Additional Tools

Check the [Makefile](Makefile) for some useful commands.  
Execute `make` to show the _help_.

## License

This project is [Apache](LICENSE) licensed.


[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fvitorsalgado%2Freact-web-starter.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fvitorsalgado%2Freact-web-starter?ref=badge_large)