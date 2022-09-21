import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'
import App from './app'
import { configureAppStore } from './infrastructure/store'
import { registerWindowErrorEvents } from './utils/win'
import { initWebVitals } from './utils/metrics/web-vitals'
import { registerServiceWorker } from './sw'

const Store = configureAppStore()
const RootContainer = document.getElementById('root') as HTMLElement
const Root = createRoot(RootContainer)

const render = (): void =>
  Root.render(
    <Provider store={Store}>
      <HelmetProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </HelmetProvider>
    </Provider>,
  )

render()
registerWindowErrorEvents()
registerServiceWorker()
initWebVitals()

if (module.hot) {
  module.hot.accept(['./app', './infrastructure/locales/i18n'], () => {
    Root.unmount()
    render()
  })
}
