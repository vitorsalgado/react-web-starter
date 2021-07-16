import * as React from 'react'
import { connect, useSelector } from 'react-redux'
import { State } from '@app/store'

const action1 = () => ({ type: 'ACTION_ONE' })
const action2 = () => ({ type: 'ACTION_ONE', error: { code: '100', message: 'Total Failure' } })

function About(props: any): JSX.Element {
  const message = useSelector((state: State) => state.demo.message)

  return (
    <div>
      <h1>About</h1>
      <h2>Selector Value -- {message}</h2>
      <h2>Prop Value -- {props.message}</h2>
      <button onClick={props.triggerOne}>Test 01</button>
      <br />
      <button onClick={props.triggerTwo}>Test 02</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => ({
  triggerOne: () => dispatch(action1()),
  triggerTwo: () => dispatch(action2())
})

const mapStateToProps = (state: State) => ({ message: state.demo.message })

export default connect(mapStateToProps, mapDispatchToProps)(About)
