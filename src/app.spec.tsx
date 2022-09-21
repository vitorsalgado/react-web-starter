import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { App } from './app'
import { configureAppStore } from './libs/store'

describe('App', () => {
  it('should render correctly', () => {
    render(
      <Provider store={configureAppStore()}>
        {' '}
        <App />
      </Provider>,
    )

    expect(screen.getByText(/React Web Starter Demo/i)).toBeTruthy()
  })
})
