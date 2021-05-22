import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Context } from '../index'
import { observer } from 'mobx-react-lite'

const Main = observer(() => {
  const { user } = useContext(Context)
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
        <h2 className="main-h1-welcome">Публичные правила</h2>
      </Row>
    </Container>
  )
})

export default Main
