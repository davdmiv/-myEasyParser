import React from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col, Spinner, Image } from 'react-bootstrap'

const RuleTested = (data) => {
  console.log('data in RuleTested', data)
  return (
    <Row className="bg-secondary">
      <Col>
        <Row>
          <Col md={4} className="unmarked">
            Протестировано
          </Col>
          <Col md={4} className="marked">
            заглушка
          </Col>
          <Col md={4}>
            <NavLink
              className="link-download"
              onClick={(e) => e.preventDefault()}
              to={'data.html_attachment'}
            >
              html скачать
            </NavLink>
          </Col>
        </Row>
        <Row>
          <p>screenshot</p>
        </Row>
        <Row>
          <Image
            src={'process.env.REACT_APP_API_URL + data.screenshot_attachment'}
            alt="screenshot"
          ></Image>
        </Row>
      </Col>
    </Row>
  )
}

export default RuleTested
