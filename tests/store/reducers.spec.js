import { assert } from 'chai'

import makeRootReducer, { initialReducers } from 'store/reducers'
import CounterReducer from 'routes/Counter/CounterReducer'
import AsyncReducer from 'routes/Async/AsyncReducer'

describe('(Store) Reducers', () => {

  describe('initialReducers', () => {
    describe('Counter', () => {
      it('Should have a counter key.', () => {
        expect(initialReducers).to.have.property('counter')
      })

      it('Should return the counter reducer.', () => {
        assert.deepEqual(initialReducers['counter'], CounterReducer)
      })
    })

    describe('Async', () => {
      it('Should have a async key.', () => {
        expect(initialReducers).to.have.property('async')
      })

      it('Should return the async reducer.', () => {
        assert.deepEqual(initialReducers['async'], AsyncReducer)
      })
    })
  })

  describe('makeRootReducer', () => {
    it('Should be a function.', () => {
      expect(makeRootReducer).to.be.a('function')
    })

    it('Should return a function.', () => {
      expect(makeRootReducer({})).to.be.a('function')
    })
  })

})
