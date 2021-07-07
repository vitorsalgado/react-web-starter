import * as React from 'react'
import Css from './styles.scss'

interface Props {
  href: string
  label: string
}

export default function LinkButton({ href, label }: Props) {
  return (
    <a href={href} className={Css.btn}>
      {label}
    </a>
  )
}
