import React, { useContext, useEffect } from 'react'
import { Table, Container, Row, Col } from 'react-bootstrap'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import { fetchPublicRules } from '../../http/ruleAPI'
import { NavLink, useHistory } from 'react-router-dom'
import { PUBLIC_RULES_ROUTE } from '../../utils/consts'

const Main = observer(() => {
  const { user, rule } = useContext(Context)
  const history = useHistory()

  useEffect(() => {
    fetchPublicRules()
      .then((data) => {
        console.log('data', data)
        rule.setRules(data)
      })
      .catch((e) => alert(e))
  }, [])

  // console.log(rule.rules)
  return (
    <Container>
      {!user.isAuth && (
        <Col>
          <Row>
            <h1 className="main-h1-welcome">Welcome to Parser</h1>
          </Row>
          <Row>
            <p>
              Простое приложение по остлеживанию изменний на статических и
              динамических станицах в интернете
            </p>
          </Row>
        </Col>
      )}
      <Row>
        <h2 className="main-h1-welcome">Последние публичные правила</h2>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Наименование</th>
            <th>url</th>
            <th>Время последней проверки</th>
            <th>Время последнего изменения</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rule.rules.map(({ id, name, url, last_check, page_changed }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{url}</td>
              <td>{last_check}</td>
              <td>{page_changed}</td>
              <td>
                <NavLink
                  // className="link-to-auth"
                  onClick={() => history.push(PUBLIC_RULES_ROUTE + '/' + id)}
                  to={PUBLIC_RULES_ROUTE + '/' + id}
                >
                  Смотреть
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
})

export default Main
