import React from 'react'
import { Route, Switch } from 'react-router'

import 'styles/core.scss'
import Header from 'components/Header'
import Home from 'routes/Home'
import Counter from 'routes/Counter'
import Async from 'routes/Async'

import classes from './CoreLayout.scss'

export const CoreLayout = () => (
  <div className="container text-center">
    <Header />

    <div className={classes.mainContainer}>
      <Switch>
        <Route {...Home} />
        <Route {...Counter} />
        <Route {...Async} />
      </Switch>
    </div>
  </div>
)

export default CoreLayout
