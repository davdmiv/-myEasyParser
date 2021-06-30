import React, { useContext, useEffect, useState } from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  FormControl,
  Spinner,
} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import { fetchRule } from '../../http/ruleAPI'
// import { NavLink, useHistory } from 'react-router-dom'
// import { RULES_ROUTE } from '../../utils/consts'
import { useParams } from 'react-router-dom'

// activate_cnt: 0
// activate_status: true
// changenotes: (3) [{…}, {…}, {…}]
// createdAt: "2021-06-21T11:15:54.157Z"
// description: ""
// duration: null
// frequency: "2021-06-21T11:15:54.157Z"
// id: 6
// last_check: null
// name: "yandex-parser 6"
// page_changed: null
// page_type: "static"
// public_status: true
// shrub_cache: ""
// shrub_rule: "div"
// updatedAt: "2021-06-21T11:15:54.157Z"
// url: "http://www.yandex.ru/6"
// user_id: 3

const Rules = observer(() => {
  // если params = {} - значить "/new", если {id} - значит "/:id/edit"
  const params = useParams()
  console.log('params', params)
  const PAGE_TYPES = ['static', 'dynamic']
  const { rule } = useContext(Context)
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [shrubRule, setShrubRule] = useState('')
  const [pageType, setPageType] = useState(PAGE_TYPES[0])
  // const [frequency, setFrequency] = useState('')
  const [frDays, setFrDays] = useState(0)
  const [frHr, setFrHr] = useState(0)
  const [frMin, setFrMin] = useState(0)
  const [description, setDescription] = useState('')
  const [subInfoVisibility, setSubInfoVisibility] = useState(false)

  const [loading, setLoading] = useState(true)

  function formInitForEdit(data) {
    setName(data.rule.name)
    setUrl(data.rule.url)
    setPageType(data.rule.page_type)
    setShrubRule(data.rule.shrub_rule)
  }

  useEffect(() => {
    if (params.id) {
      fetchRule(params.id)
        .then((data) => {
          rule.setRule(data)
          formInitForEdit(data)
        })
        .catch((e) => alert(e))
        .finally(() => setLoading(false))
    } else {
      rule.setRule({})
      setLoading(false)
    }
  }, [])

  if (loading) {
    return <Spinner animation={'grow'} />
  }

  // const = useState()

  const testBtnClick = (e) => {
    e.preventDefault()

    useEffect(() => {})
    // setSubInfoVisibility(true)
  }

  return (
    <Container>
      <Row className="rule-index-m">
        <Col>
          <h1>Новое правило</h1>
        </Col>
      </Row>

      <Form>
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

        <Row className="mt-2 mb-5">
          <Button className="m-auto" type="submit" onClick={testBtnClick}>
            Тестировать
          </Button>
        </Row>

        {subInfoVisibility && (
          <div>
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

            <Form.Group>
              <Form.Label>With textarea</Form.Label>
              <FormControl
                as="textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <hr className="hr-seporator" />
            <Row>
              <Col>
                <Row className="justify-content-center">
                  <Col md={3} className="unmarked">
                    Время последней проверки
                  </Col>
                  <Col md={2} className="marked">
                    заглушка
                  </Col>
                  <Col md={4} className="unmarked">
                    Длительность последней проверки
                  </Col>
                  <Col md={2} className="marked">
                    заглушка
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col md={3} className="unmarked">
                    Время последнего изменения
                  </Col>
                  <Col md={2} className="marked">
                    заглушка
                  </Col>
                  <Col md={4} className="unmarked">
                    Количество запусков
                  </Col>
                  <Col md={2} className="marked">
                    заглушка
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="mt-4 mb-5">
              <Button className="m-auto" type="submit">
                Сохранить изменения
              </Button>
            </Row>
          </div>
        )}
      </Form>
    </Container>
  )
})

export default Rules
