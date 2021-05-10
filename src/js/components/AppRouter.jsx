import React from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';
import publicRoutes from '../router';
import {HOME_ROUTE} from '../utils/const'

const AppRouter = () => {
  return (
    <Switch>
      {publicRoutes.map(({path, Component}) => <Route key={path} path={path} component={Component} exact/>)}
      <Redirect to={HOME_ROUTE}/>
    </Switch>
  )
}

export default AppRouter