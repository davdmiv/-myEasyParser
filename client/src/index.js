import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ChangeNoteStore from './store/ChangeNoteStore'
import RoleStore from './store/RoleStore'
import RuleStore from './store/RuleStore'
import UserStore from './store/UserStore'
import './index.css'

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      role: new RoleStore(),
      rule: new RuleStore(),
      changenote: new ChangeNoteStore(),
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById('root')
)
