import 'react-app-polyfill/stable'
import '@app/locales/i18n'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'
import App from '@app/app'
import initWebVitals from '@app/utils/metrics/web-vitals'
import registerServiceWorker from '@app/utils/sw'
import registerWindowErrorEvents from '@app/utils/event-listeners'
import { configureAppStore } from '@app/store'

const store = configureAppStore()
const ROOT_CONTAINER = document.getElementById('root') as HTMLElement

const render = (): void => {
  ReactDOM.render(
    <Provider store={store}>
      <HelmetProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </HelmetProvider>
    </Provider>,
    ROOT_CONTAINER
  )
}

render()
registerWindowErrorEvents()
registerServiceWorker()
initWebVitals()

if ((module as any).hot) {
  ;(module as any).hot.accept('./app', () => {
    ReactDOM.unmountComponentAtNode(ROOT_CONTAINER)
    render()
  })
  ;(module as any).hot.accept(['./locales/i18n'], () => {
    // ...
  })
}
