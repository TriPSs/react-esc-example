import { assert } from 'chai'

import counterReducer from 'routes/Counter/CounterReducer'
import * as Actions from 'routes/Counter/CounterActions'

describe('(Reducer) Counter', () => {
  it('Should be a function.', () => {
    expect(counterReducer).to.be.a('function')
  })

  it('Should initialize with a state of 0 (Number).', () => {
    assert.deepEqual(counterReducer(undefined, {}), { count: 0 })
  })

  it('Should return the previous state if an action was not matched.', () => {
    let state = counterReducer(undefined, {})
    assert.deepEqual(state, { count: 0 })

    state = counterReducer(state, { type: '@@@@@@@' })
    assert.deepEqual(state, { count: 0 })

    state = counterReducer(state, Actions.increment(5))
    assert.deepEqual(state, { count: 5 })

    state = counterReducer(state, { type: '@@@@@@@' })
    assert.deepEqual(state, { count: 5 })
  })
})
