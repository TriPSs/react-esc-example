import CounterRoute from 'routes/Counter'

describe('(Route) Counter', () => {
  let _route,
      _spies = {
        nextStateSpy: sinon.spy(),
        cbSpy       : sinon.spy()
      },
      _store = {
        asyncReducers: []
      }

  beforeEach(() => {
    _route = CounterRoute(_store)
  })

  it('Should be a function', () => {
    expect(CounterRoute).to.be.a('function')
  })

  it('Should return a route configuration object', () => {
    expect(_route).to.be.a('object')
  })

  it('Configuration should contain path `counter`', () => {
    expect(_route.path).to.equal('counter')
  })

  describe('getComponent', () => {
    it('Should be a function', () => {
      expect(_route.getComponent).to.be.a('function')
    })
  })

})
