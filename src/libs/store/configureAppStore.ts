import { configureStore, EnhancedStore, Middleware } from '@reduxjs/toolkit'
import { Config } from '../conf'
import { AppState } from './AppState'
import { rootReducer } from './rootReducer'
import { LoggerMiddleware } from './middlewares/LoggerMiddleware'
import { AppInitialState } from './AppInitialState'

const middlewares: Middleware[] = []

if (Config.isLogEnabled()) {
  middlewares.push(LoggerMiddleware)
}

const store = configureStore({
  reducer: rootReducer,
  preloadedState: AppInitialState,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middlewares),
  devTools: !Config.isProd(),
})

export function configureAppStore(): EnhancedStore<AppState> {
  return store
}
