import * as React from 'react'
import LinkButton from '../LinkButton'

export default function Header() {
  return (
    <header>
      <nav>
        <div>
          <a href="/">Como funciona</a>
          <a href="/">Como funciona</a>
          <a href="/">Como funciona</a>
          <LinkButton href={'/'} label={'Entrar'} />
        </div>
      </nav>
    </header>
  )
}
