import { useState } from 'react'
import { CardGroup, Modal, Spinner, Button, Card, Col } from 'react-bootstrap'

import { Hero } from '../../components/Hero'
import AddNewForm from '../../pages/restaurants/AddNewForm'
import styles from './Restaurant.module.scss'
import { FirebaseGet } from '../../utilities/FirebaseUtils'

function SingleRestaurant({ restaurant }) {
  return (
    <div to={`/restaurant/${restaurant.id}`} className={styles['restaurant_card--link']}>
      <div>
        <Col md={3}>
          <div className={styles['restaurant_card--container']}>
            <div className={styles['restaurant_card--flip']}>
              <Card key={restaurant.id} className={styles['restaurant_card']}>
                <Card.Img
                  variant="top"
                  src={restaurant.photoUrl}
                  className={styles['restaurant_card--img']}
                />
                <Card.Body className={styles['restaurant_card--body']}>
                  <Card.Img
                    src="./img/groupDots.png"
                    className={styles['restaurant_card--groupdots']}
                  />
                  <Card.Title className={styles['restaurant_card--text-center']}>
                    {restaurant.name}
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card key={restaurant.id} className={styles['restaurant_card--back']}>
                <Card.Body className={styles['restaurant_card--body--back']}>
                  <Card.Title className={styles['restaurant_card--back--text--back']}>
                    {restaurant.name}
                  </Card.Title>
                  <Card.Text className={styles['restaurant_card--back--text--address']}>
                    {restaurant?.address || 'Restaurant Address'}
                  </Card.Text>
                  <Card.Text className={styles['restaurant_card--back--text--phone']}>
                    Phone: {restaurant?.phone}
                  </Card.Text>
                  <Card.Text className={styles['restaurant_card--back--text--hours']}>
                    Hours of Operation: {restaurant?.workinghours}
                  </Card.Text>
                  <Card.Text className={styles['restaurant_card--back--text--rating']}>
                    Rating: {restaurant?.rating}
                  </Card.Text>
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

export default function Restaurants({ data }) {
  const [newRestaurant, setNewRestaurant] = useState({})

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Hero heading="Restaurants" subHeading="Recommended by Students" type="restaurants" />
      <section className="container">
        <code>
          coded by{' '}
          <a href="https://github.com/brunomaria71" target="_blank" rel="noopener noreferrer">
            Maria Bruno
          </a>{' '}
          &amp;{' '}
          <a href="https://github.com/Arch0wl" target="_blank" rel="noopener noreferrer">
            Ann Starovoitov
          </a>
        </code>
        <br />
        <button onClick={handleShow} className={`btn ${styles['addrest-btn']}`}>
          Add Restaurant
        </button>
        <div className={styles['main-container-for-cards']}>
          <CardGroup className="justify-content-center">
            {!data ? (
              <div className={styles['main-container-for-cards--restaurant-spinner-outer']}>
                <Spinner
                  animation="border"
                  role="status"
                  className={styles['main-container-for-cards--restaurant-spinner']}
                ></Spinner>
              </div>
            ) : (
              data?.map((restaurant, index) => (
                <SingleRestaurant key={restaurant.id + index} restaurant={restaurant} />
              ))
            )}
          </CardGroup>
        </div>
      </section>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Restaurant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddNewForm
            handleClose={handleClose}
            newRestaurant={newRestaurant}
            setNewRestaurant={setNewRestaurant}
          />
        </Modal.Body>
      </Modal>
    </>
  )
}

export const getServerSideProps = async () => {
  // const res = await fetch("https://bocacode-intranet-api.web.app/restaurants")
  // const data = await res.json()
  const data = await FirebaseGet('restaurants')
  data?.sort((a, b) => b.timestamp - a.timestamp)
  return { props: { data } }
}
