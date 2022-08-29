import { useContext, useState } from "react"
import { app } from "../../../firebaseConfig"
import { getAuth, signOut } from "firebase/auth"
import styles from "./Navigation.module.scss"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"

import { UserContext } from "../../../pages/_app"
import Login from "../../Login"
import AroundBCTab from "./Tabs/AroundBCTab"
import StudentsAreaTab from "./Tabs/StudentsAreaTab"

export default function Navigation() {
  // @ts-ignore
  const { user } = useContext(UserContext)
  const [openModal, setOpenModal] = useState<boolean>(false)

  const auth = getAuth()

  const logOutUser = async () => {
    await signOut(auth)
    localStorage.clear()
  }

  return (
    <div>
      <Login openModal={openModal} setOpenModal={setOpenModal} />

      <Navbar collapseOnSelect expand="lg" className={styles["navbar-custom"]}>
        <Container>
          <Navbar.Brand href="/">
            <img src="./img/bc-logo.png" alt="Boca Code logo" width="150px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="/#about">ABOUT</Nav.Link>
              <Nav.Link href="news">NEWS</Nav.Link>
              <Nav.Link href="events">EVENTS</Nav.Link>
              <Nav.Link href="/#links">LINKS</Nav.Link>
              <AroundBCTab />
              {user ? (
                <Nav.Link onClick={logOutUser}>LOGOUT</Nav.Link>
              ) : (
                <Nav.Link onClick={() => setOpenModal(true)}>LOGIN</Nav.Link>
              )}
              <StudentsAreaTab />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
