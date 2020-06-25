import '../site/favicon.ico'
import '../site/manifest.json'

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import About from './about'
import Home from './home'

export default () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about'><About/></Route>
    </Switch>
  </Router>
)
