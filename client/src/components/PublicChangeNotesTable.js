import React from 'react'
import { Table } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const PublicChangeNotesTable = (changenotes) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Дата и время проверки</th>
          <th className="text-center">html</th>
          <th className="text-center">screenshot</th>
          <th>комментарий пользователя</th>
        </tr>
      </thead>
      <tbody>
        {changenotes.changenotes &&
          changenotes.changenotes.map(
            ({
              id,
              check_datetime,
              html_attachment,
              screenshot_attachment,
              user_note,
            }) => (
              <tr key={id}>
                <td>{check_datetime}</td>
                <td className="text-center">
                  <NavLink
                    className="link-download"
                    onClick={(e) => e.preventDefault()}
                    to={html_attachment}
                  >
                    html
                  </NavLink>
                </td>
                <td className="text-center">
                  <NavLink
                    className="link-download"
                    onClick={(e) => e.preventDefault()}
                    to={screenshot_attachment}
                  >
                    screenshot
                  </NavLink>
                </td>
                <td>{user_note}</td>
              </tr>
            )
          )}
      </tbody>
    </Table>
  )
}

export default PublicChangeNotesTable
