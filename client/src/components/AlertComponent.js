import React from 'react'
import { Button, Alert, Modal } from 'react-bootstrap'

const AlertComponent = (props) => {
  return (
    <Modal
      contentClassName="bg-transparent border-0"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Alert variant="danger">
        <Alert.Heading>{props.info.header}</Alert.Heading>
        <p>{props.info.message}</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={props.onHide} variant="outline-danger">
            Ок
          </Button>
        </div>
      </Alert>
    </Modal>
  )
}

export default AlertComponent
