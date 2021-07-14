import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from '@app/store/root-reducer'
import { logger } from '@app/store/middlewares/logger'
import { State } from '@app/store/types'
import Config from '@app/config'

const initialState: State = {
  TheReducer: { test: '' }
}

const middlewares = []

if (Config.isLogEnabled()) {
  middlewares.push(logger)
}

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: [...getDefaultMiddleware(), ...middlewares],
  devTools: !Config.isProd()
})

export default store
