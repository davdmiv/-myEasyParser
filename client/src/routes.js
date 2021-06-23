import AdminChangeNotesIndex from './pages/admin/changenotes/AdminChangeNotesIndex'
import AdminChangeNotesShow from './pages/admin/changenotes/AdminChangeNotesShow'

import AdminRules from './pages/admin/rules/AdminRules'
import AdminRulesIndex from './pages/admin/rules/AdminRulesIndex'
import AdminRulesShow from './pages/admin/rules/AdminRulesShow'

import AdminUserRules from './pages/admin/userrules/AdminUserRules'
import AdminUserRulesIndex from './pages/admin/userrules/AdminUserRulesIndex'

import AdminUsers from './pages/admin/users/AdminUsers'
import AdminUsersIndex from './pages/admin/users/AdminUsersIndex'
import AdminUsersShow from './pages/admin/users/AdminUsersShow'

import ChangeNotesIndex from './pages/changenotes/ChangeNotesIndex'
import ChangeNotesShow from './pages/changenotes/ChangeNotesShow'

import Main from './pages/public/Main'
import Auth from './pages/public/Auth'

import PublicRulesIndex from './pages/public/PublicRulesIndex'
import PublicRulesShow from './pages/public/PublicRulesShow'

import Rules from './pages/rules/Rules'
import RulesIndex from './pages/rules/RulesIndex'
import RulesShow from './pages/rules/RulesShow'

import Users from './pages/users/Users'
import UsersShow from './pages/users/UsersShow'

import {
  MAIN_ROUTE,
  // ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  // /admin/users
  ADMIN_USERS_ROUTE_INDEX,
  ADMIN_USERS_ROUTE_NEW,
  ADMIN_USERS_ROUTE_SHOW,
  ADMIN_USERS_ROUTE_EDIT,
  // /admin/rules
  ADMIN_RULES_ROUTE_INDEX,
  ADMIN_RULES_ROUTE_NEW,
  ADMIN_RULES_ROUTE_SHOW,
  ADMIN_RULES_ROUTE_EDIT,
  // /admin/changenotes
  ADMIN_CHANGE_NOTES_ROUTE_INDEX,
  ADMIN_CHANGE_NOTES_ROUTE_SHOW,
  // /admin/userrules
  ADMIN_USER_RULES_ROUTE_INDEX,
  ADMIN_USER_RULES_ROUTE_NEW,
  ADMIN_USER_RULES_ROUTE_EDIT,
  // /public/rules
  PUBLIC_RULES_ROUTE_INDEX,
  PUBLIC_RULES_ROUTE_SHOW,
  // /rules
  RULES_ROUTE_INDEX,
  RULES_ROUTE_NEW,
  RULES_ROUTE_SHOW,
  RULES_ROUTE_EDIT,
  // /changenotes
  CHANGE_NOTES_ROUTE_INDEX,
  CHANGE_NOTES_ROUTE_SHOW,
  // /users
  USERS_ROUTE_SHOW,
  USERS_ROUTE_EDIT,
} from './utils/consts'

export const adminRoutes = [
  // /admin/users
  {
    path: ADMIN_USERS_ROUTE_INDEX,
    Component: AdminUsersIndex,
  },
  {
    path: ADMIN_USERS_ROUTE_SHOW,
    Component: AdminUsersShow,
  },
  {
    path: ADMIN_USERS_ROUTE_NEW,
    Component: AdminUsers,
  },
  {
    path: ADMIN_USERS_ROUTE_EDIT,
    Component: AdminUsers,
  },
  // /admin/rules
  {
    path: ADMIN_RULES_ROUTE_INDEX,
    Component: AdminRulesIndex,
  },
  {
    path: ADMIN_RULES_ROUTE_NEW,
    Component: AdminRules,
  },
  {
    path: ADMIN_RULES_ROUTE_SHOW,
    Component: AdminRulesShow,
  },
  {
    path: ADMIN_RULES_ROUTE_EDIT,
    Component: AdminRules,
  },
  // /admin/changenotes
  {
    path: ADMIN_CHANGE_NOTES_ROUTE_INDEX,
    Component: AdminChangeNotesIndex,
  },
  {
    path: ADMIN_CHANGE_NOTES_ROUTE_SHOW,
    Component: AdminChangeNotesShow,
  },
  // /admin/userrules
  {
    path: ADMIN_USER_RULES_ROUTE_INDEX,
    Component: AdminUserRulesIndex,
  },
  {
    path: ADMIN_USER_RULES_ROUTE_NEW,
    Component: AdminUserRules,
  },
  {
    path: ADMIN_USER_RULES_ROUTE_EDIT,
    Component: AdminUserRules,
  },
]

export const userRoutes = [
  // /rules
  {
    path: RULES_ROUTE_INDEX,
    Component: RulesIndex,
  },
  {
    path: RULES_ROUTE_NEW,
    Component: Rules,
  },
  {
    path: RULES_ROUTE_SHOW,
    Component: RulesShow,
  },
  {
    path: RULES_ROUTE_EDIT,
    Component: Rules,
  },
  // /changenotes
  {
    path: CHANGE_NOTES_ROUTE_INDEX,
    Component: ChangeNotesIndex,
  },
  {
    path: CHANGE_NOTES_ROUTE_SHOW,
    Component: ChangeNotesShow,
  },
  // /users
  {
    path: USERS_ROUTE_SHOW,
    Component: UsersShow,
  },
  {
    path: USERS_ROUTE_EDIT,
    Component: Users,
  },
]

export const publicRoutes = [
  // /public/rules
  {
    path: PUBLIC_RULES_ROUTE_INDEX,
    Component: PublicRulesIndex,
  },
  {
    path: PUBLIC_RULES_ROUTE_SHOW,
    Component: PublicRulesShow,
  },
  // /login
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  // /reg
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  // /
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
]
