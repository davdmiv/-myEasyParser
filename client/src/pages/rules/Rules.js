import React, { useContext, useEffect, useState } from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  FormControl,
  Form,
  Spinner,
} from 'react-bootstrap'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import { fetchRule, testRule, createRule } from '../../http/ruleAPI'
import { useParams } from 'react-router-dom'
import AlertComponent from '../../components/AlertComponent'
import RuleTested from '../../components/RuleTested'
import RulesSubfields from '../../components/RulesSubfields'
import FrequensyField from '../../components/RulesComponents/FrequensyField'

const Rules = observer(() => {
  // если params = {} - значить "/new", если {id} - значит "/:id/edit"
  const params = useParams()

  console.log('params', params) // Отладка

  const PAGE_TYPES = ['static', 'dynamic']
  const { rule } = useContext(Context)
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [shrubRule, setShrubRule] = useState('')
  const [pageType, setPageType] = useState(PAGE_TYPES[0])
  const [frequency, setFrequency] = useState('')

  // устанавливается после теста
  const [shrubCache, setShrubCache] = useState('')
  const [publicStatus, setPublicStatus] = useState('private')
  const [activateStatus, setActivateStatus] = useState('active')
  const [changeNoteId, setChangeNoteId] = useState(null)

  const [description, setDescription] = useState('')

  const [loading, setLoading] = useState(true)
  const [subInfoVisibility, setSubInfoVisibility] = useState(false)
  const [alertShow, setMyAlertShow] = useState(false)
  const [alertInfo, setAlertInfo] = useState({
    header: '',
    message: '',
  })
  const [ruleTestResults, setRuleTestResults] = useState(false)
  const [changeNote, setChangeNote] = useState({})

  const [lastCheck, setLastCheck] = useState('заглушка1') // Время последней проверки
  const [duration, setDuration] = useState('заглушка2') // Длительность последней проверки
  const [pageChanged, setPageChanged] = useState('заглушка3') // Время последнего изменения
  const [activateCnt, setActivateCnt] = useState('заглушка4') // Количество запусков

  // const changeNote = {
  //   id: 15,
  //   screenshot_attachment:
  //     '/screenshots/c53ee5cd-ec4e-4c42-94ea-083e97a22139.png',
  //   html_attachment: '/html/7a0a0454-0c39-4b15-9398-c6dabf82b217.html',
  //   check_datetime: '2021-07-03T16:20:16.257Z',
  //   shrub_rule: '.b-offer-box__right.mobile',
  //   shrub: 'shrub',
  //   shrub_cache: '0bd060fa935becc84693f25538652a57',
  //   shrub_calc_cache: '0bd060fa935becc84693f25538652a57',
  //   user_note: '',
  //   createdAt: '2021-07-03T16:20:22.131Z',
  //   updatedAt: '2021-07-03T16:20:22.131Z',
  //   rule_id: null,
  //   Rule: null,
  // }

  function formInitForEdit({ rule }) {
    setName(rule.name)
    setUrl(rule.url)
    setPageType(rule.page_type)
    setShrubRule(rule.shrub_rule)
  }

  function subFieldsSetData(data) {
    setDescription(data.description)
    setFrequency(data)
  }

  useEffect(() => {
    if (params.id) {
      fetchRule(params.id)
        .then((data) => {
          rule.setRule(data)
          formInitForEdit(data)
          setSubInfoVisibility(true)
        })
        .catch((e) =>
          setAlertInfo({
            header: 'Ошибка',
            message: e.response.data.message,
            show: true,
          })
        )
        .finally(() => setLoading(false))
    } else {
      rule.setRule({})
      setLoading(false)
    }
  }, [])

  if (loading) {
    return <Spinner animation={'grow'} />
  }

  const testBtnClick = (event) => {
    event.preventDefault()
    event.target.disabled = true
    setRuleTestResults(false)
    testRule({ name, url, shrubRule, pageType })
      .then(({ changenote }) => {
        console.log('data в Rules', changenote) // Отладка
        setChangeNote(changenote)
        setRuleTestResults(true)
        event.target.disabled = false
      })
      .catch((e) => {
        setAlertInfo({
          header: 'Ошибка',
          message: e.response.data.message,
        })
        console.log('alertShow', alertShow)
        setMyAlertShow(true)
        event.target.disabled = false

        console.log('e', e) // Отладка
        console.log('e.response', e.response) // Отладка
      })
    // setSubInfoVisibility(true)
  }

  const submitRule = (e) => {
    e.preventDefault()
    /*
{
    "name": "test-parser",
    "url": "http:\\\\www.mail.ru",
    "shrub_rule": "div",
    "shrub_cache": "",
    "frequency": "2021-06-03T14:38:05.831Z",
    "page_type": "static",
    "page_changed": null,
    "last_check": null,
    "duration": null,
    "public_status": false,
    "description": "",
    "activate_cnt": 0,
    "activate_status": true,
    "createdAt": "2021-06-03T14:38:05.831Z",
    "updatedAt": "2021-06-03T14:38:05.831Z",
    "user_id": 4
}
*/
    console.log('createRule', {
      name,
      url,
      shrub_rule: shrubRule,
      shrub_cache: shrubCache,
      frequency,
      page_type: pageType,
      public_status: publicStatus,
      description,
      activate_status: activateStatus,
      test_change_note_id: changeNoteId,
    })
    // createRule({})
  }

  return (
    <Container>
      {alertShow && (
        <AlertComponent
          show={alertShow}
          info={alertInfo}
          onHide={() => setMyAlertShow(false)}
        />
      )}

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

        {ruleTestResults && <RuleTested testResults={changeNote} />}

        {ruleTestResults && (
          <div className="pt-3">
            <FrequensyField />

            <Form.Group>
              <Form.Label>Описание</Form.Label>
              <FormControl
                as="textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            {subInfoVisibility && (
              <RulesSubfields
                lastCheck={lastCheck}
                duration={duration}
                pageChanged={pageChanged}
                activateCnt={activateCnt}
              />
            )}
            <hr className="hr-seporator" />

            <Row className="mt-4 mb-5">
              <Button className="m-auto" type="submit" onClick={submitRule}>
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
