import { Reducer } from '@reduxjs/toolkit'
import { Action } from '../store'

export const applyReducers =
  <S, A>(...reducers: Array<Reducer<S>>): Reducer =>
  (state: S, action: Action<A>): S => {
    let st = state

    for (const reducer of reducers) {
      st = reducer(st, action)
    }

    return st
  }

export const actionIs =
  <A>(type: string) =>
  (action: Action<A>): boolean =>
    type === action?.type

export const onlyWhen =
  <S, A>(predicate: (action: Action<unknown>) => boolean, defaultState = {}) =>
  (reducer: Reducer) =>
  (state: S, action: Action<A>): S => {
    if (state === null || typeof state === 'undefined') {
      return defaultState as S
    }

    const pred = predicate(action)

    if (pred) {
      return reducer(state, action)
    }

    return state
  }

export const forAction = (action: string) => onlyWhen(actionIs(action))
