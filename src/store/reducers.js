import { combineReducers } from 'redux'

import { CounterConstants, CounterReducer } from '../routes/Counter'
import { AsyncConstants, AsyncReducer } from '../routes/Async'

// Fix: "React-Redux: Combining reducers: Unexpected Keys"
// http://stackoverflow.com/a/33678198/789076
export const initialReducers = {
  [CounterConstants.REDUCER_NAME]: CounterReducer,
  [AsyncConstants.REDUCER_NAME]  : AsyncReducer
}

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    ...initialReducers,
    ...asyncReducers
  })
}

export default makeRootReducer
