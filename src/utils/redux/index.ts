import { Action } from '@app/store/types'

export const reducerForWhen =
  <T, S>(predicate: (action: Action<T>) => boolean, defaultState: S = {} as S) =>
  (reducer: (state: S, action: Action<T>) => S) =>
  (state: S, action: Action<T>): S => {
    if (typeof state === 'undefined') {
      return defaultState
    }

    if (predicate(action)) {
      return reducer(state, action)
    }

    return state
  }

export const actionTypeIs =
  <T>(type: string) =>
  (action: Action<T>): boolean =>
    type === action.type
