import React, { useState, useEffect } from 'react'
import { Spinner, Button, Modal, Container, Row } from 'react-bootstrap'

import styles from './Challenges.module.scss'
import { Hero } from './../../components/Hero'
import AddNewCode from './AddNewCode'
import SingleCodingChallenge from './SingleCodingChallenge'

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
