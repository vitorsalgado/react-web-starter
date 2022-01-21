import { forAction } from '../../utils/redux'
import { applyReducers } from '../../utils/redux'
import { Counter } from './Counter'
import { CounterActionTypes } from './CounterActionTypes'

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
