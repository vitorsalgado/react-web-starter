<h1 align="center">React Web Starter</h1>

<p align="center">
    <img src="docs/assets/logo.png" alt="Logo" />
    <br>
    <i>Starter Project for <strong>React</strong> using <strong>TypeScript</strong> that allows customization of all components. Dedicated to my projects. Maybe it works for you as well :) <br><strong>npm init react-ts-web-starter</strong></i>
</p>
<p align="center">
  This project goal is to learn and explore modern frontend technologies and serve as a base for my personal projects since I prefer to control mostly libs involved (for some reason 🙄). <br/>  
  <b>create-react-app</b> might be a better choice for most cases, but if you like the project, check below how to use it :)
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/create-react-ts-web-starter"><strong>www.npmjs.com/package/create-react-ts-web-starter</strong></a>
  <br>
  <br>
</p>

<p align="center">
  <a href="https://github.com/vitorsalgado/react-web-starter/actions/workflows/ci.yml">
    <img src="https://github.com/vitorsalgado/react-web-starter/actions/workflows/ci.yml/badge.svg">
  </a>
  <a href="https://codecov.io/gh/vitorsalgado/react-web-starter">
    <img src="https://codecov.io/gh/vitorsalgado/react-web-starter/branch/master/graph/badge.svg?token=BB87R38Z87"/>
  </a>
  <a href="https://codeclimate.com/github/vitorsalgado/react-web-starter/maintainability">
    <img src="https://api.codeclimate.com/v1/badges/126ad2708eb60164e6de/maintainability" />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat"/>
  </a>
  <a href="https://www.npmjs.com/package/create-react-ts-web-starter">
    <img alt="npm" src="https://img.shields.io/npm/v/create-react-ts-web-starter">
  </a>
</p>

## Overview

A new React project can be bootstrapped using this repository as a template using the following command:

```
npm init react-ts-web-starter
```

Without parameters, the project will be created on a folder **my-app** in the same directory where you executed the command.  
All parameters available:

```
--destination=<FOLDER_DESTINATION> Defaults to the current directory
--app=<APP_NAME> Defaults to my-app
```

The final folder will the parameter `destination` concatenated with parameter `app`.

## Getting Started

### Dependencies

**NPM** is the project package manager.  
Run the following command to install dependencies and prepare the environment with Git hooks:

```
npm i
```

### Running the Dev Server

```
npm start
```

### Running With Docker Compose

```
make up
```

### Building

```
npm run build
```

### Serving Dist Content with Nginx

```
make dist
```

## Configurations

**WebPack** is the module bundler used here.  
Some build configurations can be changed using **environment variables**. These variable can also be set using **DotEnv**. Just place a **.env** on project and modify the values
you want.     
Check [this Joi schema](config/env.ts) to see all variables, and their respect default and allowed values.

## Test

**Jest** and **Playwright** are the testing frameworks for this project.  
Check the [jest.config.ts](jest.config.ts) and [playwright.config.ts](playwright.config.ts) configuration files.

## Linters and Code Style

Mix of tools used to ensure code and commit style and best practices:

- ESLint
- Prettier
- Stylelint
- Commitlint
- Lint Staged
- Husky

## CI

- **GitHub Actions** for continuous integration
- **Codecov** for test coverage reports
- **Codacy** and **CodeClimate** for code analysis

## Additional Tools

Check the [Makefile](Makefile) for some useful commands.  
Execute `make` to show the _help_.
