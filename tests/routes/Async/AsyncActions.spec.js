import { assert } from 'chai'

import * as Constants from 'routes/Async/AsyncConstants'
import asyncReducer from 'routes/Async/AsyncReducer'
import * as Actions from 'routes/Async/AsyncActions'

describe('(Actions) Async', () => {

  describe('(Action Creator) Actions.startFetching', () => {
    it('Should be exported as a function.', () => {
      expect(Actions.startFetching).to.be.a('function')
    })

    it('Should return an action with type "async.fetching_data".', () => {
      expect(Actions.startFetching()).to.have.property('type', Constants.FETCHING_DATA)
    })
  })

  describe('(Action Creator) Actions.fetchedData', () => {
    it('Should be exported as a function.', () => {
      expect(Actions.fetchedData).to.be.a('function')
    })

    it('Should return an action with type "counter.increment".', () => {
      expect(Actions.fetchedData()).to.have.property('type', Constants.FETCHED_DATA)
    })

    it('Should have the "payload" property to "test".', () => {
      expect(Actions.fetchedData('test')).to.have.property('payload', 'test')
    })
  })

  describe('(Action Creator) Actions.fetchData', () => {
    let _globalState
    let _dispatchSpy
    let _getStateSpy

    beforeEach(() => {
      _globalState = {
        async: asyncReducer(undefined, {})
      }
      _dispatchSpy = sinon.spy((action) => {
        _globalState = {
          ..._globalState,
          async: asyncReducer(_globalState.async, action)
        }
      })
      _getStateSpy = sinon.spy(() => {
        return _globalState
      })
    })

    it('Should be exported as a function.', () => {
      expect(Actions.fetchData).to.be.a('function')
    })

    it('Should return a function (is a thunk).', () => {
      expect(Actions.fetchData()).to.be.a('function')
    })

    it('Should return a promise from that thunk that gets fulfilled.', () => {
      return Actions.fetchData()(_dispatchSpy).should.eventually.be.fulfilled
    })

    it('Should call dispatch exactly twice.', () => {
      return Actions.fetchData()(_dispatchSpy)
                    .then(() => {
                      _dispatchSpy.should.have.been.calledTwice
                    })
    })

  })
})
