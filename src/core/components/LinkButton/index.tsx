import * as React from 'react'
import Css from '@app/core/components/LinkButton/styles.scss'

interface Props {
  href: string
  label: string
}

export default function LinkButton({ href, label }: Props): JSX.Element {
  return (
    <a href={href} className={Css.btn}>
      {label}
    </a>
  )
}
