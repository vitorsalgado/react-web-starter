import './global.scss'
import './assets/favicon.ico'

import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import About from './features/about'
import Home from './features/home'
import Header from './components/Header'

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  )
}
