import * as React from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

interface IProps {
  setOpenModal: Function
  openModal: Boolean
  setUser?: (value: object) => void | object
}

interface ILogin {
  email: string
  password: string
}

export const Login = ({ setOpenModal, openModal, setUser }: IProps) => {
  const [login, setLogin] = useState<ILogin>({ email: '', password: '' })

  const signIn = async (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    const auth = getAuth()

    signInWithEmailAndPassword(auth, login.email, login.password)
      .then(userCredential => {
        if (userCredential.user) {
          const authUser = userCredential.user

          setUser?.(authUser)
          setOpenModal(!openModal)
        }
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
      })
  }

  return (
    <Form onSubmit={(e: React.FormEvent<HTMLFormElement>) => signIn(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e: React.ChangeEvent) =>
            setLogin({ ...login, email: (e.target as HTMLInputElement).value })
          }
        />
        <Form.Text className="text-muted">
          We&apos;ll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e: React.ChangeEvent) =>
            setLogin({ ...login, password: (e.target as HTMLInputElement).value })
          }
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}
