import { useState } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { firestore } from './../../firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'

export default function AddNewCode({ handleClose }) {
  const [newCode, setNewCode] = useState()

  const handleSubmit = async () => {
    try {
      const docRef = await addDoc(collection(firestore, 'codeChallenges'), newCode)
      console.log('Document written with ID: ', docRef.id)
      handleClose()
      window.location.reload()
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }
  return (
    <>
      <Form.Group as={Row} controlId="formHorizontalCode">
        <Form.Label column sm={4}>
          Name:
        </Form.Label>
        <Col sm={7}>
          <Form.Control
            type="text"
            name="name"
            onChange={event => setNewCode({ ...newCode, name: event.target.value })}
          />
        </Col>
        <Form.Label column sm={4}>
          Difficulty:
        </Form.Label>
        <Col sm={7}>
          <Form.Select
            type="input"
            // name="level"
            value="level"
            onChange={event => setNewCode({ ...newCode, level: event.target.value })}
          >
            {/* <option level="Easy">Easy</option>
            <option level="Hard">Hard</option> */}
            <option value="Easy">Easy</option>
            <option value="Hard">Hard</option>
          </Form.Select>
        </Col>
        <Form.Label column sm={4}>
          Code Challenge:
        </Form.Label>
        <Col sm={7}>
          <Form.Control
            type="text"
            name="question"
            onChange={event => setNewCode({ ...newCode, question: event.target.value })}
          />
        </Col>
      </Form.Group>
      <div>
        <Button onClick={handleSubmit}>Create new coding challenge</Button>
      </div>
    </>
  )
}
