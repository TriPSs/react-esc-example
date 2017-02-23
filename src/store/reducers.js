import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import { REDUCER_NAME as Counter, INITIAL_STATE as CounterState } from '../routes/Counter/CounterConstants'
import { REDUCER_NAME as Async, INITIAL_STATE as AsyncState } from '../routes/Async/AsyncConstants'

// Fix: "React-Redux: Combining reducers: Unexpected Keys"
// http://stackoverflow.com/a/33678198/789076
const initialReducers = {
  [Counter]: (state = CounterState) => state, // default value should be imported from the module/reducer
  [Async]  : (state = AsyncState) => state // default value should be imported from the module/reducer
}

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    router,
    ...initialReducers,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
