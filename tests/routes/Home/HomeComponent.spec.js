import React from 'react'
import HomeComponent from 'routes/Home/HomeComponent'
import { render } from 'enzyme'

describe('(Component) Home', () => {
  let _component

  beforeEach(() => {
    _component = render(<HomeComponent />)
  })

  it('Renders a welcome message', () => {
    const welcome = _component.find('h4')
    expect(welcome).to.exist
    expect(welcome.text()).to.match(/Welcome!/)
  })

  it('Renders an awesome duck image', () => {
    const duck = _component.find('img')
    expect(duck).to.exist
    expect(duck.attr('alt')).to.match(/This is a duck, because Redux!/)
  })

})
