import React, { PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import Helmet from 'react-helmet'
import * as Storage from 'react-esc/Storage'

class AppContainer extends React.Component {

  static propTypes = {
    layout   : PropTypes.object,
    history  : PropTypes.object.isRequired,
    routes   : PropTypes.object.isRequired,
    routerKey: PropTypes.number,
    store    : PropTypes.object.isRequired
  }

  render() {
    const {layout, history, routes, routerKey, store} = this.props

    // Checks if the Cookie storage is available, if not it will create it
    Storage.check()

    return (
      <Provider store={store}>
        <div style={{height: '100%'}}>
          <Helmet {...layout} />
          <Router history={history} children={routes} key={routerKey}/>
        </div>
      </Provider>
    )
  }
}

export default AppContainer
