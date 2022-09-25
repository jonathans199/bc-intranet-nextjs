import { useContext, useState } from 'react'
import { getAuth, signInWithPopup, signOut, GithubAuthProvider } from 'firebase/auth'
import { doc, serverTimestamp, setDoc, query, where, collection, getDocs } from 'firebase/firestore'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useRouter } from 'next/router'

import { firestore } from '../../../firebaseConfig'
import { UserContext } from '../../../pages/_app'
import AroundBCTab from './Tabs/AroundBCTab'
import StudentsAreaTab from './Tabs/StudentsAreaTab'
import styles from './Navigation.module.scss'

interface INewUser {
  uid: string
  displayName: string
  type?: number
  email: string
  createdAt?: string
  photoURL: string
}

interface ICredential {
  accessToken: string
}

export default function Navigation() {
  // @ts-ignore
  const { user, setUser } = useContext(UserContext)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const router = useRouter()

  const auth = getAuth()

  const handleSignup = async (newUser: INewUser) => {
    console.log('newUser here => ', newUser)
    // @ts-ignore
    const docRef = doc(firestore, 'users', newUser.uid)
    await setDoc(docRef, {
      displayName: newUser.displayName,
      type: 0,
      email: newUser.email,
      avatar: newUser.photoURL,
      createdAt: serverTimestamp(),
    })
  }

  const checkIfUserExists = async (newUser: INewUser) => {
    const users = collection(firestore, 'users')
    const q = query(users, where('email', '==', newUser.email))

    const querySnapshot = await getDocs(q)
    return querySnapshot
  }

  const handleSignIn = () => {
    const provider = new GithubAuthProvider()
    const auth = getAuth()
    signInWithPopup(auth, provider)
      .then(result => {
        //@ts-ignore
        const credential: ICredential = GithubAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        const fbUser = result.user

        //@ts-ignore
        if (!checkIfUserExists(fbUser)) {
          // @ts-ignore
          setUser(fbUser)
          // localStorage.setItem('token', token)
          // @ts-ignore
          handleSignup(fbUser)
        } else {
          // @ts-ignore
          setUser(fbUser)
        }
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.customData.email
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error)
      })
  }

  const logOutUser = async () => {
    await signOut(auth)
    localStorage.clear()
    window.location.reload()
    router.push('/')
  }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className={styles['navbar-custom']}>
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
                <Nav.Link onClick={handleSignIn}>LOGIN</Nav.Link>
              )}
              <StudentsAreaTab />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
