import React, { useEffect, useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { useParams } from 'react-router'

const PublicRulesShow = () => {
  const { rule, setRules } = useState({})
  const params = useParams()
  useEffect(() => {}, [])
  return (
    <Container className="mt-8">
      <h1>Публичное правило</h1>
      <Row>
        <Col>prop 1</Col>
        <Col>prop 1</Col>
      </Row>
      <Row>
        <Col>prop 2</Col>
        <Col>prop 2</Col>
      </Row>
      <Row>
        <Col>prop 3</Col>
        <Col>prop 3</Col>
      </Row>
      <Row>
        <Col>prop 4</Col>
        <Col>prop 4</Col>
      </Row>
      <Row>
        <Col>prop 5</Col>
        <Col>prop 5</Col>
      </Row>
      <Row>
        <Col>prop 6</Col>
        <Col>prop 6</Col>
      </Row>
      <Row>
        <Col>prop 7</Col>
        <Col>prop 7</Col>
      </Row>
      <Row>
        <Col>prop 8</Col>
        <Col>prop 8</Col>
      </Row>
      <Row>
        <Col>prop 9</Col>
        <Col>prop 9</Col>
      </Row>
      <Row>
        <Col>prop 10</Col>
        <Col>prop 10</Col>
      </Row>
    </Container>
  )
}

export default PublicRulesShow
