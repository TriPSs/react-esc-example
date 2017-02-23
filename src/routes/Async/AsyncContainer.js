import { connect } from 'react-redux'
import * as Actions from './AsyncActions'
import * as Selectors from './AsyncSelectors'

/*  This is a container component. Notice it does not contain any JSX,
 nor does it import React. This component is **only** responsible for
 wiring in the actions and state necessary to render a presentational
 component - in this case, the counter:   */

import Async from './AsyncComponent'

const mapStateToProps = (state) => ({
  jsonPlaceholder: Selectors.getJsonPlaceholder(state)
})

/*  Note: mapStateToProps is where you should use `reselect` to create selectors

 Selectors can compute derived data, allowing Redux to store the minimal possible state.
 Selectors are efficient. A selector is not recomputed unless one of its arguments change.
 Selectors are composable. They can be used as input to other selectors.
 https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, { ...Actions })(Async)
