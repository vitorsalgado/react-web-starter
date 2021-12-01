import { CounterActionTypes } from '@app/core/Counter/CounterActionTypes'
import { Action } from '@app/store'

export function incrementAction(): Action {
  return { type: CounterActionTypes.INCREMENT, payload: undefined }
}

export function decrementAction(): Action {
  return { type: CounterActionTypes.DECREMENT, payload: undefined }
}
