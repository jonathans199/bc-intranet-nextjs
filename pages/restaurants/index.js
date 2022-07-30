import { useEffect, useState } from 'react'
import { CardGroup, Modal, Spinner } from 'react-bootstrap'

import { Hero } from '../../components/Hero'
import AddNewForm from '../../pages/restaurants/AddNewForm'
import styles from './Restaurant.module.scss'
import SingleRestaurant from './SingleRestaurant'

export default function Restaurants() {
  const [allRestaurants, setAllRestaurants] = useState()
  const [newRestaurant, setNewRestaurant] = useState({})

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    fetch(`https://bocacode-intranet-api.web.app/restaurants`)
      .then(response => response.json())
      .then(promise => {
        promise = promise.sort((a, b) => b.timestamp - a.timestamp)
        setAllRestaurants(promise)
      })
      .catch(err => console.log(err))
  }, [newRestaurant])

  return (
    <>
      <Hero heading='Restaurants' subHeading='Recommended by Students' type='restaurants' />
      <section className='container'>
        <code>
          coded by{' '}
          <a href='https://github.com/brunomaria71' target='_blank' rel='noopener noreferrer'>
            Maria Bruno
          </a>{' '}
          &amp;{' '}
          <a href='https://github.com/Arch0wl' target='_blank' rel='noopener noreferrer'>
            Ann Starovoitov
          </a>
        </code>
        <br />
        {/* <button onClick={handleShow} className={`btn ${styles['addrest-btn']}`}>
          Add Restaurant
        </button> */}
        <div className={styles['main-container-for-cards']}>
          <CardGroup className='justify-content-center'>
            {!allRestaurants ? (
              <div className={styles['main-container-for-cards--restaurant-spinner-outer']}>
                <Spinner animation='border' role='status' className={styles['main-container-for-cards--restaurant-spinner']}></Spinner>
              </div>
            ) : (
              allRestaurants?.map(restaurant => <SingleRestaurant key={restaurant.id} restaurant={restaurant} />)
            )}
          </CardGroup>
        </div>
      </section>
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
