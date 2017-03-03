import AsyncRoute from 'routes/Async'

describe('(Route) Async', () => {
  let _route

  beforeEach(() => {
    _route = AsyncRoute({})
  })

  it('Should return a route configuration object', () => {
    expect(typeof(_route)).to.equal('object')
  })

  it('Configuration should contain path `counter`', () => {
    expect(_route.path).to.equal('async')
  })

})
