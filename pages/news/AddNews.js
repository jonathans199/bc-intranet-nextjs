import React from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { useState } from 'react'

export default function AddNews({ handleClose }) {
  const [news, addNews] = useState()

  const handleSubmit = () => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/news/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(news),
    })
      .then(alert('You have successfully a new news'))
      .then(handleClose)
      .catch((err) => alert(err))
  }

  return (
    <>
      <Form.Group as={Row} controlId="formHorizontalCode">
        <Form.Label column sm={4}>
          Title:
        </Form.Label>
        <Col sm={7}>
          <Form.Control
            type="text"
            title="title"
            onChange={(event) => addNews({ ...news, title: event.target.value })}
          />
        </Col>
        <Form.Label column sm={4}>
          Author:
        </Form.Label>
        <Col sm={7}>
          <Form.Control
            type="text"
            author="author"
            onChange={(event) => addNews({ ...news, author: event.target.value })}
          />
        </Col>
        <Form.Label column sm={4}>
          Body:
        </Form.Label>
        <Col sm={7}>
          <Form.Control type="text" body="body" onChange={(event) => addNews({ ...news, body: event.target.value })} />
        </Col>
      </Form.Group>
      <div>
        <Button onClick={handleSubmit}>Create News</Button>
      </div>
    </>
  )
}
