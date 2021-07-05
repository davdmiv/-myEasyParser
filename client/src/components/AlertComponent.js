import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { Button, Alert, Modal } from 'react-bootstrap'

const AlertComponent = observer(({ alertInfo, setInfo }) => {
  return (
    // <Modal>
    <Alert show={alertInfo.show} variant="danger">
      <Alert.Heading>{alertInfo.header}</Alert.Heading>
      <p>{alertInfo.message}</p>
      <hr />
      <div className="d-flex justify-content-end">
        <Button
          onClick={() => setInfo({ message: '', header: '', show: false })}
          variant="outline-danger"
        >
          Ок
        </Button>
      </div>
    </Alert>
    // </Modal>
  )
})

export default AlertComponent
