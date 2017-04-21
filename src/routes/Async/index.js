import React from 'react'

import AsyncContainer  from './AsyncContainer'

export AsyncReducer from './AsyncReducer'
export * as AsyncActions from './AsyncActions'
export * as AsyncConstants from './AsyncConstants'

export default {
  path     : '/async',
  exact    : true,
  component: AsyncContainer,
}
