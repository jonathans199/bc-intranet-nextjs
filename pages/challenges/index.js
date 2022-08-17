import React, { useState, useEffect } from "react"
import { Spinner, Button, Modal, Container, Row } from "react-bootstrap"

import styles from "./Challenges.module.scss"

import { Hero } from "./../../components/Hero"
import AddNewCode from "./AddNewCode"
import SingleCodingChallenge from "./SingleCodingChallenge"

export default function CodingChallenges({ data }) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Hero heading="Code Challenges" subHeading="From 0 to Hero" type="events" />
      <Container>
        {/* Adds a new Coding challenge and opens the Modal */}
        <Button
          variant="primary"
          onClick={handleShow}
          bsPrefix={styles["coding-challenges--button"]}
        >
          Add new challenge!
        </Button>
        <div>
          <Row>
            {!data ? (
              <Spinner animation="border" role="status" variant="danger"></Spinner>
            ) : (
              data?.map(codingChallenge => (
                <SingleCodingChallenge key={codingChallenge.id} codingChallenge={codingChallenge} />
              ))
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

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://bocacode-intranet-api.web.app/codes`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
