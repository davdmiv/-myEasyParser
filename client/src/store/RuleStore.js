import { makeAutoObservable } from 'mobx'

export default class RuleStore {
  constructor() {
    this._rules = [
      {
        id: 1,
        name: 'google-parser',
        url: 'http:\\\\www.google.com',
        shrub_rule: 'div',
        shrub_cache: '',
        frequency: new Date(),
        page_type: 'static',
        page_changed: null,
        last_check: null,
        duration: null,
        status: false,
        description: '',
        activate_cnt: 0,
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        name: 'yandex-parser',
        url: 'http:\\\\www.yandex.ru',
        shrub_rule: 'div',
        shrub_cache: '',
        frequency: new Date(),
        page_type: 'static',
        page_changed: null,
        last_check: null,
        duration: null,
        status: false,
        description: '',
        activate_cnt: 0,
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        name: 'google-parser',
        url: 'http:\\\\www.google.com',
        shrub_rule: 'div',
        shrub_cache: '',
        frequency: new Date(),
        page_type: 'static',
        page_changed: null,
        last_check: null,
        duration: null,
        status: true,
        description: '',
        activate_cnt: 0,
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        name: 'yandex-parser',
        url: 'http:\\\\www.yandex.ru',
        shrub_rule: 'div',
        shrub_cache: '',
        frequency: new Date(),
        page_type: 'static',
        page_changed: null,
        last_check: null,
        duration: null,
        status: true,
        description: '',
        activate_cnt: 0,
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]
    makeAutoObservable(this)
  }

  setRules(rules) {
    this._rules = rules
  }

  get rules() {
    return this._rules
  }
}
