import { configureStore, EnhancedStore, getDefaultMiddleware, Middleware } from '@reduxjs/toolkit'
import rootReducer from '@app/store/root-reducer'
import { logger } from '@app/store/middlewares/logger'
import Config from '@app/config'
import { State } from '@app/store/state'

export const InitialState: State = {
  demo: {
    message: 'start'
  }
}

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
