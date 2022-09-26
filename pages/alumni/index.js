import { useState } from 'react'
import { Hero } from '../../components/Hero'

import styles from './Alumni.module.scss'
import AlumniCard from './AlumniCard'

export default function Alumni({ data }) {
  const [candidates] = useState(data)

  return (
    <>
      <Hero heading="Alumni" subHeading="All" type="alumni" />
      <section className={`container mb-5`}>
        <h2>All Alumni</h2>
      </section>
      <section className="container">
        <div className={`${styles['candidates-cards-container']}`}>
          {!candidates ? (
            <h2>Loading...</h2>
          ) : (
            candidates.map((t, i) => (
              <AlumniCard
                id={t.id}
                key={i}
                image={t.image}
                name={t.name}
                about={t.about}
                linkedin={t.linkedin}
                slug={t.userSlug}
                // hired={t.hired}
                link={`/candidates/software-engineer/${t.userSlug}`}
              />
            ))
          )}
        </div>
      </section>
    </>
  )
}

export const getServerSideProps = async () => {
  try {
    const rawData = await fetch('https://bocacode-api.web.app/candidates')
    const data = await rawData.json()
    return { props: { data } }
  } catch (err) {
    return
  }
}
