import React, { useEffect, useState, useParams } from 'react'
import News from '.'
import { Hero } from '../../components/Hero'
import styles from './News.module.scss'
// import { useRouter } from 'next/router'
// import { FirebaseGet } from '../../utilities/FirebaseUtils'

export default function NewsArticleDetails({ data }) {
  // const { newsId } = useParams()
  const [news, setNews] = useState()

  // useEffect(() => {
  //   fetch(`https://bocacode-intranet-api.web.app/news/${newsId}`)
  //     .then((response) => response.json())
  //     .then((data) => setNews(data))
  //     .catch(console.error)
  // }, [])

  return (
    <>
      <Hero heading="News" subHeading="Info about the news " type="events" />
      <section>
        <div className={styles['detailed-news-container']}>
          <div className={styles['header-image']}></div>
          <div className={styles['article-content']}>
            <div className={styles['article-header']}>
              <div className={styles['article-category']}>
                <a>News</a>
              </div>
              <h1 className={styles['detailed-news-title']}>Title: This is a Title</h1>
              <div className={styles['detailed-news-author']}>
                <a className={styles['detailed-news-avatar']}>
                  <img
                    height="80"
                    width="80"
                    src="https://i.pinimg.com/474x/c7/5c/7c/c75c7ce1259d8b5d273a6ed5831b0518.jpg"
                  />
                </a>
                <div className={styles['inner-news-header']}>
                  <span>
                    By <a className={styles['created-by']}>Author</a>
                  </span>
                  <p className={styles['created-at']}>Date</p>
                </div>
              </div>
            </div>
            <div className={styles['site-main article-text-wrap']}>
              <div className={styles['news-summary']}>This is a summary of the News Article.</div>
              <p className={styles['news-first']}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda voluptatibus
                ipsa accusamus, mollitia reiciendis veniam nemo. Deserunt recusandae error, quod
                quisquam necessitatibus voluptatibus, atque dignissimos voluptatem rerum, nisi minus
                exercitationem? Eligendi exercitationem repellat voluptate dolore molestias veniam
                eaque. Earum maiores perspiciatis facilis saepe? Molestiae, nisi praesentium dolor
                adipisci minus minima natus obcaecati sint possimus fuga? Quos dolorum reprehenderit
                officiis illum? Dolor eius recusandae quos labore necessitatibus harum nesciunt odio
                hic cum alias optio consequatur, ratione aperiam temporibus possimus corrupti
                accusamus at totam quasi a nulla nihil nemo eos? Sapiente, optio? Tempora aspernatur
                nulla quo commodi excepturi, aut praesentium nesciunt, nisi illo est, voluptatibus
                et sunt. Eum vero reiciendis, totam consectetur maiores id enim odit ab optio
                assumenda, nam nesciunt dolores.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, praesentium
                nesciunt aut similique nam iste nostrum dolore consectetur veniam harum cupiditate
                consequatur modi nisi culpa quaerat, commodi accusantium delectus molestiae. Illo
                facilis recusandae iusto numquam cumque voluptates omnis quasi modi? Eum quasi nam
                rerum, delectus officia dolores id dolore quis dolor eveniet quos? Porro ipsa quas
                debitis, reiciendis iusto doloribus. Natus nihil sit est molestiae odit quisquam, ab
                qui quam aliquid nam provident voluptatum quasi delectus quaerat accusantium
                expedita eos, explicabo soluta cupiditate. Quae ipsam molestiae eos alias iste!
                Voluptatibus! Molestiae nulla esse mollitia delectus veniam expedita eos
                repudiandae, quasi dolorem voluptatibus. Dolores alias a quasi asperiores, itaque
                minus, quos qui voluptatem nobis odio numquam at ipsum sunt voluptas quibusdam!
              </p>
            </div>
            <div className={styles['site-main entry-footer']}>
              {/* <div className={styles['share-article']}>
                <div className={styles['tags']}>Share this</div>
              </div> */}
              <div className={styles['entry-tags']}>
                <span className={styles['tags']}>Tags:</span>

                <div className={styles['news-heading-2']}>
                  <div className={styles['boxes']}>
                    <p className={styles['box-1']}>#JS</p>
                    <p className={styles['box-2']}>#REACT</p>
                    <p className={styles['box-3']}>#Job</p>
                    <p className={styles['box-3']}>#2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="container">
        <div className={styles['news-pic-container']}>
          <div className={styles['news-image']}>
            <hr />
            <img
              src="https://bocacode.com/assets/images/2021.7.27-BocaCode-Web-53.png"
              alt="Boca Code Instructors sitting in main room"
              className={styles['news-pic']}
            />
          </div>
        </div>
      </div> */}
    </>
  )
}
