import { makeAutoObservable } from 'mobx'

export default class RuleStore {
  constructor() {
    this._rules = []
    this._rule = {}
    makeAutoObservable(this)
  }

  setRules(rules) {
    this._rules = rules
  }
  setRule(rule) {
    this._rule = rule
  }

  get rules() {
    return this._rules
  }

  get rule() {
    return this._rule
  }
}
