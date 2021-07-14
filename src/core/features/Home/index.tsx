import * as React from 'react'
import { Link } from 'react-router-dom'
import logo from '@app/core/features/Home/logo.png'

export default function Home(): JSX.Element {
  return (
    <div>
      <h1>Home! Hello World!</h1>
      <img src={logo} alt={'nothing'} />
      <Link to="/about">Link to About</Link>
    </div>
  )
}
