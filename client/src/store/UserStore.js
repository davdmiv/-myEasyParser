import { makeAutoObservable } from 'mobx'

export default class UserStore {
  constructor() {
    this._isAdmin = false
    this._isAuth = false
    this._user = {}
    this._email = ''
    makeAutoObservable(this)
  }

  setIsAuth(bool) {
    this._isAuth = bool
  }
  setIsAdmin(bool) {
    this._isAdmin = bool
  }
  setUser(user) {
    this._user = user
    this._email = user.email
  }

  get email() {
    return this._email
  }

  get isAuth() {
    return this._isAuth
  }

  get isAdmin() {
    return this._isAdmin
  }

  get user() {
    return this._user
  }
}
