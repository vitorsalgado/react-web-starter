import { configureStore, EnhancedStore, getDefaultMiddleware, Middleware } from '@reduxjs/toolkit'
import Config from '@app/utils/config'
import rootReducer from './store-reducer'
import { logger } from './middlewares/logger'
import { InitialState } from './state'

const middlewares: Middleware[] = []

if (Config.isLogEnabled()) {
  middlewares.push(logger)
}

const store = configureStore({
  reducer: rootReducer as any,
  preloadedState: InitialState,
  middleware: [...getDefaultMiddleware(), ...middlewares],
  devTools: !Config.isProd()
})

export function configureAppStore(): EnhancedStore {
  return store
}
