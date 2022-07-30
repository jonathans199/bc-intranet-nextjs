import 'firebase/storage'
import { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { storage } from '../../firebaseConfig.js'

export default function AddNewForm({ handleClose, newRestaurant, setNewRestaurant }) {
  const [formReady, setFormReady] = useState(false)

  useEffect(() => {
    if (newRestaurant.photoUrl && newRestaurant.name && newRestaurant.rating) setFormReady(true)
  }, [newRestaurant])

  const uploadImage = async image => {
    try {
      const imageUpload = await storage.ref(`/restaurants/${image.name}`).put(image)

      if (imageUpload) {
        const downloadUrl = await storage.ref(`/restaurants/${image.name}`).getDownloadURL()
        setNewRestaurant({ ...newRestaurant, photoUrl: downloadUrl })
      }
    } catch (error) {
      console.error(error)
    }
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (formReady) {
      fetch(`https://bocacode-intranet-api.web.app/restaurants`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRestaurant),
      })
        .then(response => {
          if (response.status === 200) {
            alert('Restaurant was created properly')
            handleClose()
          } else {
            alert(response.status)
          }
        })
        .catch(err => console.error(err))
    }
  }

  return (
    <>
      <Form.Group as={Row} controlId='formHorizontalEmail'>
        <Form.Label column sm={4}>
          Restaurant Name:
        </Form.Label>
        <Col sm={7}>
          <Form.Control type='text' name='name' onChange={event => setNewRestaurant({ ...newRestaurant, name: event.target.value })} />
        </Col>
        <Form.Label column sm={4}>
          Address:
        </Form.Label>
        <Col sm={7}>
          <Form.Control type='text' name='address' onChange={event => setNewRestaurant({ ...newRestaurant, address: event.target.value })} />
        </Col>
        <Form.Label column sm={4}>
          Rating:
        </Form.Label>
        <Col sm={7}>
          <Form.Control type='text' name='rating' onChange={event => setNewRestaurant({ ...newRestaurant, rating: event.target.value })} />
        </Col>
        <Form.Label column sm={4}>
          Photo:
        </Form.Label>
        <Col sm={7}>
          <Form.Control type='file' name='photoUrl' onChange={event => uploadImage(event.target.files[0])} />
        </Col>
      </Form.Group>

      <div className='createRest'>
        <Button onClick={handleSubmit}>Create Restaurant</Button>
      </div>
    </>
  )
}
