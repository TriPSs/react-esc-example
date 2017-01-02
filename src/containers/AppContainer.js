import React, { PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import Helmet from 'react-helmet'

class AppContainer extends React.Component {
  static propTypes = {
    layout: PropTypes.object,
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    routerKey: PropTypes.number,
    store: PropTypes.object.isRequired
  }

  render () {
    const { layout, history, routes, routerKey, store } = this.props

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Helmet {...layout} />
          <Router history={history} children={routes} key={routerKey} />
        </div>
      </Provider>
    )
  }
}

export default AppContainer
