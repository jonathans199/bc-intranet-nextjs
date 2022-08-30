import * as React from 'react'
import { useState, useContext } from 'react'
import { Button, Form } from 'react-bootstrap'

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, serverTimestamp, setDoc, where } from 'firebase/firestore'

import { firestore } from '../../firebaseConfig'
import { UserContext, IUser } from '../../pages/_app'

interface ISignUpForm {
  email: string
  password: string
  firstName: string | undefined
  lastName: string | undefined
  type: number
  cohort: number
}

interface IProps {
  setOpenModal: Function
  openModal: Boolean
}

interface IFbUser {
  uid: Number
  displayName: string | undefined
  lastName: string | undefined
  type: Number
  cohort: string | undefined
  email: string
  username: string
  createdAt: string
  reloadUserInfo: string | any
  User: string
}
const initialSignUpForm: ISignUpForm = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  type: 0,
  cohort: 7,
}

export const Signup = ({ setOpenModal, openModal }: IProps) => {
  const { user, setUser } = useContext<IUser>(UserContext)
  const [signUpForm, setSignUpForm] = useState<ISignUpForm>(initialSignUpForm)

  const auth = getAuth()

  console.log('user in context', user)

  const createUserDocument = async (fbUser: IFbUser) => {
    const { uid, email, reloadUserInfo } = fbUser
    // @ts-ignore
    const docRef = doc(firestore, 'users', uid)
    await setDoc(docRef, {
      displayName: signUpForm.firstName,
      lastName: signUpForm.lastName,
      type: 0,
      cohort: signUpForm.cohort,
      email,
      username: reloadUserInfo.email,
      createdAt: serverTimestamp(),
    })
    setOpenModal(!openModal)
    // setUser(email)
  }

  const handleSignup = async (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        signUpForm.email,
        signUpForm.password
      )
      // @ts-ignore
      await createUserDocument(userCredential.user)
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message)
      } else {
        console.log('Unexpected error', err)
      }
      setOpenModal(!openModal)
    }
  }

  const handleSignUpForm = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    setSignUpForm({ ...signUpForm, [target.name]: target.value })
  }

  return (
    <Form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSignup(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          name="firstName"
          type="text"
          placeholder="First Name"
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSignUpForm(e)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          name="lastName"
          type="text"
          placeholder="Last Name"
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSignUpForm(e)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Cohort</Form.Label>
        <Form.Control
          name="cohort"
          type="number"
          min={0}
          max={20}
          placeholder="7"
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSignUpForm(e)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSignUpForm(e)}
        />
        <Form.Text className="text-muted">
          We&apos;ll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSignUpForm(e)}
        />
      </Form.Group>

      <p>
        Your account will be reviewed and verified to provide access, you should receive an email
        confirmation, thank you
      </p>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}
