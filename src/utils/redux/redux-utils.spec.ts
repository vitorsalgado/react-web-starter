import { actionTypeIs, reducerForWhen } from '@app/utils/redux'
import { combineReducers, createStore } from 'redux'

describe('Redux Utils', function () {
  const Actions = {
    Test01: 'test-01',
    Test02: 'test-02',
    Test03: 'test-03'
  }

  const action1 = () => ({ type: Actions.Test01 } as any)
  const action2 = () => ({ type: Actions.Test02 } as any)

  const reducer1 = (state: any, _action: { type: string }) => ({ ...state, msg: '01' })
  const reducer2 = (state: any, _action: { type: string }) => ({ ...state, msg: '02', test: 'tested' })
  const reducer3 = (state: any, _action: { type: string }) => ({ ...state, msg: '03', something: 'somewhere' })

  const store = createStore(
    combineReducers({
      reducer1: reducerForWhen(actionTypeIs(Actions.Test01))(reducer1),
      reducer2: reducerForWhen(actionTypeIs(Actions.Test02))(reducer2),
      reducer3: reducerForWhen(actionTypeIs(Actions.Test03))(reducer3)
    })
  )

  it('should apply reducer only if provided predicated pass', function () {
    store.dispatch(action1())
    expect(store.getState()).toEqual({ reducer1: { msg: '01' }, reducer2: {}, reducer3: {} })

    store.dispatch(action2())
    expect(store.getState()).toEqual({ reducer1: { msg: '01' }, reducer2: { msg: '02', test: 'tested' }, reducer3: {} })
  })

  it('should not fail with undefined state', function () {
    const dummyReducer = (state: any, action: any) => ({ ...state, msg: action.msg })
    const root = reducerForWhen(actionTypeIs('test'))(dummyReducer)

    expect(() => root(undefined, { type: 'test' } as any)).not.toThrow()
  })
})
