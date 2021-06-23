const ADMIN = 'admin'
const PUBLIC = 'public'
// const ACCOUNT = 'account'
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
export const ADMIN_USERS_ROUTE = `/${ADMIN}/${USERS}`

// /admin/rules
export const ADMIN_RULES_ROUTE = `/${ADMIN}/${RULES}`

// /admin/changenotes
export const ADMIN_CHANGE_NOTES_ROUTE = `/${ADMIN}/${CHANGE_NOTES}`

// /admin/userrules
export const ADMIN_USER_RULES_ROUTE = `/${ADMIN}/${USER_RULES}`

// /public/rules
export const PUBLIC_RULES_ROUTE = `/${PUBLIC}/${RULES}`

// /rules
export const RULES_ROUTE = `/${RULES}`

// /changenotes
export const CHANGE_NOTES_ROUTE = `/${CHANGE_NOTES}`

// /users/:id
export const USERS_ROUTE = `/${USERS}`
