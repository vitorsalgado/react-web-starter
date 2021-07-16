import { Action } from '@app/store'

export const reducerForWhen =
  (predicate: (action: Action<never>) => boolean, defaultState: any = {}) =>
  (reducer: (state: any, action: Action<never>) => any) =>
  (state: any = {}, action: Action<never>): any => {
    if (typeof state === 'undefined') {
      return defaultState
    }

    if (predicate(action)) {
      return reducer(state, action)
    }

    return state
  }

export const actionTypeIs =
  (type: string) =>
  (action: Action<never>): boolean =>
    type === action.type
