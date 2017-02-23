import * as Constants from './CounterConstants'
import * as Selectors from './CounterSelectors'

export function increment(value = 1) {
  return {
    type   : Constants.INCREMENT,
    payload: value
  }
}

/*  This is a thunk, meaning it is a function that immediately
 returns a function for lazy evaluation. It is incredibly useful for
 creating async actions, especially when combined with redux-thunk!

 NOTE: This is solely for demonstration purposes. In a real application,
 you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
 reducer take care of this logic.  */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {

        dispatch(increment(Selectors.getCount(getState())))

        resolve()
      }, 200)
    })
  }
}