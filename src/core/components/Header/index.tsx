import * as React from 'react'
import LinkButton from '@app/core/components/LinkButton'

export default function Header(): JSX.Element {
  return (
    <header>
      <nav>
        <div>
          <a href="/">Home</a>
          <LinkButton href={'/login'} label="Login" />
        </div>
      </nav>
    </header>
  )
}
