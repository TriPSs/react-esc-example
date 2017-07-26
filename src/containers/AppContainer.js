import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'react-jss'
import Helmet from 'react-helmet'

import getRoutes from '../routes'

const theme = {
  colorPrimary: 'rgb(25, 200, 25)'
}

export const AppContainer = ({ layout }) => (
  <ThemeProvider theme={theme}>
    <div style={{ height: '100%' }}>
      <Helmet {...layout} />

      {getRoutes()}

    </div>
  </ThemeProvider>
)

AppContainer.propTypes = {
  layout: PropTypes.object.isRequired,
  store : PropTypes.object.isRequired,
}


export default AppContainer
