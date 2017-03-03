import { assert } from 'chai'

import { initialReducers, makeRootReducer, injectReducer } from 'store/reducers'
import { REDUCER_NAME as Counter, INITIAL_STATE as CounterState } from 'routes/Counter/CounterConstants'
import { REDUCER_NAME as Async, INITIAL_STATE as AsyncState } from 'routes/Async/AsyncConstants'

describe('(Store) Reducers', () => {

  describe('initialReducers', () => {
    it('Should have a counter key.', () => {
      expect(initialReducers).to.have.property(Counter)
      assert.deepEqual(initialReducers[Counter](), CounterState)
    })

    it('Should have a async key.', () => {
      expect(initialReducers).to.have.property(Async)
      assert.deepEqual(initialReducers[Async](), AsyncState)
    })
  })

  describe('makeRootReducer', () => {
    it('Should be a function.', () => {
      expect(makeRootReducer).to.be.a('function')
    })

    it('Should return a function.', () => {
      expect(makeRootReducer({})).to.be.a('function')
    })

    it('Should have a router key.', () => {
      expect(makeRootReducer({})()).to.have.property('router')
    })
  })

  describe('injectReducer', () => {
    it('Should be a function.', () => {
      expect(injectReducer).to.be.a('function')
    })

    it('Should inject test reducer.', () => {
      let _replaceReducerSpy = sinon.spy(),
          store              = {
            asyncReducers : [],
            replaceReducer: _replaceReducerSpy
          }

      injectReducer(store, { key: 'test', reducer: sinon.spy() })

      _replaceReducerSpy.should.have.been.calledOnce
      expect(store.asyncReducers).to.have.property('test')
    })
  })

})
