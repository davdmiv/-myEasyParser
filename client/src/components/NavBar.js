import React, { useContext } from 'react'
import { Context } from '../index'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { NavLink, useHistory } from 'react-router-dom'
import {
  LOGIN_ROUTE,
  MAIN_ROUTE,
  REGISTRATION_ROUTE,
  PUBLIC_RULES_ROUTE,
  RULES_ROUTE,
  CHANGE_NOTES_ROUTE,
} from '../utils/consts'
import { observer } from 'mobx-react-lite'

const NavBar = observer(() => {
  const { user } = useContext(Context)
  const history = useHistory()

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
    localStorage.removeItem('token')
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink className="link-to-main navbar-link" to={MAIN_ROUTE}>
          Parser
        </NavLink>
        <Nav className="mr-auto my-nav-style">
          <Nav.Link href={PUBLIC_RULES_ROUTE}>Публичные правила</Nav.Link>
          {user.isAuth && <Nav.Link href={RULES_ROUTE}>Мои правила</Nav.Link>}
          {user.isAuth && (
            <Nav.Link href={CHANGE_NOTES_ROUTE}>События</Nav.Link>
          )}
        </Nav>
        {user.isAuth ? (
          <NavDropdown
            title={user.email}
            id="basic-nav-dropdown"
            className="text-white"
          >
            <NavDropdown.Item href="#action/3.1" onClick={() => logOut()}>
              Выйти
            </NavDropdown.Item>
          </NavDropdown>
        ) : (
          <div className="auth">
            <NavLink
              className="link-to-auth navbar-link"
              to={REGISTRATION_ROUTE}
            >
              Зарегестрироваться
            </NavLink>
            <NavLink
              className="link-to-auth navbar-link"
              onClick={() => history.push(LOGIN_ROUTE)}
              to={LOGIN_ROUTE}
            >
              Войти
            </NavLink>
          </div>
        )}
      </Container>
    </Navbar>
  )
})

export default NavBar
