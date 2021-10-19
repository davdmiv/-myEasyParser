import React, { useEffect, useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { useParams } from 'react-router'
import { fetchPublicRule } from '../../http/ruleAPI'
import PublicChangeNotesTable from '../../components/PublicChangeNotesTable'

const PublicRulesShow = () => {
  const [publicRule, setPublicRule] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetchPublicRule(id).then((data) => setPublicRule(data))
  }, [])

  /*
  name: "google-parser"
  url: "http://www.google.com"
  shrub_rule: "div"
  frequency: "2021-06-21T11:15:54.157Z"
  page_type: "static"
  description: ""
  last_check: null
  duration: null
  page_changed: null
  activate_cnt: 0

  activate_status: true
  changenotes: (2) [{…}, {…}]
  createdAt: "2021-06-21T11:15:54.157Z"
  id: 1
  public_status: true
  shrub_cache: ""
  updatedAt: "2021-06-21T11:15:54.157Z"
  user_id: 1
*/
  return (
    <Container className="mt-8">
      <h4 className="rule-padding">Правило {publicRule.name}</h4>
      <Row>
        <Col md={3} className="unmarked">
          URL
        </Col>
        <Col className="marked">{publicRule.url}</Col>
      </Row>
      <Row>
        <Col md={3} className="unmarked">
          Правило куста DOM
        </Col>
        <Col className="marked">{publicRule.shrub_rule}</Col>
      </Row>
      <Row>
        <Col md={3} className="unmarked">
          Частота обновления
        </Col>
        <Col md={3} className="marked">
          {publicRule.frequency}
        </Col>
      </Row>
      <Row>
        <Col md={3} className="unmarked">
          Тип страницы
        </Col>
        <Col md={2} className="marked">
          {publicRule.page_type}
        </Col>
      </Row>
      <Row>
        <Col md={2} className="unmarked">
          Описание
        </Col>
        <Col className="marked">{publicRule.description}</Col>
      </Row>
      <hr className="hr-seporator" />
      <Row>
        <Col>
          <Row className="justify-content-center">
            <Col md={3} className="unmarked">
              Время последней проверки
            </Col>
            <Col md={2} className="marked">
              {publicRule.last_check}
            </Col>
            <Col md={4} className="unmarked">
              Длительность последней проверки
            </Col>
            <Col md={2} className="marked">
              {publicRule.duration ? publicRule.duration : 'нет данных'}
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={3} className="unmarked">
              Время последнего изменения
            </Col>
            <Col md={2} className="marked">
              {publicRule.page_changed}
            </Col>
            <Col md={4} className="unmarked">
              Количество запусков
            </Col>
            <Col md={2} className="marked">
              {publicRule.activate_cnt}
            </Col>
          </Row>
        </Col>
      </Row>
      <h4 className="rule-changenote-padding">Последние события по правилу</h4>
      <PublicChangeNotesTable changenotes={publicRule.changenotes} />
    </Container>
  )
}

export default PublicRulesShow
