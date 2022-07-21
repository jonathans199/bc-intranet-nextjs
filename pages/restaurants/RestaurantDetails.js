import { useEffect, useState } from 'react'
// import { Button, ButtonGroup, Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import styles from './Restaurant.module.scss'

export default function RestaurantDetails() {
  const [restaurant, setRestaurant] = useState(null)
  const [canRate, setCanRate] = useState(true)
  const [rating, setRating] = useState(-1)
  const { id } = useParams()

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/restaurants/${id}`)
      .then((response) => response.json())
      .then((promise) => setRestaurant(promise))
      .catch((err) => console.log(err))
  }, [id])

  const sendRating = () => {
    if (canRate) {
      fetch(`${process.env.REACT_APP_API_ENDPOINT}/restaurants/${id}`, {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rating: rating }),
      })
        .then((response) => response.json())
        .then((data) => setCanRate(false))
        .catch((err) => console.log('Error rating:', err.message))
    }
  }

  return (
    <div style={{}}>
      {!restaurant ? (
        <h3 style={{ margin: 'auto' }}>Loading...</h3>
      ) : (
        <section>
          <div className={`container-fluid ${styles['detail']}`}>
            {' '}
            <img
              style={{ width: '100%', height: '300px' }}
              src={restaurant?.photoUrl || 'https://loremflickr.com/320/240/restaurant'}
              alt=""
            />
          </div>
          {/* // <Card className="bg-dark text-white" style={{ width: '30rem', margin: 'auto', padding: '1rem' }}>
        //   <Card.Img variant="top" src={restaurant?.photoUrl || 'https://loremflickr.com/320/240/restaurant'} />
        //   <Card.Body>
        //     <Card.Title>{restaurant?.name || 'Restaurant Name'}</Card.Title>
        //     <Card.Text>{restaurant?.address || 'Restaurant Address'}</Card.Text>
        //     <Card.Text>Rating: {restaurant?.rating}</Card.Text>
        //     <ButtonGroup aria-label="Rating">
        //       <Card.Title style={{ paddingRight: '1rem', paddingTop: '10px' }}>Rate:</Card.Title>
        //       <Button onClick={() => setRating(1)} variant="secondary">
        //         1
        //       </Button>
        //       <Button onClick={() => setRating(2)} variant="secondary">
        //         2
        //       </Button>
        //       <Button onClick={() => setRating(3)} variant="secondary">
        //         3
        //       </Button>
        //       <Button onClick={() => setRating(4)} variant="secondary">
        //         4
        //       </Button>
        //       <Button onClick={() => setRating(5)} variant="secondary">
        //         5
        //       </Button>
        //     </ButtonGroup>
        //   </Card.Body>
        //   <Button onClick={() => sendRating()} variant="primary" style={{ width: '50%', margin: 'auto' }}>
        //     Rate {restaurant?.name || 'Restaurant'}
        //   </Button>
        // </Card> */}
        </section>
      )}
    </div>
  )
}
