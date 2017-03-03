import { assert } from 'chai'

import asyncReducer from 'routes/Async/AsyncReducer'
import * as Actions from 'routes/Async/AsyncActions'

describe('(Reducer) Async', () => {

  it('Should be a function.', () => {
    expect(asyncReducer).to.be.a('function')
  })

  it('Should initialize with a state of  { jsonPlaceholder: null, fetching: false }.', () => {
    assert.deepEqual(asyncReducer(undefined, {}), { jsonPlaceholder: null, fetching: false })
  })

  it('Should return the previous state if an action was not matched.', () => {
    let state = asyncReducer(undefined, {})
    assert.deepEqual(state, { jsonPlaceholder: null, fetching: false })

    state = asyncReducer(state, { type: '@@@@@@@' })
    assert.deepEqual(state, { jsonPlaceholder: null, fetching: false })

    state = asyncReducer(state, Actions.startFetching())
    assert.deepEqual(state, { jsonPlaceholder: null, fetching: true })

    state = asyncReducer(state, Actions.fetchedData('test'))
    assert.deepEqual(state, { jsonPlaceholder: 'test', fetching: false })
  })

})
