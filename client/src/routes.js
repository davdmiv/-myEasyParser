import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Account from './pages/Account'
import Main from './pages/Main'
import Role from './pages/Role'
import Rule from './pages/Rule'
import User from './pages/User'
import ChangeNote from './pages/ChangeNote'
import {
  ADMIN_ROUTE,
  USERS_ROUTE,
  RULES_ROUTE,
  CHANGE_NOTES_ROUTE,
  ROLES_ROUTE,
  ACCOUNT_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  MAIN_ROUTE,
} from './utils/consts'

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: USERS_ROUTE,
    Component: User,
  },
  {
    path: RULES_ROUTE,
    Component: Rule,
  },
  {
    path: CHANGE_NOTES_ROUTE,
    Component: ChangeNote,
  },
  {
    path: ROLES_ROUTE,
    Component: Role,
  },
  {
    path: ACCOUNT_ROUTE,
    Component: Account,
  },
]

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
]
