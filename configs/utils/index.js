'use strict'

const Path = require('path')
const Fs = require('fs')

const AppDirectory = Fs.realpathSync(process.cwd())

module.exports.resolvePath = relativePath => Path.resolve(AppDirectory, relativePath)

module.exports.sanitizePublicUrl = url => (url.endsWith('/') ? url.substring(0, url.length - 1) : url)
