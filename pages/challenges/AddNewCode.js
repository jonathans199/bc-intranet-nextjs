import React from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { useState } from 'react'

export default function AddNewCode({ handleClose }) {
  const [newCode, setNewCode] = useState()
  const handleSubmit = () => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/codeChallenges`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCode),
    })
      .then(alert('You have successfully added a coding challenge! '))
      .then(handleClose)
      .catch((err) => alert(err))
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
            onChange={(event) => setNewCode({ ...newCode, name: event.target.value })}
          />
        </Col>
        <Form.Label column sm={4}>
          Difficulty:
        </Form.Label>
        <Col sm={7}>
          <Form.Select
            type="input"
            name="level"
            onChange={(event) => setNewCode({ ...newCode, level: event.target.value })}
          >
            <option level="Easy">Easy</option>
            <option level="Hard">Hard</option>
          </Form.Select>
        </Col>
        <Form.Label column sm={4}>
          Code Challenge:
        </Form.Label>
        <Col sm={7}>
          <Form.Control
            type="text"
            name="question"
            onChange={(event) => setNewCode({ ...newCode, question: event.target.value })}
          />
        </Col>
      </Form.Group>
      <div>
        <Button onClick={handleSubmit}>Create new coding challenge</Button>
      </div>
    </>
  )
}
