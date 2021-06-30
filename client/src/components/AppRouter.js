import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { adminRoutes, userRoutes, publicRoutes } from '../routes'
import { MAIN_ROUTE } from '../utils/consts'
import { Context } from '../index'

const AppRouter = () => {
  const { user } = useContext(Context)

  return (
    <Switch>
      {user.isAdmin &&
        adminRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exect />
        ))}
      {(user.isAuth || user.isAdmin) &&
        userRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exect />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exect />
      ))}
      <Redirect to={MAIN_ROUTE} />
    </Switch>
  )
}

export default AppRouter
