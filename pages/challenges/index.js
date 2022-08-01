import React, { useState, useEffect } from 'react'
import { Spinner, Button, Modal, Container, Row, Card, Col, CardGroup } from 'react-bootstrap'

import styles from './Challenges.module.scss'
import { Hero } from './../../components/Hero'
import AddNewCode from './AddNewCode'

function SingleCodingChallenge({ codingChallenge }) {
  const longQuestion = codingChallenge.question
  const [show, setShow] = useState(true)

  const limitWordsInQuestion = (question, limit) => {
    return question.split(' ').slice(0, limit).join(' ')
  }

  return (
    <Col md={6}>
      {show ? (
        <CardGroup className={styles['coding-challenges--wrapper']}>
          <Card key={codingChallenge.id} className={styles['coding-challenges-card']}>
            <div className={styles['coding-challenges-card--img']}></div>
            <Card.Header className={styles['coding-challenges-card--header']}>
              <Card.Title className={styles['coding-challenges-card--title']}>{codingChallenge.name}</Card.Title>
              <Card.Text className={styles['coding-challenges-card--level']}>Difficulty Level: {codingChallenge.level}</Card.Text>
            </Card.Header>
            <Card.Body className={styles['coding-challenges-card--problem']}>
              {longQuestion.length > 150 ? limitWordsInQuestion(longQuestion, 25) : longQuestion}
            </Card.Body>
          </Card>
        </CardGroup>
      ) : null}
    </Col>
  )
}

export default function CodingChallenges() {
  const [allCodingChallenges, setAllCodingChallenges] = useState()
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    fetch(`https://bocacode-intranet-api.web.app/codes`)
      .then(response => response.json())
      .then(promise => setAllCodingChallenges(promise))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Hero heading='Code Challenges' subHeading='From 0 to Hero' type='events' />
      <Container>
        {/* <Button variant='primary' onClick={handleShow} bsPrefix={styles['coding-challenges--button']}>
        Add new challenge!
      </Button> */}
        {/*  */}
        <div>
          <Row>
            {!allCodingChallenges ? (
              <Spinner animation='border' role='status' variant='danger'></Spinner>
            ) : (
              allCodingChallenges?.map(codingChallenge => <SingleCodingChallenge key={codingChallenge.id} codingChallenge={codingChallenge} />)
            )}
          </Row>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Challenge</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddNewCode handleClose={handleClose} />
          </Modal.Body>
        </Modal>
      </Container>
    </>
  )
}
