import React from 'react'
import { bindActionCreators } from 'redux'
import Async from 'routes/Async/AsyncComponent'
import { shallow } from 'enzyme'

describe('(Component) Async', () => {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _spies = {}
    _props = {
      fetching       : false,
      jsonPlaceholder: null,
      ...bindActionCreators({
        fetchData: (_spies.fetchData = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    }

    _wrapper = shallow(<Async {..._props} />)
  })

  describe('@resolve', () => {
    it('wraps Component name', function () {
      expect(Async.displayName).to.equal('JsonPlaceholderResolver')
    })

    it('Should render as Resolver.', () => {
      expect(_wrapper.is('Resolver')).to.equal(true)
    })

    it('Should render these props.', () => {
      expect(_wrapper.props().props).to.have.property('jsonPlaceholder', null)
    })
  })
})
