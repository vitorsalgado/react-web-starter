#!/usr/bin/env node

const Path = require('path')
const FsExt = require('fs-extra')

const paramOr = (map, arg, def) => map.get(arg) || def
const makePath = (...p) => Path.join(...p)
const ignoreContent =
  (...values) =>
  source =>
    !values.some(x => source === x)

const Ignores = [
  '.git',
  '.idea',
  '.vscode',
  '.github',
  '.husky/_',
  '.yarn/cache',
  '.yarn/build-state.yml',
  '.yarn/install-state.gz',
  'cmd',
  'build/docker',
  'configs/nginx',
  'coverage',
  'deployments',
  'dist',
  'docs',
  'node_modules',
  'scripts',
  'templates',
  'tools',
  '.codeclimate.yml',
  '.env',
  'CONTRIBUTING.md',
  'CHANGELOG.md',
  'CODE_OF_CONDUCT.md',
  'README.md',
  'package.json',
  'package-lock.json',
  'yarn.lock'
]

const Templates = [
  { file: 'ci.yml', copyTo: '.github/workflows/ci.yml' },
  { file: 'README.md', copyTo: 'README.md' },
  { file: '.gitignore.husky', copyTo: '.husky/.gitignore' },
  { file: '.gitignore.root', copyTo: '.gitignore' }
]

const PkgFieldsToKeep = ['scripts', 'dependencies']

function main() {
  console.log('React Web Starter - Bootstrapping New Project')

  const argv = process.argv.slice(2)
  const argMap = new Map()

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]

    if (/^--.+=/.test(arg)) {
      const match = arg.match(/^--([^=]+)=([\s\S]*)$/)
      const key = match[1]
      const value = match[2]

      argMap.set(key, value)
    } else if (/^--.+/.test(arg)) {
      const key = arg.match(/^--(.+)/)[1]
      const next = argv[i + 1]

      argMap.set(key, next)
    }
  }

  const source = makePath(__dirname, '../..')
  const dest = paramOr(argMap, 'destination', process.cwd()).trim()
  const app = paramOr(argMap, 'app', 'my-app').trim()
  const destination = makePath(dest, app)

  console.log(
    `
Summary:
Destination: ${destination}
App: ${app}
`
  )

  console.log('Copying Project Files ...')

  FsExt.copySync(source, destination, { filter: ignoreContent(...Ignores.map(x => makePath(source, x))) })

  console.log('Copying Templates ...')

  Templates.forEach(x => FsExt.copySync(makePath(source, 'templates', x.file), makePath(destination, x.copyTo)))

  console.log('Preparing package.json ...')

  const pkg = FsExt.readJsonSync(makePath(source, 'package.json'))
  const newPkg = {
    name: app,
    main: 'dist/index.js'
  }

  PkgFieldsToKeep.forEach(field => {
    if (typeof pkg[field] !== 'undefined') {
      newPkg[field] = pkg[field]
    }
  })

  FsExt.writeJsonSync(makePath(destination, 'package.json'), newPkg, { spaces: 2 })

  console.log('\nDone!')

  return Promise.resolve()
}

main().catch(console.error)
