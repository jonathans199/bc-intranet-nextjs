import { useEffect, useState } from "react"
import { Button, Col, Form, Row, Spinner } from "react-bootstrap"
import { storage, firestore } from "../../firebaseConfig"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { collection, addDoc } from "firebase/firestore"

export default function AddNewForm({ handleClose, newRestaurant, setNewRestaurant }) {
  const [formReady, setFormReady] = useState(false)
  const [image, setImage] = useState()
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    if (image && newRestaurant.name && newRestaurant.rating) setFormReady(true)
  }, [newRestaurant, image])

  const addInFirestore = async url => {
    try {
      const restaurantToSend = {
        address: newRestaurant.address,
        name: newRestaurant.name,
        rating: newRestaurant.name,
      }
      restaurantToSend.photoUrl = url
      const docRef = await addDoc(collection(firestore, "restaurants"), restaurantToSend)
      console.log("Document written with ID: ", docRef.id)
      handleClose()
      window.location.reload()
    } catch (err) {
      throw err
    }
  }

  const uploadImage = () => {
    const storageRef = ref(storage, `restaurants/${newRestaurant.name}`)
    const uploadTask = uploadBytesResumable(storageRef, image)
    uploadTask.on(
      "state_changed",
      snapshot => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log("Upload is " + progress + "% done")
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused")
            break
          case "running":
            console.log("Upload is running")
            setUploading(true)
            break
        }
      },
      error => {
        throw error
      },
      async () => {
        // Handle successful uploads on complete
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
        setNewRestaurant({ ...newRestaurant, photoUrl: downloadURL })
        await addInFirestore(downloadURL)
      }
    )
  }

  return (
    <>
      <Form.Group as={Row} controlId="formHorizontalEmail">
        <Form.Label column sm={4}>
          Restaurant Name:
        </Form.Label>
        <Col sm={7}>
          <Form.Control
            type="text"
            name="name"
            onChange={event => setNewRestaurant({ ...newRestaurant, name: event.target.value })}
          />
        </Col>
        <Form.Label column sm={4}>
          Address:
        </Form.Label>
        <Col sm={7}>
          <Form.Control
            type="text"
            name="address"
            onChange={event => setNewRestaurant({ ...newRestaurant, address: event.target.value })}
          />
        </Col>
        <Form.Label column sm={4}>
          Rating:
        </Form.Label>
        <Col sm={7}>
          <Form.Control
            type="number"
            max="5"
            min="0"
            name="rating"
            onChange={event => setNewRestaurant({ ...newRestaurant, rating: event.target.value })}
          />
        </Col>
        <Form.Label column sm={4}>
          Photo:
        </Form.Label>
        <Col sm={7}>
          <Form.Control
            type="file"
            name="photoUrl"
            onChange={event => setImage(event.target.files[0])}
          />
        </Col>
      </Form.Group>

      <div className="createRest">
        <Button disabled={!formReady} onClick={uploadImage}>
          Add Restaurant
        </Button>

        {uploading ? <Spinner animation="border" role="status" /> : ""}
      </div>
    </>
  )
}
