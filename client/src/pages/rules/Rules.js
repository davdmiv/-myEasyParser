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
import RuleTested from '../../components/RulesComponents/RuleTested'
import RulesSubfields from '../../components/RulesSubfields'
import FrequensyField from '../../components/RulesComponents/FrequensyField'
import BasicFields from '../../components/RulesComponents/BasicFields'

const Rules = observer(() => {
  // если params = {} - значить "/new", если {id} - значит "/:id/edit"
  const params = useParams()

  console.log('params', params) // Отладка

  const PAGE_TYPES = ['static', 'dynamic']
  const { rule } = useContext(Context)
  const [baseFields, setBaseFields] = useState({
    name: '',
    url: '',
    shrubRule: '',
    pageType: PAGE_TYPES[0],
  })
  const [frequency, setFrequency] = useState('')

  // устанавливается после теста
  const [subFields, setSubFields] = useState({
    lastCheck: '-//-', // Время последней проверки
    duration: '-//-', // Длительность последней проверки
    pageChanged: '-//-', // Время последнего изменения
    activateCnt: 0, // Количество запусков
  })
  const [shrubCache, setShrubCache] = useState('')
  const [publicStatus, setPublicStatus] = useState('private')
  const [activateStatus, setActivateStatus] = useState('active')
  const [changeNoteId, setChangeNoteId] = useState(null)

  const [description, setDescription] = useState('')

  const [loading, setLoading] = useState(true)
  const [subInfoVisibility, setSubInfoVisibility] = useState(false)
  const [alertInfo, setAlertInfo] = useState({
    header: '',
    message: '',
    show: false,
  })
  const [ruleTestResults, setRuleTestResults] = useState(false)
  const [changeNote, setChangeNote] = useState({})

  function formInitForEdit({ rule }) {
    setBaseFields({
      ...rule,
    })
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
    testRule({ ...baseFields })
      .then(({ changenote }) => {
        // console.log('data в Rules', changenote) // Отладка
        setChangeNote(changenote)
        setRuleTestResults(true)
        event.target.disabled = false
      })
      .catch((e) => {
        setAlertInfo({ ...alertInfo, show: true })
        event.target.disabled = false
      })
  }

  const submitRule = (e) => {
    e.preventDefault()
  }

  return (
    <Container>
      {alertInfo.show && (
        <AlertComponent
          show={alertInfo.show}
          info={alertInfo}
          onHide={() => setAlertInfo({ ...alertInfo, show: false })}
        />
      )}

      <Row className="rule-index-m">
        <Col>
          <h1>Новое правило</h1>
        </Col>
      </Row>

      <BasicFields mainFields={baseFields} setMainFields={setBaseFields} />

      <Form>
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
