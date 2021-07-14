import { actionTypeIs, reducerForWhen } from '@app/utils/redux'

export const testReducer = (state: any, action: any) => {
  if (action.type === 'ACTION_ONE') {
    return { ...state, test: 'ACTION ONE TRIGGERED' }
  }

  if (action.type === 'ACTION_TWO') {
    return { ...state, test: 'ACTION TWO TRIGGERED' }
  }

  return state
}

export const TheReducer = reducerForWhen(actionTypeIs('ACTION_ONE'))(testReducer)
