import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from './pages/Login'
import User from './pages/User'
import Registration from './pages/Registration'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/register" component={Registration} />
    <Route exact path="/user" component={User} />
  </Switch>
)

export default Routes
