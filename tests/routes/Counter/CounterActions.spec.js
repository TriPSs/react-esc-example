import { assert } from 'chai'

import * as Constants from 'routes/Counter/CounterConstants'
import counterReducer from 'routes/Counter/CounterReducer'
import * as Actions from 'routes/Counter/CounterActions'

describe('(Actions) Counter', () => {

  describe('(Action Creator) Actions.increment', () => {
    it('Should be exported as a function.', () => {
      expect(Actions.increment).to.be.a('function')
    })

    it('Should return an action with type "counter.increment".', () => {
      expect(Actions.increment()).to.have.property('type', Constants.INCREMENT)
    })

    it('Should assign the first argument to the "payload" property.', () => {
      expect(Actions.increment(5)).to.have.property('payload', 5)
    })

    it('Should default the "payload" property to 1 if not provided.', () => {
      expect(Actions.increment()).to.have.property('payload', 1)
    })
  })

  describe('(Action Creator) Actions.doubleAsync', () => {
    let _globalState
    let _dispatchSpy
    let _getStateSpy

    beforeEach(() => {
      _globalState = {
        counter: counterReducer(undefined, {})
      }
      _dispatchSpy = sinon.spy((action) => {
        _globalState = {
          ..._globalState,
          counter: counterReducer(_globalState.counter, action)
        }
      })
      _getStateSpy = sinon.spy(() => {
        return _globalState
      })
    })

    it('Should be exported as a function.', () => {
      expect(Actions.doubleAsync).to.be.a('function')
    })

    it('Should return a function (is a thunk).', () => {
      expect(Actions.doubleAsync()).to.be.a('function')
    })

    it('Should return a promise from that thunk that gets fulfilled.', () => {
      return Actions.doubleAsync()(_dispatchSpy, _getStateSpy).should.eventually.be.fulfilled
    })

    it('Should call dispatch and getState exactly once.', () => {
      return Actions.doubleAsync()(_dispatchSpy, _getStateSpy)
                    .then(() => {
                      _dispatchSpy.should.have.been.calledOnce
                      _getStateSpy.should.have.been.calledOnce
                    })
    })

    it('Should produce a state that is double the previous state.', () => {
      _globalState = { counter: { count: 2 } }

      return Actions.doubleAsync()(_dispatchSpy, _getStateSpy)
                    .then(() => {
                      _dispatchSpy.should.have.been.calledOnce
                      _getStateSpy.should.have.been.calledOnce

                      assert.deepEqual(_globalState.counter, { count: 4 })

                      return Actions.doubleAsync()(_dispatchSpy, _getStateSpy)
                    })
                    .then(() => {
                      _dispatchSpy.should.have.been.calledTwice
                      _getStateSpy.should.have.been.calledTwice

                      assert.deepEqual(_globalState.counter, { count: 8 })
                    })
    })
  })
})
