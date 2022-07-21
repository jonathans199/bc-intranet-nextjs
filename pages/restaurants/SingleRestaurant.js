import { Card, Col } from 'react-bootstrap'
import styles from './Restaurant.module.scss'

export default function SingleRestaurant({ restaurant }) {
  return (
    <div className={styles['restaurant_card--link']}>
      <Col md={3}>
        <Card key={restaurant.id} className={styles['restaurant_card']}>
          <Card.Img variant='top' src={restaurant.photoUrl} className={styles['restaurant_card--img']} />
          <Card.Body className={styles['restaurant_card--body']}>
            <Card.Img src='./img/groupDots.png' className={styles['restaurant_card--groupdots']} />
            <Card.Title className={styles['restaurant_card--text-center']}>{restaurant.name}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </div>
  )
}
