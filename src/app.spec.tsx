import { configureAppStore } from '@app/store'
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import App from '@app/app'
import { Provider } from 'react-redux'

describe('App', () => {
  it('should render correctly', () => {
    render(
      <Provider store={configureAppStore()}>
        {' '}
        <App />
      </Provider>
    )

    expect(screen.getByText(/React Web Starter Demo/i)).toBeTruthy()
  })
})
