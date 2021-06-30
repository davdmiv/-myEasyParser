import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import { fetchRules } from '../../http/ruleAPI'
import { NavLink, useHistory } from 'react-router-dom'
import { RULES_ROUTE } from '../../utils/consts'
import UserRulesList from '../../components/UserRulesList'
import { Spinner } from 'react-bootstrap'

// function deleteConfirm (id) {
//   deleteRule()
// }

const RulesIndex = observer(() => {
  const [rules, setRules] = useState([])
  const [loading, setLoading] = useState(true)
  const history = useHistory()

  useEffect(() => {
    fetchRules()
      .then((data) => {
        setRules(data)
        console.log('data', data)
      })
      .catch((e) => alert(e))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner animation={'grow'} />
  }

  return (
    <Container>
      <Row className="rule-index-m">
        <Col md={8}>
          <h1>Список всех ваших правил</h1>
        </Col>
        <Col md={4} className="m-auto text-center">
          <NavLink
            // className="link-to-auth"
            className="btn btn-primary"
            onClick={() => history.push(RULES_ROUTE + '/new')}
            to={RULES_ROUTE + '/new'}
          >
            Создать правило
          </NavLink>
        </Col>
      </Row>
      <Row className="user-rules-list-header">
        <Col md={5} className="m-auto">
          <Row>
            <Col md={8}>Наименование правила</Col>
            <Col md={4} className="text-center">
              Статус
            </Col>
          </Row>
          <Row>
            <Col>URL</Col>
          </Row>
        </Col>
        <Col md={2} className="m-auto">
          <Row>Дата последней проверки</Row>
          <Row>Дата последнего изменения</Row>
        </Col>
        <Col md={2} className="m-auto">
          <Row className="justify-content-center">Частота проверки</Row>
        </Col>
        <Col md={2} className="m-auto">
          <Row className="justify-content-center">Следующая проверка</Row>
        </Col>
        <Col md={1} className="m-auto">
          <Row className="justify-content-center">Смотреть</Row>
          <Row className="justify-content-center">Редактировать</Row>
          <Row className="justify-content-center">Удалить</Row>
        </Col>
      </Row>
      <UserRulesList rules={rules}></UserRulesList>
    </Container>
  )
})

export default RulesIndex
