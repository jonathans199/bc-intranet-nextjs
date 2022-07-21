import { Hero } from '../../components/Hero'
import styles from './Events.module.scss'
import { Carousel } from 'react-bootstrap'
import ImageGallery from 'react-image-gallery'

export default function Events() {
  return (
    <>
      <Hero heading='Events' subHeading='Boca Code Events and More' type='events' />

      <section className={`${styles['events']} container mb-5`}>
        <h2>Boca Code Happy Hour - TBD</h2>
      </section>
    </>
  )
}
