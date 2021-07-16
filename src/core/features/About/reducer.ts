import { actionTypeIs, reducerForWhen } from '@app/utils/redux'
import { Action } from '@app/store'

const ActionTypes = {
  One: 'ACTION_ONE',
  Two: 'ACTION_TWO'
}

export interface DemoState {
  message: string
}

const demonstrationReducer = (state: DemoState, action: Action<string>): DemoState => {
  if (action.type === ActionTypes.One) {
    return { ...state, message: 'ACTION ONE TRIGGERED' }
  }

  if (action.type === ActionTypes.Two) {
    return { ...state, message: 'ACTION TWO TRIGGERED' }
  }

  return state
}

export const demo = reducerForWhen(actionTypeIs(ActionTypes.One))(demonstrationReducer)
