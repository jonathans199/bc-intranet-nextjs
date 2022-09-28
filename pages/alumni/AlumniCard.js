import React from 'react'
import styles from './Alumni.module.scss'
import Link from 'next/link'
import Image from 'next/image'

function AlumniCard({ id, selectedCardId, image, name, link, about, linkedin, hired, slug }) {
  const selection = selectedCardId ? { display: id === selectedCardId ? 'block' : 'none' } : {}

  return (
    <div style={selection}>
      <div className={`${styles['team-card']}`}>
        <Image
          className={`${styles['team-image']}`}
          width="284px"
          height="200px"
          src={`https://bocacode.com/assets/images/candidates/${slug}.png`}
          alt={name}
        />
        <div className="team-image-hover">
          {/* <Image
            className={`${styles["team-overlay-Image"]}`}
            src="/assets/images/team/team-overlay.png"
            alt="overlay"
          /> */}
          {/* <div className={`${styles['team-links-container']}`}>
            {linkedin && (
              <a className="team-link" href={linkedin} target="_blank" rel="noopener noreferrer">
                <Image src="/assets/images/icons/linkedin.svg" alt="linkedin" />
              </a>
            )}
          </div> */}
        </div>
        <div className={`${styles['team-content']}`}>
          <h3 className="team-name">{name}</h3>
          <p className="team-about" style={{ marginBottom: '3%', height: '200px' }}>
            {about}
          </p>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              href={`https://bocacode.com/candidates/software-engineer/${slug}`}
              className={`${styles['candidate-readmore']}`}
            >
              MORE &gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlumniCard
