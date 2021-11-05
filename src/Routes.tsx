import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './page/Home'
import ProductCard from './page/ProductCard'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/products/:id" component={ProductCard} />
  </Switch>
)

export default Routes
