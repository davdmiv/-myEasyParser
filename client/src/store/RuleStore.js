import { makeAutoObservable } from 'mobx'

export default class RuleStore {
  constructor() {
    this._rules = []
    makeAutoObservable(this)
  }

  setRules(rules) {
    this._rules = rules
  }

  get rules() {
    return this._rules
  }
}
