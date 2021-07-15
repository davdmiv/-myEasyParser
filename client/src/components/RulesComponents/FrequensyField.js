import React, { useState } from 'react'
import { Row, Col, Form } from 'react-bootstrap'

const FrequensyField = () => {
  const [frDays, setFrDays] = useState(0)
  const [frHr, setFrHr] = useState(0)
  const [frMin, setFrMin] = useState(0)

  const createFrequensy = (day, hr, min) => {
    const dDay = day === 0 ? 1 : day
    const dHr = day === 1 ? hr + 24 : hr
    const dMin = min

    // get next case
    // <время следующего срабатывания> = new Date(Date.parse(<время последнего срабатывания>) + Date.parse(deltaTime))
    return new Date(1970, 0, dDay, dHr, dMin, 0)
  }

  return (
    <Form.Group as={Row} controlId="rulesForm.frequency">
      <Form.Label column sm="2" className="mt-auto">
        Частота обновления
      </Form.Label>
      <Col sm="1">
        <Row className="justify-content-center">
          <Form.Label>Дни</Form.Label>
          <Form.Control
            as="select"
            value={frDays}
            className="rules-dt-selectors"
            onChange={(elem) => setFrDays(elem.target.value)}
          >
            {[...Array(31).keys()].map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </Form.Control>
        </Row>
      </Col>
      <Col sm="1">
        <Row className="justify-content-center">
          <Form.Label>Часы</Form.Label>
          <Form.Control
            as="select"
            value={frHr}
            className="rules-dt-selectors"
            onChange={(elem) => setFrHr(elem.target.value)}
          >
            {[...Array(24).keys()].map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </Form.Control>
        </Row>
      </Col>
      <Col sm="1">
        <Row className="justify-content-center">
          <Form.Label>Минуты</Form.Label>
          <Form.Control
            as="select"
            value={frMin}
            className="rules-dt-selectors"
            onChange={(elem) => setFrMin(elem.target.value)}
          >
            {[...Array(60).keys()].map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </Form.Control>
        </Row>
      </Col>
    </Form.Group>
  )
}
export default FrequensyField
