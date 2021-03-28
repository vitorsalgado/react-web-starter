'use strict'

const Path = require('path')
const Fs = require('fs')

const AppDirectory = Fs.realpathSync(process.cwd())

module.exports.resolvePath = relativePath => Path.resolve(AppDirectory, relativePath)
