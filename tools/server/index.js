#!/usr/bin/env node

'use strict'

const Path = require('path')
const Express = require('express')

const ExpressApp = Express()

const opts = {
  dotfiles: 'ignore',
  etag: false,
  setHeaders: (res, path, stat) => res.set('X-Local-Dev-Server', 'true')
}

ExpressApp.disable('view cache')
ExpressApp.set('etag', false)
ExpressApp.use(Express.static('dist', opts))

ExpressApp.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  res.set('Pragma', 'no-cache')
  res.set('Expires', 0)
  res.set('Surrogate-Control', 'no-store')

  next()
})

ExpressApp.get('*', (req, res) => {
  res.sendFile(Path.join(__dirname + '/dist/index.html'))
})

// eslint-disable-next-line no-console
ExpressApp.listen(3000, () => console.log('Static server connected'))
