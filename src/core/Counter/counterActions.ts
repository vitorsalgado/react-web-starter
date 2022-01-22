import { Action } from '../../store'
import { CounterActionTypes } from './CounterActionTypes'

export function incrementAction(): Action {
  return { type: CounterActionTypes.INCREMENT }
}

export function decrementAction(): Action {
  return { type: CounterActionTypes.DECREMENT }
}
