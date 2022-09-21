import React from 'react'
import styled from 'styled-components'
import { CounterView } from '../Counter'

const Container = styled.div`
  margin: 50px;
  text-align: center;
  line-height: 30px;
`

export function Home(): JSX.Element {
  return (
    <Container>
      <h1>React Web Starter Demo</h1>
      <h2>This is just a demonstration project.</h2>
      <CounterView />
    </Container>
  )
}
