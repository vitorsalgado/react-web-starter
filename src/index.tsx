import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './app'
import { handleErrorEvent, handleExceptionAndContinue } from './utils/errors'
import configureStore from './store'

const container = document.getElementById('root')
const store = configureStore()

const render = (): void => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    container
  )
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () =>
    navigator.serviceWorker.register('/sw.js').catch(handleExceptionAndContinue('SW registration failed'))
  )
}

window.addEventListener('unhandledrejection', event => handleErrorEvent(event.reason))
window.addEventListener('error', event => handleErrorEvent(event))

if ((module as any).hot) {
  ;(module as any).hot.accept('./app', function () {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    ReactDOM.unmountComponentAtNode(container!)
    render()
  })
}

render()
