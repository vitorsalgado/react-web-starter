import '@app/core/assets/global.scss'
import '@app/core/assets/favicon.ico'

import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import About from '@app/core/features/About'
import Home from '@app/core/features/Home'
import Header from '@app/core/components/Header'
import LoginPage from '@app/core/features/Login'

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  )
}
