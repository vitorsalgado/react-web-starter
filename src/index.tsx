import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'
import App from './app'
import { configureAppStore } from './store'
import { registerWindowErrorEvents } from './utils/event_listeners'
import { initWebVitals } from './utils/metrics/web-vitals'
import { registerServiceWorker } from './utils/sw'

const Store = configureAppStore()
const RootContainer = document.getElementById('root') as HTMLElement

const render = (): void => {
  ReactDOM.render(
    <Provider store={Store}>
      <HelmetProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </HelmetProvider>
    </Provider>,
    RootContainer
  )
}

render()
registerWindowErrorEvents()
registerServiceWorker()
initWebVitals()

if (module.hot) {
  module.hot.accept(['./app', './shared/locales/i18n'], () => {
    ReactDOM.unmountComponentAtNode(RootContainer)
    render()
  })
}
