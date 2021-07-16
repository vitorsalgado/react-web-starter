import { combineReducers } from '@reduxjs/toolkit'
import { demo } from '@app/core/features/About/reducer'

const rootReducer = combineReducers({ demo })

export default rootReducer
