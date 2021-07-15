<h1 align="center">React Web Starter</h1>

<p align="center">
    <img src="docs/assets/logo.png" alt="Logo" />
    <br/>
    <i>React starter project based on <strong>TypeScript</strong> with all boring stuff already set.</i>
</p>

<p align="center">
  <a href="https://github.com/vitorsalgado/react-web-starter/actions/workflows/ci.yml">
    <img src="https://github.com/vitorsalgado/react-web-starter/actions/workflows/ci.yml/badge.svg">
  </a>&nbsp
  <a href="https://codecov.io/gh/vitorsalgado/react-web-starter">
    <img src="https://codecov.io/gh/vitorsalgado/react-web-starter/branch/master/graph/badge.svg?token=BB87R38Z87"/>
  </a>&nbsp
  <a href="https://codeclimate.com/github/vitorsalgado/react-web-starter/maintainability">
    <img src="https://api.codeclimate.com/v1/badges/126ad2708eb60164e6de/maintainability" />
  </a>&nbsp
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"/>
  </a>&nbsp
</p>

## Overview

This is a starter project for **React** with **TypeScript**.  
This project is also intended to serve as a **learning** experience for React and its ecosystem and to explore modern
frontend tools and practices.  
Some features contained in this project:

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

## Table of Contents

- [Getting Started](#getting-started)
- [Configurations](#configurations)
- [Test](#test)
- [Linters and Code Style](#linters-and-code-style)
- [CI](#ci)
- [Additional Tools](#additional-tools)

## Getting Started

### Dependencies

**Yarn 2** is the project package manager.  
Run the following command to install dependencies and prepare the environment with Git hooks:

```
yarn
```

### Running the Dev Server

```
yarn start
```

### Running With Docker Compose

```
make up
```

### Building

```
yarn build
```

### Serving Dist Content with Nginx

```
make dist
```

## Configurations

**WebPack** is the module bundler used here.  
Some build configurations can be changed using **environment variables**. These variable can also be set using **
DotEnv**. Just place a **.env** on project and modify the values you want.     
Check [this Joi schema](configs/envvars/index.js) to see all variables, and their respect default and allowed values.

## Test

**Jest** is the testing framework of this project.  
This project comes with a setup for unit, integration and e2e tests mainly based on **React Testing Library** and **
Puppeteer**.  
Check the [jest.config.ts](jest.config.ts).

## Linters and Code Style

Mix of tools used to ensure code and commit style and best practices:

- ESLint
- Prettier
- Stylelint
- Commitlint
- Lint Staged
- Husky

## CI

- **Github Actions** for continuous integration
- **Codecov** for test coverage reports
- **Codacy** and **CodeClimate** for code analysis

## Additional Tools

Check the [Makefile](Makefile) for some useful commands.  
Execute `make` to show the _help_.

## To Do

- [ ] Basic workflow with React and Redux
- [ ] StyleLint seems to be not working properly
