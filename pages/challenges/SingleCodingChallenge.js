import React, { useState } from 'react'
import { Card, Col, CardGroup } from 'react-bootstrap'

import styles from './Challenges.module.scss'

export default function SingleCodingChallenge({ codingChallenge }) {
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
              <Card.Text className={styles['coding-challenges-card--level']}>
                Difficulty Level: {codingChallenge.level}
              </Card.Text>
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