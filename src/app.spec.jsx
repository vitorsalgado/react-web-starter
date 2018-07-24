import App from './app'
import React from 'react'
import { shallow } from 'enzyme'

describe('App', () => {
  it('should render correctly', () => {
    const app = shallow(<App />)

    expect(app.find('h1').text()).not.toHaveLength(0)
    expect(app).toMatchSnapshot()
  })
})
