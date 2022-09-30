import React from 'react'
import style from './Tutorials.module.scss'
import { Hero } from '../../components/Hero'
import VideoCards from './VideoCards'

export default function tutorials() {
  return (
    <>
      <Hero heading="Tutorials" subHeading="Cohort Tutorials" type="events" />
      <section>
        <div>
          <VideoCards />
        </div>
      </section>
    </>
  )
}
