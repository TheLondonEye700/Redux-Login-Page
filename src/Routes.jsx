import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from './pages/Login'
import User from './pages/User'
import Registration from './pages/Registration'
import AuthenticatedRoute from './component/AutheticatedRoute'

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Registration} />
    <AuthenticatedRoute exact path="/user" component={User}/>
	
    <AuthenticatedRoute path="/" component={User}/>
  </Switch>
)

export default Routes
