import CounterRoute from 'routes/Counter'

describe('(Route) Counter', () => {

  it('Should be a object.', () => {
    expect(CounterRoute).to.be.a('object')
  })

  it('Configuration should contain path `counter`', () => {
    expect(CounterRoute.path).to.equal('/counter')
  })

  describe('Component', () => {
    it('Should be a function', () => {
      expect(CounterRoute.component).to.be.a('function')
    })
  })

})
