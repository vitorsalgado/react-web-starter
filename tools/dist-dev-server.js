#!/usr/bin/env node

const Path = require('path')
const Express = require('express')

const App = Express()

const opts = {
  dotfiles: 'ignore',
  etag: false,
  setHeaders: (res, path, stat) => res.set('X-Local-Dev-Server', 'true')
}

App.disable('view cache')
App.set('etag', false)
App.use(Express.static('dist', opts))

App.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  res.set('Pragma', 'no-cache')
  res.set('Expires', 0)
  res.set('Surrogate-Control', 'no-store')

  next()
})

App.get('*', (req, res) => {
  res.sendFile(Path.join(__dirname + '/dist/index.html'))
})

// eslint-disable-next-line no-console
App.listen(3000, () => console.log('Static server connected'))
