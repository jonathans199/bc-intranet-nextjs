import * as React from 'react'
import styles from './Hero.module.scss'

export const Hero = ({ heading, subHeading, type }: { heading: string; subHeading: string; type: string }) => {
  return (
    <div className={`${styles['hero']} ${styles[`hero-${type}`]} `}>
      <div className={`${styles['hero__heading']}`}>
        <h1>{heading}</h1>
        <h3>{subHeading}</h3>
      </div>
    </div>
  )
}
