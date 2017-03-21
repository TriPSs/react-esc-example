import AsyncRoute from 'routes/Async'

describe('(Route) Async', () => {

  it('Should be a object.', () => {
    expect(AsyncRoute).to.be.a('object')
  })

  it('Configuration should contain path `AsyncRoute`', () => {
    expect(AsyncRoute.path).to.equal('/async')
  })

  describe('Component', () => {
    it('Should be a function', () => {
      expect(AsyncRoute.component).to.be.a('function')
    })
  })

})
