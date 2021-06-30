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
  // /admin
  ADMIN_USERS_ROUTE, // /admin/users
  ADMIN_RULES_ROUTE, // /admin/rules
  ADMIN_CHANGE_NOTES_ROUTE, // /admin/changenotes
  ADMIN_USER_RULES_ROUTE, // /admin/userrules
  // /public
  PUBLIC_RULES_ROUTE, // /public/rules
  // /auth
  RULES_ROUTE, // /rules
  CHANGE_NOTES_ROUTE, // /changenotes
  USERS_ROUTE, // /users
} from './utils/consts'

export const adminRoutes = [
  // /admin/users
  {
    // show
    path: ADMIN_USERS_ROUTE + '/:id',
    Component: AdminUsersShow,
  },
  {
    // index
    path: ADMIN_USERS_ROUTE,
    Component: AdminUsersIndex,
  },
  {
    // new
    path: ADMIN_USERS_ROUTE + '/new',
    Component: AdminUsers,
  },
  {
    // edit
    path: ADMIN_USERS_ROUTE + '/:id/edit',
    Component: AdminUsers,
  },
  // /admin/rules
  {
    // show
    path: ADMIN_RULES_ROUTE + '/:id',
    Component: AdminRulesShow,
  },
  {
    // index
    path: ADMIN_RULES_ROUTE,
    Component: AdminRulesIndex,
  },
  {
    // new
    path: ADMIN_RULES_ROUTE + '/new',
    Component: AdminRules,
  },
  {
    // edit
    path: ADMIN_RULES_ROUTE + '/:id/edit',
    Component: AdminRules,
  },
  // /admin/changenotes
  {
    // show
    path: ADMIN_CHANGE_NOTES_ROUTE + '/:id',
    Component: AdminChangeNotesShow,
  },
  {
    // index
    path: ADMIN_CHANGE_NOTES_ROUTE,
    Component: AdminChangeNotesIndex,
  },
  // /admin/userrules
  {
    // index
    path: ADMIN_USER_RULES_ROUTE,
    Component: AdminUserRulesIndex,
  },
  {
    // new
    path: ADMIN_USER_RULES_ROUTE + '/new',
    Component: AdminUserRules,
  },
  {
    // edit
    path: ADMIN_USER_RULES_ROUTE + '/edit',
    Component: AdminUserRules,
  },
]

export const userRoutes = [
  // /rules
  {
    // new
    path: RULES_ROUTE + '/new',
    Component: Rules,
  },
  {
    // edit
    path: RULES_ROUTE + '/:id/edit',
    Component: Rules,
  },
  {
    // show
    path: RULES_ROUTE + '/:id',
    Component: RulesShow,
  },
  {
    // index
    path: RULES_ROUTE,
    Component: RulesIndex,
  },
  // /changenotes
  {
    // show
    path: CHANGE_NOTES_ROUTE + '/:id',
    Component: ChangeNotesShow,
  },
  {
    // index
    path: CHANGE_NOTES_ROUTE,
    Component: ChangeNotesIndex,
  },
  // /users
  {
    // show
    path: USERS_ROUTE + '/:id',
    Component: UsersShow,
  },
  {
    // edit
    path: USERS_ROUTE + '/:id/edit',
    Component: Users,
  },
]

export const publicRoutes = [
  // /public/rules
  {
    // show
    path: PUBLIC_RULES_ROUTE + '/:id',
    Component: PublicRulesShow,
  },
  {
    // index
    path: PUBLIC_RULES_ROUTE,
    Component: PublicRulesIndex,
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
