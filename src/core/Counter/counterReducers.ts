import { Counter } from '@app/core/Counter/Counter'
import { CounterActionTypes } from '@app/core/Counter/CounterActionTypes'
import { applyReducers, forAction } from '@app/utils/redux'

function incrementReducer(state: Counter): Counter {
  return {
    ...state,
    total: state.total + 1
  }
}

function decrementReducer(state: Counter): Counter {
  return {
    ...state,
    total: state.total - 1
  }
}

export const counter = applyReducers(
  forAction(CounterActionTypes.INCREMENT)(incrementReducer),
  forAction(CounterActionTypes.DECREMENT)(decrementReducer)
)
