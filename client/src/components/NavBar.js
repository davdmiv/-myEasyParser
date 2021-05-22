import React, { useContext } from 'react'
import { Context } from '../index'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { NavLink } from 'react-router-dom'
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'

const NavBar = observer(() => {
  const { user } = useContext(Context)
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink className="link-to-main" to={MAIN_ROUTE}>
          Parser
        </NavLink>
        {user.isAuth ? (
          <Nav className="mr-auto my-nav-style">
            <Nav.Link href="#home">Пользователи</Nav.Link>
            <Nav.Link href="#pricing">Роли</Nav.Link>
            <Nav.Link href="#features">Правила</Nav.Link>
            <Nav.Link href="#pricing">События</Nav.Link>
          </Nav>
        ) : (
          <Nav className="mr-auto my-nav-style">
            <Nav.Link href="#features">Правила</Nav.Link>
            <Nav.Link href="#features">События</Nav.Link>
          </Nav>
        )}
        {user.isAuth ? (
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item
              href="#action/3.1"
              onClick={(e) => {
                e.preventDefault()
                user.setIsAuth(false)
              }}
            >
              Выйти
            </NavDropdown.Item>
          </NavDropdown>
        ) : (
          <div className="auth">
            <NavLink className="link-to-auth" to={REGISTRATION_ROUTE}>
              Зарегестрироваться
            </NavLink>
            <NavLink
              className="link-to-auth"
              onClick={(e) => {
                e.preventDefault()
                user.setIsAuth(true)
              }}
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
