import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background: var(--color-primary);
  color: var(--text-primary);
  font-size: 22px;
  padding: 15px;
`

export function Header(): JSX.Element {
  return (
    <Wrapper>
      <span>React Web Starter</span>
    </Wrapper>
  )
}
