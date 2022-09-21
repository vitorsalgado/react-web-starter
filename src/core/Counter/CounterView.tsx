import * as React from 'react'
import styled from 'styled-components'
import { CounterViewModel } from './CounterViewModel'

const Container = styled.div`
  margin: 50px 0;
`

const Title = styled.h3`
  font-weight: bold;
`

const SubTitle = styled.h4`
  font-style: italic;
`

const Count = styled.p`
  font-weight: bold;
  font-size: 20px;
`

const Button = styled.button`
  padding: 20px;
  margin: 10px;
  width: 75px;
  size: 25px;
  font-weight: bold;
  cursor: pointer;
  color: #fff;
  background: var(--color-accent);
`

export function CounterView(): JSX.Element {
  const vm = CounterViewModel()

  return (
    <Container>
      <Title>Counter</Title>
      <SubTitle>Sample Redux Implementation</SubTitle>
      <Count>{vm.total()}</Count>
      <Button type="button" onClick={vm.increment}>
        +
      </Button>
      <Button type="button" onClick={vm.decrement}>
        -
      </Button>
    </Container>
  )
}
