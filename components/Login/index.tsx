import * as React from 'react'
import { useState, useContext } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

import { UserContext, IUser } from '../../pages/_app'
import { app } from '../../firebaseConfig'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
interface ILogin {
  email: string
  password: string
}

type IProps = {
  openModal: boolean
  setOpenModal: (value: boolean) => void
}

export default function Login({ openModal, setOpenModal }: IProps) {
  const { user, setUser } = useContext<IUser>(UserContext)
  const [login, setLogin] = useState<ILogin>({ email: '', password: '' })
  const [loginSuccess, setLoginSuccess] = useState<Boolean>(false)

  const auth = getAuth(app)

  const signIn = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const userCredential = await signInWithEmailAndPassword(auth, login.email, login.password)

    if (userCredential.user) {
      const authUser = userCredential.user
      setLoginSuccess(true)
      // @ts-ignore
      setUser(authUser)
      setOpenModal(false)
    }
  }

  // @ts-ignore
  return (
    <Modal show={openModal} onHide={() => setOpenModal(!openModal)}>
      <Modal.Header closeButton>
        <Modal.Title>Sign in</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* @ts-ignore */}
        <Form onSubmit={signIn}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              onChange={(e: React.ChangeEvent) => setLogin({ ...login, email: (e.target as HTMLInputElement).value })}
            />
            <Form.Text className='text-muted'>We&apos;ll never share your email with anyone else.</Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              onChange={(e: React.ChangeEvent) => setLogin({ ...login, password: (e.target as HTMLInputElement).value })}
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}
