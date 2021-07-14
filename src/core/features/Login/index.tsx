import * as React from 'react'
import { Link } from 'react-router-dom'

export default function LoginPage(): JSX.Element {
  return (
    <div>
      <h1>Login Page!</h1>
      <Link to="/">Home</Link>
    </div>
  )
}
