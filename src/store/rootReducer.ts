import { counter } from '@app/core/Counter/counterReducers'
import { AppState } from '@app/store/AppState'
import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers<AppState>({ counter })

export default rootReducer
