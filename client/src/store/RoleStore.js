import { makeAutoObservable } from 'mobx'

export default class RoleStore {
  constructor() {
    this._roles = [
      {
        id: 1,
        name: 'ADMIN',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        name: 'USER',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]
    makeAutoObservable(this)
  }

  setRoles(roles) {
    this._roles = roles
  }

  get roles() {
    return this._roles
  }
}
