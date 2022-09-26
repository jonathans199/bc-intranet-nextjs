import { useContext, useEffect, useState } from 'react'
import { NavDropdown } from 'react-bootstrap'
import { UserContext } from '../../../../pages/_app'

export default function StudentsAreaTab() {
  const { user } = useContext(UserContext)
  const [isDisabled, setIsDisabled] = useState<boolean>(true)

  useEffect(() => {
    user !== undefined && setIsDisabled(false)
  }, [user])

  return (
    <NavDropdown title="STUDENTS AREA" id="nav-dropdown">
      {!user && (
        <span className="mx-3 text-warning">
          <strong>Login to Access</strong>{' '}
        </span>
      )}

      <NavDropdown.Item href="/labs" disabled={isDisabled}>
        LABS
      </NavDropdown.Item>
      <NavDropdown.Item href="/challenges" disabled={isDisabled}>
        CODE CHALLENGES
      </NavDropdown.Item>
      <NavDropdown.Item href="/alumni" disabled={isDisabled}>
        ALUMNI
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <span className="mx-3 text-warning">COMING SOON </span>
      <NavDropdown.Item href="#" disabled={isDisabled}>
        PHOTOS
      </NavDropdown.Item>
      <NavDropdown.Item href="#" disabled={isDisabled}>
        HOMEWORK
      </NavDropdown.Item>
      <NavDropdown.Item href="#" disabled={isDisabled}>
        JOBS
      </NavDropdown.Item>
    </NavDropdown>
  )
}
