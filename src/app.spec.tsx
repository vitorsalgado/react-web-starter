import '@testing-library/jest-dom/extend-expect'
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import App from '@app/app'

describe('App', () => {
  it('should render correctly', () => {
    render(<App />)

    expect(screen.getByRole('heading')).toHaveTextContent('Home!')
  })
})
