import { combineReducers } from '@reduxjs/toolkit'
import { counter } from '../../core/Counter/counterReducers'
import { AppState } from './AppState'

export const rootReducer = combineReducers<AppState>({ counter })
