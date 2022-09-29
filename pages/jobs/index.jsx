import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Button, Container, Row, Col } from 'react-bootstrap'
import { FaMapMarkerAlt, FaRegBookmark, FaRegClock } from 'react-icons/fa'

import styles from './Jobs.module.scss'

export default function JobsPage() {
  return (
    <section className={styles['jobs-area']}>
      <Container>
        <div className={styles['jobs-area--heading']}>
          <div className={styles['jobs-area--title']}>
            <h2>Student Jobs</h2>
            <h6>15+ Recently Added Jobs</h6>
          </div>
          <div className={styles['jobs-area__browse']}>
            <Button bsPrefix={styles['jobs-area__browse--btn']}>Browse All Jobs</Button>
          </div>
        </div>
        <Row>
          <Col lg={9}>
            <ul className={styles['jobs-area__list']}>
              <li>
                <div className={styles['jobs-area__card']}>
                  <div className={styles['jobs-area__card--content']}>
                    <div className={styles['jobs-area__card--company']}>
                      <span>
                        <Image src="/" width={60} height={60} alt="Company Logo" />
                      </span>
                    </div>
                    <div className="jobs-area__card--info">
                      <h4>
                        <Link href="#">Front-end Software Engineer</Link>
                      </h4>
                      <ul>
                        <li>
                          <FaMapMarkerAlt color="#2e55fa" fontSize="1em" />
                          &nbsp;Boca Raton, Florida
                        </li>
                        <li>
                          <FaRegBookmark color="#2e55fa" fontSize="1em" />
                          &nbsp;Internship
                        </li>
                        <li>
                          <FaRegClock color="#2e55fa" fontSize="1em" />
                          &nbsp;Published 3 days ago
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
