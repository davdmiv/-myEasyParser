// словарь
const ADMIN = 'admin'
// const EDIT = 'edit'
// const NEW = 'new'
const PUBLIC = 'public'
const ACCOUNT = 'account'
const LOGIN = 'login'
const REGISTRATION = 'registration'
// модели
const USERS = 'users'
const RULES = 'rules'
const CHANGE_NOTES = 'changenotes'
const USER_RULES = 'userrules'

// главная
export const MAIN_ROUTE = '/'
// админка
export const ADMIN_ROUTE = `/${ADMIN}`
// /login
export const LOGIN_ROUTE = `/${LOGIN}`
// /registration
export const REGISTRATION_ROUTE = `/${REGISTRATION}`

//models RESTfull

// /admin/users
export const ADMIN_USERS_ROUTE_INDEX = `/${ADMIN}/${USERS}`
// /admin/users/new
export const ADMIN_USERS_ROUTE_NEW = `/${ADMIN}/${USERS}/new`
// /admin/users/:id
export const ADMIN_USERS_ROUTE_SHOW = `/${ADMIN}/${USERS}/:id`
// /admin/users/:id/edit
export const ADMIN_USERS_ROUTE_EDIT = `/${ADMIN}/${USERS}/:id/edit`

// /admin/rules
export const ADMIN_RULES_ROUTE_INDEX = `/${ADMIN}/${RULES}`
// /admin/rules/new
export const ADMIN_RULES_ROUTE_NEW = `/${ADMIN}/${RULES}/new`
// /admin/rules/:id
export const ADMIN_RULES_ROUTE_SHOW = `/${ADMIN}/${RULES}/:id`
// /admin/rules/:id/edit
export const ADMIN_RULES_ROUTE_EDIT = `/${ADMIN}/${RULES}/:id/edit`

// /admin/changenotes
export const ADMIN_CHANGE_NOTES_ROUTE_INDEX = `/${ADMIN}/${CHANGE_NOTES}`
// /admin/changenotes/:id
export const ADMIN_CHANGE_NOTES_ROUTE_SHOW = `/${ADMIN}/${CHANGE_NOTES}/:id`

// /admin/userrules
export const ADMIN_USER_RULES_ROUTE_INDEX = `/${ADMIN}/${USER_RULES}`
// /admin/userrules/new
export const ADMIN_USER_RULES_ROUTE_NEW = `/${ADMIN}/${USER_RULES}/new`
// /admin/userrules/edit
export const ADMIN_USER_RULES_ROUTE_EDIT = `/${ADMIN}/${USER_RULES}/edit`

// /public/rules
export const PUBLIC_RULES_ROUTE_INDEX = `/${PUBLIC}/${RULES}`
// /public/rules/:id
export const PUBLIC_RULES_ROUTE_SHOW = `/${PUBLIC}/${RULES}/:id`

// /rules
export const RULES_ROUTE_INDEX = `/${RULES}`
// /rules/new
export const RULES_ROUTE_NEW = `/${RULES}/new`
// /rules/:id
export const RULES_ROUTE_SHOW = `/${RULES}/:id`
// /rules/:id/edit
export const RULES_ROUTE_EDIT = `/${RULES}/:id/edit`

// /changenotes
export const CHANGE_NOTES_ROUTE_INDEX = `/${CHANGE_NOTES}`
// /changenotes/:id
export const CHANGE_NOTES_ROUTE_SHOW = `/${CHANGE_NOTES}/:id`

// /users/:id
export const USERS_ROUTE_SHOW = `/${USERS}/:id`
// /users/:id/edit
export const USERS_ROUTE_EDIT = `/${USERS}/:id/edit`
