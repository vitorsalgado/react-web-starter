import { AppState } from '@app/store/AppState'
import { configureStore, EnhancedStore, Middleware } from '@reduxjs/toolkit'
import Config from '@app/config'
import rootReducer from './rootReducer'
import { logger } from './middlewares/logger'
import { AppInitialState } from './AppInitialState'

const middlewares: Middleware[] = []

if (Config.isLogEnabled()) {
  middlewares.push(logger)
}

const store = configureStore({
  reducer: rootReducer,
  preloadedState: AppInitialState,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middlewares),
  devTools: !Config.isProd()
})

export function configureAppStore(): EnhancedStore<AppState> {
  return store
}
