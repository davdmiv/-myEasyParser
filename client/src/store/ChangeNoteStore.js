import { makeAutoObservable } from 'mobx'

export default class ChangeNoteStore {
  constructor() {
    this._changenotes = []
    makeAutoObservable(this)
  }

  setChangenotes(changenotes) {
    this._changenotes = changenotes
  }

  get changenotes() {
    return this._changenotes
  }
}
