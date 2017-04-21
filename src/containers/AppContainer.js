import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import getRoutes from '../routes'

export const AppContainer = ({ layout }) => (
  <div style={{ height: '100%' }}>
    <Helmet {...layout} />

    {getRoutes()}

  </div>
)

AppContainer.propTypes = {
  layout: PropTypes.object.isRequired,
  store : PropTypes.object.isRequired,
}


export default AppContainer
