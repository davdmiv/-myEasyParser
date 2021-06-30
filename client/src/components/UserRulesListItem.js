import React, { useContext } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { Row, Col } from 'react-bootstrap'
import { NavLink, useHistory } from 'react-router-dom'
import { RULES_ROUTE } from '../utils/consts'
import { Context } from '../../src/index'

const dataFormate = (data) => {
  return data
    ? data
        .replace(/...\..*/g, '')
        .replaceAll(/(-)/g, '.')
        .replace(/(T0)|(T)/g, ' ')
        .replaceAll(/(-)/g, '.')
    : ''
}

const UserRulesListItem = (rule) => {
  const history = useHistory()
  const { user } = useContext(Context)

  console.log(
    rule.rule.owner.email,
    user.user.email,
    rule.rule.owner.email === user.user.email
  )
  console.log('rule', rule)
  return (
    // <Row>
    <ListGroup.Item
      className={
        rule.rule.owner.email === user.user.email
          ? 'list-rules'
          : 'list-rules bg-no-owner-color'
      }
    >
      <Row>
        <Col md={5}>
          <Row>
            {rule.rule.owner.email === user.user.email ? (
              <Col md={8}>{rule.rule.name}</Col>
            ) : (
              <Col md={8}>
                <Row>
                  <Col md={7}>{rule.rule.name}</Col>
                  <Col md={5} className="text-danger">
                    {rule.rule.owner.email}
                  </Col>
                </Row>
              </Col>
            )}
            <Col md={4} className="text-center">
              {rule.rule.activate_status ? 'Активно' : 'Выключено'}
            </Col>
          </Row>
          <Row>
            <Col>{rule.rule.url}</Col>
          </Row>
        </Col>
        <Col md={2}>
          <Row className="justify-content-center text-center">
            {dataFormate(rule.rule.last_check)}
          </Row>
          <Row className="justify-content-center text-center">
            {dataFormate(rule.rule.page_changed)}
          </Row>
        </Col>
        <Col md={2} className="m-auto">
          <Row className="justify-content-center text-center">
            {dataFormate(rule.rule.frequency)}
          </Row>
        </Col>
        <Col md={2} className="m-auto">
          <Row className="justify-content-center text-center">
            выч.след.пров
          </Row>
        </Col>
        <Col md={1} className="m-auto">
          <Row>
            <NavLink
              // className="link-to-auth"
              className="link-icon-field alert-primary"
              onClick={() => history.push(RULES_ROUTE + '/' + rule.rule.id)}
              to={RULES_ROUTE + '/' + rule.rule.id}
            >
              <i className="fas fa-eye"></i>
            </NavLink>
            <NavLink
              // className="link-to-auth"
              className="link-icon-field alert-warning"
              onClick={() =>
                history.push(RULES_ROUTE + '/' + rule.rule.id + '/edit')
              }
              to={RULES_ROUTE + '/' + rule.rule.id + '/edit'}
            >
              <i className="fas fa-edit"></i>
            </NavLink>
            <NavLink
              // className="link-to-auth"
              className="link-icon-field alert-danger"
              onClick={() => history.push(RULES_ROUTE + '/' + rule.rule.id)}
              to={RULES_ROUTE + '/' + rule.rule.id}
            >
              <i className="fas fa-trash-alt"></i>
            </NavLink>
          </Row>
        </Col>
      </Row>
    </ListGroup.Item>
    // </Row>
  )
}

export default UserRulesListItem
