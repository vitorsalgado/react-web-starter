import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import About from './features/about'
import Home from './features/home'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  )
}
