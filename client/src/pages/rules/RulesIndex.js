import React, { useState, useEffect } from 'react'
import { Table, Container, Row, Col } from 'react-bootstrap'
// import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import { fetchRules, deleteRule } from '../../http/ruleAPI'
import { NavLink, useHistory } from 'react-router-dom'
import { RULES_ROUTE } from '../../utils/consts'
import UserRulesList from '../../components/UserRulesList'
import { Spinner } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'

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
      <Row>
        <h1 className="rule-index-m">Список всех ваших правил</h1>
      </Row>
      <Row className="user-rules-list-header">
        <Col className="m-auto">
          <Row>Наименование правила</Row>
          <Row>URL</Row>
        </Col>
        <Col xs={2} className="m-auto">
          <Row className="justify-content-center">Статус</Row>
        </Col>
        <Col xs={2} className="m-auto">
          <Row>Дата последней проверки</Row>
          <Row>Дата последнего изменения</Row>
        </Col>
        <Col xs={2} className="m-auto">
          <Row className="justify-content-center">Частота проверки</Row>
        </Col>
        <Col xs={2} className="m-auto">
          <Row className="justify-content-center">Следующая проверка</Row>
        </Col>
        <Col xs={1} className="m-auto">
          <Row className="justify-content-center">Смотреть</Row>
          <Row className="justify-content-center">Редактировать</Row>
          <Row className="justify-content-center">Удалить</Row>
        </Col>
      </Row>
      <UserRulesList rules={rules}></UserRulesList>
      {/* <Table striped bordered hover>
        <thead>
          <tr>
            <th>Наименование</th>
            <th>url</th>
            <th>Время последней проверки</th>
            <th>Время последнего изменения</th>
            <th>Просмотр</th>
            <th>Изменить</th>
            <th>Удалить</th>
          </tr>
        </thead>
        <tbody>
          {rule.rules &&
            rule.rules.map(({ id, name, url, last_check, page_changed }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{url}</td>
                <td>{last_check}</td>
                <td>{page_changed}</td>
                <td>
                  <NavLink
                    // className="link-to-auth"
                    className="link-icon-field"
                    onClick={() => history.push(RULES_ROUTE + '/' + id)}
                    to={RULES_ROUTE + '/' + id}
                  >
                    <i className="fas fa-eye"></i>
                  </NavLink>
                </td>
                <td>
                  <NavLink
                    // className="link-to-auth"
                    className="link-icon-field"
                    onClick={() => history.push(RULES_ROUTE + '/' + id)}
                    to={RULES_ROUTE + '/' + id}
                  >
                    <i className="fas fa-edit"></i>
                  </NavLink>
                </td>
                <td>
                  <NavLink
                    // className="link-to-auth"
                    className="link-icon-field"
                    onClick={() => history.push(RULES_ROUTE + '/' + id)}
                    to={RULES_ROUTE + '/' + id}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </NavLink>
                </td>
              </tr>
            ))}
        </tbody>
      </Table> */}
    </Container>
  )
})

export default RulesIndex
