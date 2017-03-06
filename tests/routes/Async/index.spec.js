import AsyncRoute from 'routes/Async'

describe('(Route) Async', () => {
  let _route

  beforeEach(() => {
    _route = AsyncRoute({})
  })

  it('Should return a route configuration object', () => {
    expect(_route).to.be.a('object')
  })

  it('Configuration should contain path `async`', () => {
    expect(_route.path).to.equal('async')
  })

  describe('getComponent', () => {
    it('Should be a function', () => {
      expect(_route.getComponent).to.be.a('function')
    })
  })
})
