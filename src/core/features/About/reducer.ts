import { actionIs, applyReducers, onlyWhen } from '@app/utils/redux'
import { Action } from '@app/store'

const ActionTypes = {
  One: 'ACTION_ONE',
  Two: 'ACTION_TWO'
}

export interface DemoState {
  message: string
}

const reducerOne = (state: DemoState, _action: Action<string>): DemoState => {
  return { ...state, message: 'ACTION ONE TRIGGERED' }
}

const reducerTwo = (state: DemoState, _action: Action<string>): DemoState => {
  return { ...state, message: 'ACTION TWO TRIGGERED' }
}

export const demo = applyReducers(
  onlyWhen(actionIs(ActionTypes.One))(reducerOne),
  onlyWhen(actionIs(ActionTypes.Two))(reducerTwo)
)
