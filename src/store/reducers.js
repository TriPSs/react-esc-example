import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import { CounterConstants, CounterReducer } from '../routes/Counter'
import { REDUCER_NAME as Async } from '../routes/Async/AsyncConstants'
import AsyncReducer from '../routes/Async/AsyncReducer'

// Fix: "React-Redux: Combining reducers: Unexpected Keys"
// http://stackoverflow.com/a/33678198/789076
export const initialReducers = {
  [CounterConstants.REDUCER_NAME]: CounterReducer,
  [Async]  : AsyncReducer
}

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    router,
    ...initialReducers,
    ...asyncReducers
  })
}

export default makeRootReducer
