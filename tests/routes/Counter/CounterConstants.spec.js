import * as Constants from 'routes/Counter/CounterConstants'

describe('(Constants) Counter', () => {

  it('Should export a constant counter.', () => {
    expect(Constants.REDUCER_NAME).to.equal('counter')
  })

  it('Should export a constant counter.increment.', () => {
    expect(Constants.INCREMENT).to.equal('counter.increment')
  })

})
