import React from 'react'
import { bindActionCreators } from 'redux'
import { Async } from 'routes/Async/AsyncComponent'
import { shallow, render } from 'enzyme'

describe('(Component) Async', () => {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _spies = {}
    _props = {
      fetching       : false,
      jsonPlaceHolder: "jsonPlaceHolder",
      ...bindActionCreators({
        fetchData: (_spies.doubleAsync = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    }

    _wrapper = shallow(<Async {..._props} />)
  })

  it('Should render as Resolver.', () => {
    expect(_wrapper.is('Resolver')).to.equal(true)
  })

})
