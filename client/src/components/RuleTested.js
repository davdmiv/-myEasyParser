import React from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col, Image } from 'react-bootstrap'
import axios from 'axios'

const RuleTested = ({ testResults }) => {
  console.log('data in RuleTested', testResults)

  const downloadHtml = (e) => {
    e.preventDefault()
    axios({
      url: process.env.REACT_APP_API_URL + testResults.html_attachment, //your url
      method: 'GET',
      responseType: 'blob', // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'rule_test.html') //or any other extension
      document.body.appendChild(link)
      link.click()
    })
  }

  const dataFormate = (data) => {
    return data
      ? data
          .replace(/...\..*/g, '')
          .replaceAll(/(-)/g, '.')
          .replace(/(T0)|(T)/g, ' ')
          .replaceAll(/(-)/g, '.')
      : ''
  }

  return (
    <Row className="bg-light">
      <Col md={11} className="m-auto">
        <Row>
          <Col md={2} className="unmarked">
            Протестировано
          </Col>
          <Col md={2} className="marked">
            {dataFormate(testResults.check_datetime)}
          </Col>
          <Col md={2} className="unmarked ml-auto">
            <NavLink className="link-download" onClick={downloadHtml} to={'#'}>
              html скачать
            </NavLink>
          </Col>
        </Row>
        <Row className="unmarked">
          <p className="m-auto">screenshot</p>
        </Row>
        <Row className="pb-3">
          <Col style={{ height: '60vh', overflow: 'hidden' }}>
            <a
              href={
                process.env.REACT_APP_API_URL +
                testResults.screenshot_attachment
              }
              target="_blank"
            >
              <Image
                src={
                  process.env.REACT_APP_API_URL +
                  testResults.screenshot_attachment
                }
                alt="screenshot"
                className="m-auto w-100"
              />
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default RuleTested
