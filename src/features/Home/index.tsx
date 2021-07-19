import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 50px;
  text-align: center;
  line-height: 30px;
`

export default function Home(): JSX.Element {
  return (
    <Container>
      <h1>React Web Starter Demo</h1>
      <h2>This is just a demonstration project.</h2>
    </Container>
  )
}
