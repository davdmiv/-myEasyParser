import React, { useContext, useEffect } from 'react'
import { Table, Container, Row } from 'react-bootstrap'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import { fetchRules } from '../../http/ruleAPI'
import { NavLink, useHistory } from 'react-router-dom'
import { RULES_ROUTE } from '../../utils/consts'

const Rules = () => {
  return <div>Rules</div>
}

export default Rules
