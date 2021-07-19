import * as React from 'react'
import { render, screen } from '@testing-library/react'
import App from '@app/app'

describe('App', () => {
  it('should render correctly', () => {
    render(<App />)

    expect(screen.getByText(/React Web Starter Demo/i)).toBeTruthy()
  })
})
