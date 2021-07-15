import React from 'react'
import { Row, Col } from 'react-bootstrap'

const RulesSubfields = (props) => {
  const { lastCheck, duration, pageChanged, activateCnt } = props
  console.log('props', props)
  return (
    <Row>
      <Col>
        <Row className="justify-content-center">
          <Col md={3} className="unmarked">
            Время последней проверки
          </Col>
          <Col md={2} className="marked">
            {lastCheck}
          </Col>
          <Col md={4} className="unmarked">
            Длительность последней проверки
          </Col>
          <Col md={2} className="marked">
            {duration}
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={3} className="unmarked">
            Время последнего изменения
          </Col>
          <Col md={2} className="marked">
            {pageChanged}
          </Col>
          <Col md={4} className="unmarked">
            Количество запусков
          </Col>
          <Col md={2} className="marked">
            {activateCnt}
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default RulesSubfields
