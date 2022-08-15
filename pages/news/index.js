import React, { useState, useEffect } from 'react'
import { Card, Modal, Button } from 'react-bootstrap'

import { Hero } from './../../components/Hero'
import AddNews from './AddNews'
import styles from './News.module.scss'
import Link from 'next/link'

export default function GetNews() {
  const [allNews, setAllNews] = useState()
  const [show, setShow] = useState()
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    fetch(`https://bocacode-intranet-api.web.app/news`)
      .then(response => response.json())
      .then(data => {
        // data = data?.sort((a, b) => b.timestamp - a.timestamp)
        setAllNews(data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Hero heading='News' subHeading='Boca Code News and More' type='events' />

      <section className='container'>
        <Button className={styles['btn-add-article']} variant='primary' onClick={handleShow}>
          Add New Article
        </Button>
        <div>
          {!allNews ? (
            <h2 id={styles['news_header2']}>Loading...</h2>
          ) : (
            <div>
              <>
                {allNews?.map(news => {
                  return (
                    <Link href={`/news/[id].js}`} className={styles['news-click']} key={news.id}>
                      <div>
                        <Card className={styles['news-card']}>
                          <h2 id={styles['news_header2']}>{news.title}</h2>
                          <h3 id={styles['news_header3']}>{news.author}</h3>
                          <h6 id={styles['news_header6']}>{new Date(news.createdAt._seconds * 1000).toLocaleDateString()}</h6>
                          <p className={styles['news-text']}>{news.body}</p>
                        </Card>
                      </div>
                    </Link>
                  )
                })}
              </>
            </div>
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
