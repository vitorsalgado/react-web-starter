import * as React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'

export default () => (
  <div>
    <h1>Home!</h1>
    <img src={logo} />
    <Link to="/about">Link to About</Link>
  </div>
)
