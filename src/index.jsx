import React from 'react'
import ReactDom from 'react-dom'
import { createStore } from 'redux'

import ServiceWorker from './serviceworker'
import Reducers from './reducers'
import Routes from './routes'

const store = createStore(Reducers)

ReactDom.render(
  <Routes store={store} />,
  document.getElementById('root')
)

ServiceWorker()
