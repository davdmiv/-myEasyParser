import { makeAutoObservable } from 'mobx'

export default class ChangeNoteStore {
  constructor() {
    this._changenotes = [
      {
        id: 1,
        screenshot_attachment: '/www/amaizing_file1.png',
        html_attachment: '/www/amaizing_html_file1.html',
        check_datetime: new Date(),
        rule_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        screenshot_attachment: '/www/amaizing_file2.png',
        html_attachment: '/www/amaizing_html_file2.html',
        check_datetime: new Date(),
        rule_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]
    makeAutoObservable(this)
  }

  setChangenotes(changenotes) {
    this._changenotes = changenotes
  }

  get changenotes() {
    return this._changenotes
  }
}
