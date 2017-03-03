import * as Constants from 'routes/Async/AsyncConstants'

describe('(Constants) Async', () => {

  it('Should export a constant counter.', () => {
    expect(Constants.REDUCER_NAME).to.equal('async')
  })

  it('Should export a constant async.fetching_data.', () => {
    expect(Constants.FETCHING_DATA).to.equal('async.fetching_data')
  })

  it('Should export a constant async.fetched_data.', () => {
    expect(Constants.FETCHED_DATA).to.equal('async.fetched_data')
  })

})
