import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'

import getRoutes from '../routes'

class AppContainer extends React.Component {

  static propTypes = {
    layout: PropTypes.object.isRequired,
    store : PropTypes.object.isRequired
  }

  render() {
    const { layout } = this.props

    return (
      <div style={{ height: '100%' }}>
        <Helmet {...layout} />

        {getRoutes()}

      </div>
    )
  }
}

export default AppContainer
