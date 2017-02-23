import { injectReducer } from 'store/reducers'
import { REDUCER_NAME } from './AsyncConstants'

export default (store) => ({
  path: 'async',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
       dependencies for bundling   */
      const Async   = require('./AsyncContainer').default
      const reducer = require('./AsyncReducer').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: REDUCER_NAME, reducer })

      /*  Return getComponent   */
      cb(null, Async)

      /* Webpack named bundle   */
    }, 'async')
  }
})
