import React, { useContext, useEffect } from 'react'
import { Table, Container, Row } from 'react-bootstrap'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import { fetchPublicRules } from '../../http/ruleAPI'
import { NavLink, useHistory } from 'react-router-dom'
import { PUBLIC_RULES_ROUTE } from '../../utils/consts'

const PublicRulesIndex = observer(() => {
  const { rule } = useContext(Context)
  const history = useHistory()

  useEffect(() => {
    fetchPublicRules()
      .then((data) => {
        console.log('data', data)
        rule.setRules(data)
      })
      .catch((e) => alert(e))
  }, [])

  return (
    <Container>
      <Row>
        <h1 className="main-h1-welcome">Публичные правила</h1>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Наименование</th>
            <th>url</th>
            <th>Время последней проверки</th>
            <th>Время последнего изменения</th>
            <th>Просмотр</th>
          </tr>
        </thead>
        <tbody>
          {rule.rules.map(({ id, name, url, last_check, page_changed }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{url}</td>
              <td>{last_check}</td>
              <td>{page_changed}</td>
              <td>
                <NavLink
                  // className="link-to-auth"
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

export default PublicRulesIndex
