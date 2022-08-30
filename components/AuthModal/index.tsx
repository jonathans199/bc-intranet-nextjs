import * as React from 'react'
import { useContext } from 'react'
import { Modal, Tabs, Tab } from 'react-bootstrap'

import { UserContext, IUser } from '../../pages/_app'
import { Signup } from './Signup'
import { Login } from './Login'

type IProps = {
  openModal: boolean
  setOpenModal: (value: boolean) => void
  setUser?: (value: object) => void | object
}

export default function AuthModal({ openModal, setOpenModal }: IProps) {
  const { user, setUser } = useContext<IUser>(UserContext)

  // const [loginSuccess, setLoginSuccess] = useState<Boolean>(false)

  // const auth = getAuth()

  console.log('user in context', user)

  return (
    <Modal show={openModal} onHide={() => setOpenModal(!openModal)}>
      <Modal.Header closeButton>
        <Modal.Title>Sign In / Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs defaultActiveKey="signin" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="signin" title="Sign in">
            <Login setOpenModal={setOpenModal} openModal={openModal} setUser={setUser} />
          </Tab>
          <Tab eventKey="signup" title="Sign Up">
            <Signup setOpenModal={setOpenModal} openModal={openModal} />
          </Tab>
          <Tab eventKey="contact" title="Contact">
            <a href="mailto:jonathan@bocacode.com">Jonathan@bocacode.com</a>
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  )
}
