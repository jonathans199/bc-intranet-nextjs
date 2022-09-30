import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function VideoCards() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Video 1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card
          content.
        </Card.Text>
        <Button variant="primary">Watch</Button>
      </Card.Body>
    </Card>
  )
}
