import * as React from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { firestore } from '../../firebaseConfig'
import ImageGallery from 'react-image-gallery'

import { UserContext } from '../_app'
import { Hero } from '../../components/Hero'
import styles from './News.module.scss'
import { Card, CardGroup, Button, Image } from 'react-bootstrap'
import ImageUploader from '../../components/ImageUploader/ImageUploader'

const event = 'news'

export default function Fiesta() {
  const { user } = React.useContext(UserContext)
  const [gallery, setGallery] = React.useState<String[]>([])

  React.useEffect(() => {
    const tempAllImages: string[] = []
    const getAllImages = async () => {
      // @ts-ignore
      const querySnapshot = await getDocs(collection(firestore, event))
      for (const doc of querySnapshot.docs) {
        let thisDoc: Object = doc.data()
        // @ts-ignore
        thisDoc.id = doc.id
        // @ts-ignore
        tempAllImages.push(thisDoc)
      }
      setGallery(tempAllImages)
    }

    getAllImages()
  }, [])

  return (
    <>
      <Hero heading='News' subHeading='Boca Code &amp; tech events' type='news' />
      <section className={`${styles['fiesta-info']} container`}>
        <h1>Tech Events</h1>
        <p>When, where and whats happening in tech in South Florida</p>
        <code>#tech, #bitcoin, #developers</code>

        <section className={`${styles['events']} container my-5 text-center`}>
          tbd
        </section>
      </section>
      {user && <ImageUploader page={event} setGallery={setGallery} gallery={gallery} />}
    </>
  )
}
