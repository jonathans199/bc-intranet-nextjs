import React, { useState, useEffect } from 'react'
import { Card, Modal, Button } from 'react-bootstrap'

import { Hero } from './../../components/Hero'
import AddNews from './AddNews'
import styles from './News.module.scss'
import Link from 'next/link'
import { FirebaseGet } from '../../utilities/FirebaseUtils'

// export default function GetNews() {
//   const [allNews, setAllNews] = useState()
//   const [show, setShow] = useState()
//   const handleClose = () => setShow(false)
//   const handleShow = () => setShow(true)

//   useEffect(() => {
//     fetch(`https://bocacode-intranet-api.web.app/news`)
//       .then(response => response.json())
//       .then(data => {
//         // data = data?.sort((a, b) => b.timestamp - a.timestamp)
//         setAllNews(data)
//       })
//       .catch(err => console.log(err))
//   }, [])

function NewsCard({ news }) {
  return (
    <>
      <figure className={styles['news-card']}>
        <div>
          {/* Placeholder image */}
          <img src="https://bocacode.com/assets/images/laptop.jpg" alt="newspaper" />
        </div>
        <figcaption>
          <div className={styles['date']}>{new Date(news.createdAt).toLocaleDateString()}</div>
          <h3 id={styles['news_header2']}>{news.title}</h3>
          <h2 id={styles['news_header3']}>{news.author}</h2>
          <p>{news.body}</p>
          <footer>
            <Link href={`/news/[id].js}`} className={styles['news-click']} key={news.id}>
              <p>Read more</p>
            </Link>
          </footer>
        </figcaption>
      </figure>
    </>
  )
}

export default function News({ data }) {
  const [allNews, setAllNews] = useState()
  const [show, setShow] = useState()
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Hero
        className={styles['news-hero']}
        heading="News"
        subHeading="Learn about NEWS of Boca Code"
        type="events"
      />

      <section className={styles['container']}>
        <div className={styles['add-article-section']}>
          <h1 className="add-article-header">
            There is always some interesting news to share at Boca Code!
          </h1>
          <p className={styles['add-article-text']}>
            Feel free to browse articles written by our students, alumni and instructors.{' '}
          </p>
          <Button className={styles['btn-add-article']} variant="primary" onClick={handleShow}>
            Add New Article
          </Button>
        </div>
        <hr />
        <div className={styles['news-container']}>
          {/* {!allNews ? ( */}

          {!data ? (
            <h2 id={styles['news_header2']}>Loading...</h2>
          ) : (
            data?.map(news => <NewsCard key={news.id} news={news} />)
          )}
        </div>
      </section>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add News</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddNews handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export const getServerSideProps = async () => {
  const data = await FirebaseGet('news')
  // console.log({ data })
  return { props: { data } }
}
