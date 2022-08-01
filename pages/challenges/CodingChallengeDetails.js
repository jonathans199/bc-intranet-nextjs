import { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
// import { useParams } from 'react-router-dom'
import styles from './Challenges.module.scss'
export default function CodingChallengeDetails() {
  const [codingChallenge, setCodingChallenge] = useState(null)
  // const { id } = useParams()
  useEffect(() => {
    fetch(`https://bocacode-intranet-api.web.app/codes/`)
      .then(response => response.json())
      .then(promise => setCodingChallenge(promise))
      .catch(err => console.log(err))
  }, [])
  return (
    <div>
      {!codingChallenge ? (
        <h3 style={{ margin: 'auto' }}>Loading...</h3>
      ) : (
        //need to add on click that goes to complier (Delete note when finished according to Josh)
        //
        <Card className={styles['Coding_Challenge_Details']}>
          <Card.Body>
            <Card.Title>{codingChallenge?.name || 'Coding Challenge Name'}</Card.Title>
            <Card.Text>{codingChallenge?.question || 'Coding Challenge Question'}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  )
}
