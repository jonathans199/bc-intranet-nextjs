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
          <p className="add-article-text">
            Feel free to browse articles written by our students, alumni and instructors. To
            contribute, go ahead and add your own article.{' '}
          </p>
          <Button className={styles['btn-add-article']} variant="primary" onClick={handleShow}>
            Add New Article
          </Button>
        </div>
        <hr />
        <div>
          {!allNews ? (
            <h2 id={styles['news_header2']}>Loading...</h2>
          ) : (
            <div>
              <>
                {allNews?.map(news => {
                  return (
                    // <Link href={`/news/[id].js}`} className={styles['news-click']} key={news.id}>
                    <div key={news.id} className={styles['news-container']}>
                      {/* Placeholder image */}
                      <img
                        className={styles[('news-image', 'slide-in')]}
                        src="https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_960_720.jpg"
                        alt=""
                      ></img>

                      {/* <Card className={styles['news-card']}>
                          <h2 id={styles['news_header2']}>{news.title}</h2>
                          <h3 id={styles['news_header3']}>{news.author}</h3>
                          <h6 id={styles['news_header6']}>
                            {new Date(news.createdAt._seconds * 1000).toLocaleDateString()}
                          </h6>
                          <p className={styles['news-text']}>{news.body}</p>
                        </Card> */}

                      <div className={styles[('news-card-container', 'slide-in')]}>
                        <div className={styles['news-card']}>
                          <div className={styles['news-title-date-container']}>
                            <div className={styles['news-title-container']}>
                              <h1 id={styles['news_header2']}>{news.title}</h1>
                            </div>
                            <div className={styles['news-inner-triangle']}>
                              <div className={styles['news-date']}>
                                {new Date(news.createdAt._seconds * 1000).toLocaleDateString()}
                              </div>
                            </div>
                          </div>

                          <div className={styles['news-card-header']}>
                            {/* <h1 id={styles['news_header2']}>{news.title}</h1> */}
                            <h2 id={styles['news_header3']}>{news.author}</h2>
                            {/* <h6 id={styles['news_header6']}>
                              {new Date(news.createdAt._seconds * 1000).toLocaleDateString()}
                            </h6> */}
                            <p className={styles['news-text']}>{news.body}</p>
                          </div>
                          <footer className={styles['news-card-footer']}>
                            <Link
                              href={`/news/[id].js}`}
                              className={styles['news-click']}
                              key={news.id}
                            >
                              <p>Read more</p>
                            </Link>
                            {/* <div className={styles['arrow-container']}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-arrow-right"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                />
                              </svg>
                            </div> */}
                          </footer>
                        </div>
                      </div>
                    </div>
                    /* </Link> */
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
