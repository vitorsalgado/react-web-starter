import { Reducer } from '@reduxjs/toolkit'
import { combineReducers, createStore } from 'redux'
import { Action } from '../store'
import { actionIs } from '.'
import { onlyWhen } from '.'

describe('Redux Utils', function () {
  const Actions = {
    Test01: 'test-01',
    Test02: 'test-02',
    Test03: 'test-03',
  }

  const action1 = (): Action => ({ type: Actions.Test01 })
  const action2 = (): Action => ({ type: Actions.Test02 })

  const reducer1: Reducer = (state, _action: { type: string }) => ({ ...state, msg: '01' })
  const reducer2: Reducer = (state, _action: { type: string }) => ({ ...state, msg: '02', test: 'tested' })
  const reducer3: Reducer = (state, _action: { type: string }) => ({ ...state, msg: '03', something: 'somewhere' })

  const store = createStore(
    combineReducers({
      reducer1: onlyWhen(actionIs(Actions.Test01))(reducer1),
      reducer2: onlyWhen(actionIs(Actions.Test02))(reducer2),
      reducer3: onlyWhen(actionIs(Actions.Test03))(reducer3),
    }),
  )

  it('should apply reducer only if provided predicated pass', function () {
    store.dispatch(action1())
    expect(store.getState()).toEqual({ reducer1: { msg: '01' }, reducer2: {}, reducer3: {} })

    store.dispatch(action2())
    expect(store.getState()).toEqual({ reducer1: { msg: '01' }, reducer2: { msg: '02', test: 'tested' }, reducer3: {} })
  })

  it('should not fail with undefined state', function () {
    const dummyReducer: Reducer = (state, action) => ({ ...state, msg: action.msg })
    const root = onlyWhen(actionIs('test'))(dummyReducer)

    expect(() => root(undefined, { type: 'test' })).not.toThrow()
  })
})
