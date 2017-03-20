/**
 * Created by tycho on 20/03/2017.
 */
import { Route } from 'react-router'
import { shallow } from 'enzyme'

import getRoutes from 'routes/index'

describe('(Routes)', () => {

  it('Should be a function', () => {
    expect(typeof getRoutes).to.equal('function')
  })

})
