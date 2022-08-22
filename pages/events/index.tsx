import * as React from "react"
import { Hero } from "../../components/Hero"
import styles from "./Events.module.scss"

import { FirebaseGet, FirestorePost } from "../../utilities/FirebaseUtils"
import { useState } from "react"

interface IProps {
  data: Object[]
}

const Events = ({ data }: IProps) => {
  const [newEvent, setNewEvent] = useState({})

  const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    await FirestorePost("events", newEvent)

    window.location.reload()
  }

  return (
    <>
      <Hero heading="Events" subHeading="Boca Code Events and More" type="events" />

      <section className={`${styles["events"]} container mb-5`}>
        <h2>Boca Code Happy Hour - TBD</h2>
        <form action="submit">
          <label htmlFor="eventName">Event Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={e => setNewEvent({ name: e.target.value })}
          />
          {/* @ts-ignore  */}
          <button type="submit" onClick={() => handleSubmit(e)}>
            Add new Event
          </button>
        </form>
      </section>
      <section className="container">
        <ul>
          {data?.map((item, index) => (
            // @ts-ignore
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default Events

export const getServerSideProps = async () => {
  const data = await FirebaseGet("events")
  return { props: { data } }
}
