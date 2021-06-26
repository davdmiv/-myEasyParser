import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import UserRulesListItem from './UserRulesListItem'
// import { observer } from 'mobx-react-lite'

const UserRulesList = (rules) => {
  return (
    <ListGroup className="user-rules-list">
      {rules.rules &&
        rules.rules.map((rule) => (
          <UserRulesListItem key={rule.id} rule={rule} />
        ))}
    </ListGroup>
  )
}

export default UserRulesList
