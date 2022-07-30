import { Button, Card, Col } from 'react-bootstrap'
import styles from './Restaurant.module.scss'

export default function SingleRestaurant({ restaurant }) {
  return (
    <div to={`/restaurant/${restaurant.id}`} className={styles['restaurant_card--link']}>
      <div>
        <Col md={3}>
          <div className={styles['restaurant_card--container']}>
            <div className={styles['restaurant_card--flip']}>
              <Card key={restaurant.id} className={styles['restaurant_card']}>
                <Card.Img variant='top' src={restaurant.photoUrl} className={styles['restaurant_card--img']} />
                <Card.Body className={styles['restaurant_card--body']}>
                  <Card.Img src='./img/groupDots.png' className={styles['restaurant_card--groupdots']} />
                  <Card.Title className={styles['restaurant_card--text-center']}>{restaurant.name}</Card.Title>
                </Card.Body>
              </Card>
              <Card key={restaurant.id} className={styles['restaurant_card--back']}>
                <Card.Body className={styles['restaurant_card--body--back']}>
                  <Card.Title className={styles['restaurant_card--back--text--back']}>{restaurant.name}</Card.Title>
                  <Card.Text className={styles['restaurant_card--back--text--address']}>{restaurant?.address || 'Restaurant Address'}</Card.Text>
                  <Card.Text className={styles['restaurant_card--back--text--phone']}>Phone: {restaurant?.phone}</Card.Text>
                  <Card.Text className={styles['restaurant_card--back--text--hours']}>Hours of Operation: {restaurant?.workinghours}</Card.Text>
                  <Card.Text className={styles['restaurant_card--back--text--rating']}>Rating: {restaurant?.rating}</Card.Text>
                  <Button className={styles['restaurant_card--back--button']}>Menu</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Col>
      </div>
    </div>
  )
}
