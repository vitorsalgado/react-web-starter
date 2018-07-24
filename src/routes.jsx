import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import App from './app'
import About from './core/about'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Routes = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/about' component={About} />
        <Route exact path='/' component={App} />
      </Switch>
    </Router>
  </Provider>
)

Routes.propTypes = {
  store: PropTypes.object.isRequired
}

export default Routes
