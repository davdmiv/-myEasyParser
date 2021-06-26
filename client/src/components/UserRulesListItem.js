import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { Row, Col } from 'react-bootstrap'

const UserRulesListItem = (rule) => {
  console.log('rule', rule)
  return (
    // <Row>
    <ListGroup.Item>
      <Row>
        <Col md={5}>
          <Row>
            <Col md={8}>{rule.rule.name}</Col>
            <Col md={4}>Статус</Col>
          </Row>
          <Row>
            <Col>URL</Col>
          </Row>
        </Col>
        <Col md={2}>
          <Row>Дата</Row>
          <Row>Дата</Row>
        </Col>
        <Col md={2}>
          <Row>Частота проверки</Row>
        </Col>
        <Col md={2}>
          <Row>след проверка</Row>
        </Col>
        <Col md={1}>
          <Row>См/ Ред/ Уд</Row>
        </Col>
      </Row>
    </ListGroup.Item>
    // </Row>
  )
}

export default UserRulesListItem
