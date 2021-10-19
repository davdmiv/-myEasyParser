import React, { useContext, useEffect } from 'react'
import { Table, Container, Col } from 'react-bootstrap'
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
        rule.setRules(data)
      })
      .catch((e) => alert(e))
  }, [])

  // console.log(rule.rules)
  return (
    <Container>
      {!user.isAuth && (
        <Col>
          <h1 className="text-center m-5">Welcome to Parser</h1>
          {/* <h1 className="main-h1-welcome">Welcome to Parser</h1> */}
          <p className="text-center m-5">
            Простое приложение по остлеживанию изменний на статических и
            динамических станицах в интернете
          </p>
        </Col>
      )}
      <h4 className="m-4">Последние публичные правила</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="align-middle">Наименование</th>
            <th className="text-center align-middle">URL</th>
            <th className="text-center align-middle">
              Время последней проверки
            </th>
            <th className="text-center align-middle">
              Время последнего изменения
            </th>
            <th className="text-center align-middle">Смотреть</th>
          </tr>
        </thead>
        <tbody>
          {rule.rules.map(({ id, name, url, last_check, page_changed }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{url}</td>
              <td className="text-center">{last_check}</td>
              <td className="text-center">{page_changed}</td>
              <td className="text-center">
                <NavLink
                  className="link-icon-field"
                  onClick={() => history.push(PUBLIC_RULES_ROUTE + '/' + id)}
                  to={PUBLIC_RULES_ROUTE + '/' + id}
                >
                  <i className="fas fa-eye"></i>
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
