import { useState } from 'react'
import { CardGroup, Modal, Spinner } from 'react-bootstrap'

import styles from './Restaurant.module.scss'
import { Hero } from '../../components/Hero'
import AddNewForm from '../../pages/restaurants/AddNewForm'
import SingleRestaurant from './SingleRestaurant'

const Restaurants = ({ allRestaurants }) => {
  const [newRestaurant, setNewRestaurant] = useState({})

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Hero heading='Restaurants' subHeading='Near by recommended restaurants' type='news' />
      <button onClick={handleShow} className={`btn ${styles['addrest-btn']}`}>
        Add Restaurant
      </button>
      <div className={styles['main-container-for-cards']}>
        <CardGroup className='d-flex justify-content-center mb-5'>
          {!allRestaurants ? (
            <Spinner animation='border' role='status' style={{ color: 'white' }}></Spinner>
          ) : (
            allRestaurants?.map(restaurant => <SingleRestaurant key={restaurant.id} restaurant={restaurant} />)
          )}
        </CardGroup>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Restaurant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddNewForm handleClose={handleClose} newRestaurant={newRestaurant} setNewRestaurant={setNewRestaurant} />
        </Modal.Body>
      </Modal>
    </>
  )
}

Restaurants.getInitialProps = async () => {
  const response = await fetch('https://bocacode-intranet-api.web.app/restaurants')
  const result = await response.json()

  return { allRestaurants: result }
}

export default Restaurants
