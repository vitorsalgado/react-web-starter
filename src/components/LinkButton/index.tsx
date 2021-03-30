import * as React from 'react'
import Css from './LinkButton.module.scss'

interface Props {
  href: string
  label: string
}

export default function LinkButton({ href, label }: Props) {
  return (
    <a href={href} className={Css.teste}>
      {label}
    </a>
  )
}
