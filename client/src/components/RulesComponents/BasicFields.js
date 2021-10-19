import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'

const BasicFields = ({ name, url }) => {
  return (
    <>
      <Form.Group controlId="rulesForm.name">
        <Form.Label>Наименование</Form.Label>
        <Form.Control
          value={name}
          type="text"
          placeholder="введите наименование вашего правила"
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="rulesForm.url">
        <Form.Label>URL</Form.Label>
        <Form.Control
          value={url}
          type="text"
          placeholder="введите url адрес по которому будет осуществляться проверка изменений"
          onChange={(e) => setUrl(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="rulesForm.shrub_rule">
        <Form.Label>Правило куста DOM</Form.Label>
        <Form.Control
          value={shrubRule}
          type="text"
          placeholder="введите наименование css класса, по которому будут отслеживаться изменения на странице"
          onChange={(e) => setShrubRule(e.target.value)}
        />
      </Form.Group>

      <Form.Group as={Row} controlId="rulesForm.page_type">
        <Form.Label column sm="2">
          Тип страницы
        </Form.Label>
        <Col sm="3">
          <Form.Control
            as="select"
            value={pageType}
            onChange={(e) => {
              setPageType(PAGE_TYPES.find((type) => type === e.target.value))
            }}
          >
            <option key={PAGE_TYPES[0]} value={PAGE_TYPES[0]}>
              статическая
            </option>
            <option key={PAGE_TYPES[1]} value={PAGE_TYPES[1]}>
              динамическая
            </option>
          </Form.Control>
        </Col>
      </Form.Group>
    </>
  )
}

export default BasicFields
