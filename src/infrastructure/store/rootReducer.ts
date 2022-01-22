import { combineReducers } from '@reduxjs/toolkit'
import { counter } from '../../core/Counter/counterReducers'
import { AppState } from './AppState'

const rootReducer = combineReducers<AppState>({ counter })

export default rootReducer
