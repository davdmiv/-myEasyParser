import React, { useContext, useEffect } from 'react'
import { Table, Container } from 'react-bootstrap'
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
        rule.setRules(data)
      })
      .catch((e) => alert(e))
  }, [])

  return (
    <Container>
      <h4 className="m-4">Все публичные правила</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="align-middle width-20pc">Наименование</th>
            <th className="text-center align-middle width-40pc">URL</th>
            <th className="text-center align-middle width-20pc">
              Время последней проверки
            </th>
            <th className="text-center align-middle width-20pc">
              Время последнего изменения
            </th>
            <th className="text-center align-middle width-10pc">Смотреть</th>
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
