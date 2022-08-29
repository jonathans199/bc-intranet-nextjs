import { useContext, useState } from "react"
import { app } from "../../../firebaseConfig"
import { getAuth, signOut } from "firebase/auth"
import styles from "./Navigation.module.scss"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"

import { UserContext } from "../../../pages/_app"
import IUser from "../../../pages/_app"
import Login from "../../Login"

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

              <NavDropdown title="AROUND BC" id="nav-dropdown">
                <NavDropdown.Item href="restaurants">RESTAURANTS</NavDropdown.Item>

                <NavDropdown.Divider />
                <span className="mx-2 text-warning">COMING SOON </span>
                <NavDropdown.Item href="#">PARKS</NavDropdown.Item>
                <NavDropdown.Item href="#">CAFES</NavDropdown.Item>
                <NavDropdown.Item href="#">SHOPPING</NavDropdown.Item>
              </NavDropdown>
              {user ? (
                <Nav.Link onClick={logOutUser}>LOGOUT</Nav.Link>
              ) : (
                <Nav.Link onClick={() => setOpenModal(true)}>LOGIN</Nav.Link>
              )}
              <NavDropdown title="STUDENTS ONLY" id="nav-dropdown">
                <NavDropdown.Item href="/labs">LABS</NavDropdown.Item>
                <NavDropdown.Item href="/challenges">CODE CHALLENGES</NavDropdown.Item>

                <NavDropdown.Divider />
                <span className="mx-3 text-warning">COMMING SOON </span>

                <NavDropdown.Item href="#">PHOTOS</NavDropdown.Item>
                <NavDropdown.Item href="#">HOMEWORK</NavDropdown.Item>
                <NavDropdown.Item href="#">JOBS</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
