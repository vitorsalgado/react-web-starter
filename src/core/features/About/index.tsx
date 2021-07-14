import * as React from 'react'
import { Link } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'

const action1 = () => ({ type: 'ACTION_ONE' })
const action2 = () => ({ type: 'ACTION_ONE', error: { code: '666', message: 'Total Failure' } })

function About(props: any): JSX.Element {
  const test = useSelector((state: any) => state?.TheReducer?.test)

  return (
    <div>
      <h1>About Not Here Bro!</h1>
      <Link to="/">Link to Home</Link>
      <h2>Selector Value -- {test}</h2>
      <h2>Prop Value -- {props.test}</h2>
      <button onClick={props.test1}>Test 01</button>
      <br />
      <button onClick={props.test2}>Test 02</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => ({
  test1: () => dispatch(action1()),
  test2: () => dispatch(action2())
})

const mapStateToProps = (state: any) => ({ test: state?.TheReducer?.test })

export default connect(mapStateToProps, mapDispatchToProps)(About)
