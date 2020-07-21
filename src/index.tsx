import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './app'
import { initLogger, logInfo } from './utils/logger'
import { handleErr, handleExceptionAndContinue } from './utils/errorhandler'

initLogger()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

if ('serviceWorker' in navigator)
  window.addEventListener('load', () =>
    navigator.serviceWorker
      .register('/sw.js')
      .then(registration => logInfo('SW registered: ', registration))
      .catch(handleExceptionAndContinue('SW registration failed')))

window.addEventListener('unhandledrejection', event => handleErr(event.reason))

window.addEventListener('error',
  event =>
    handleErr(
      'An error occurred. Reason: ' + event.message +
      +'\n' + 'Line: ' + event.lineno
      + '\n' + 'Col: ' + event.colno
      + '\n' + 'Source: ' + event.filename
      + '\n' + 'Error:'
      + '\n' + event.error
    ))
