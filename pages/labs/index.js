import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'

// import AddNews from './AddNews'
import styles from './Labs.module.scss'
import { Hero } from './../../components/Hero'

export default function LabsList() {
  const [allNews, setAllNews] = useState()
  const [show, setShow] = useState()
  // const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_API_ENDPOINT}/news`)
  //     .then((response) => response.json())
  //     .then((promise) => {
  //       promise = promise.sort((a, b) => b.timestamp - a.timestamp)
  //       setAllNews(promise)
  //     })
  //     .catch((err) => console.log(err))
  // }, [])

  return (
    <>
      <Hero heading='Labs' subHeading='Cohort Labs' type='events' />
      <section className='container'>
        {/* <Button className={styles['btn-add-article']} variant='primary' onClick={handleShow}>
          Add New Labs
        </Button>
         */}

        <h2 className={styles['labs_header2']}>Intro to Computing</h2>
        <h3 className={styles['labs_header3']}>Week 1, Day 1</h3>
        <h6 className={styles['labs_header6']}>Monday, July 11th</h6>
        <p className={styles['labs-text']}>
          <ol>
            <li>
              Create a variable titled <strong>favColor </strong>with the value of your favorite color.
            </li>
            <li>Console.log that variable</li>
            <li>
              Create a variable titled <strong>countBag </strong>with the value of 5.
            </li>
            <li>
              Create a variable titled <strong>countShoe </strong>with the value of 4.
            </li>
            <li>
              Add the two variables <strong>countBag </strong> and <strong> countShoe</strong> and Console.log the total.
            </li>
            <li>
              Create a constant variable titled <strong>myName </strong>and add your name.
            </li>
            <li>
              Create a constant variable sumTotal and add <strong>myName </strong> and <strong>countBag </strong>
            </li>
            <li>Console.log sumTotal</li>
            <li>Change the math operator of sumTotal from addition to multiplication</li>
            <li>Console.log sumTotal</li>
            <h4 className={styles['labs_header4']}>Bonus Lab</h4>
          </ol>
          <ol>
            <li>Create a variable title truthIsOutThere and set it to boolean true.</li>
            <li>Create a variable title falseIsNotGood and set it to boolean false.</li>
            <li>console.log(truthIsOutThere + falseIsNotGood)</li>
            <div>Pop Quiz Hotshot:</div> Explain the result 14
            <li>Solve the following to create the result &#34;JohnCandleWick&#34;</li>
            <li>let nameFirst = &#34;John&#34;</li>
            <li>let nameMiddle = &#34;Candle&#34;</li>
            <li>let nameLast = Wick </li>
            <li> let nameFull = nameFirst + nameMiddle + nameLast</li>
            <li>Console.log(nameFull)</li>
          </ol>
        </p>
        <hr />
        <h2 className={styles['labs_header2']}>The World Translator</h2>
        <h3 className={styles['labs_header3']}>Week 1, Day 2</h3>
        <h6 className={styles['labs_header6']}>Tuesday, July 12th</h6>
        <p className={styles['labs-text']}>
          <ol>
            <li>Write a function named helloWorld that:</li>
            <li>- takes 1 argument, a language code (e.g. &#34;es&#34;, &#34;de&#34;, &#34;en&#34;)</li>
            <li>- returns &#34;Hello, World&#34; for the given language, for at least 3 languages. It should default to returning English.</li>
            <li>Call that function for each of the supported languages and log the result to make sure it works.</li>
          </ol>
        </p>
        <hr />
        <h2 className={styles['labs_header2']}>The Grade Assigner</h2>
        <h3 className={styles['labs_header3']}>Week 1, Day 2</h3>
        <h6 className={styles['labs_header6']}>Tuesday, July 12th</h6>
        <p className={styles['labs-text']}>
          <ol>
            <li>Write a function named assignGrade that:</li>
            <li> takes 1 argument, a number score.</li>
            <li> returns a grade for the score, either &#34;A&#34;, &#34;B&#34;, &#34;C&#34;, &#34;D&#34;, or &#34;F&#34;.</li>
            <li>Call that function for a few different scores and log the result to make sure it works.</li>
          </ol>
        </p>
        <hr />
        <h2 className={styles['labs_header2']}>The Pluralizer</h2>
        <h3 className={styles['labs_header3']}>Week 1, Day 2</h3>
        <h6 className={styles['labs_header6']}>Tuesday, July 12th</h6>
        <p className={styles['labs-text']}>
          <ol>
            <li>Write a function named pluralize that:</li>
            <li> takes 2 arguments, a noun and a number.</li>
            <li>returns the number and pluralized form, like &#34;5 cats&#34; or &#34;1 dog&#34;.</li>
            <li>Call that function for a few different scores and log the result to make sure it works.</li>
            <h4 className={styles['labs_header4']}>Bonus Lab</h4>
            <li>Make it handle a few collective nouns like &#34;sheep&#34; and &#34;geese&#34;.</li>
          </ol>
        </p>
        <hr />
        <h2 className={styles['labs_header2']}>Check if input variable is a number or not</h2>
        <h3 className={styles['labs_header3']}>Week 1, Day 2</h3>
        <h6 className={styles['labs_header6']}>Tuesday, July 12th</h6>
        <p className={styles['labs-text']}>
          <ol>
            <li>Function `isNumber()` checks if input variable is a number by using isNaN() in-built JavaScript function.</li>
            <li>
              <strong> Read more about isNan() from w3schools.com/jsref/jsref_isnan.asp. </strong>
            </li>
            <li>Print &#34;Variable is not a number&#34; if isNaN() returns true.</li>
            <li>Else print &#34;Variable is a valid number&#34; if isNaN() returns false.</li>
          </ol>
        </p>
        <hr />
        <h2 className={styles['labs_header2']}>Find the largest of two number</h2>
        <h3 className={styles['labs_header3']}>Week 1, Day 2</h3>
        <h6 className={styles['labs_header6']}>Tuesday, July 12th</h6>
        <p className={styles['labs-text']}>
          <ol>
            <li>Function `findLargest()` finds the largest between two number by using &#34;﹥&#34; and &#34;=&#34; operator in JavaScript.</li>
            <li> Print num1 is the largest if num1﹥num2.</li>
            <li>Print num2 is the largest if num1﹤num2.</li>
            <li> Else print num1 and num2 are equal when num1==num2.</li>
          </ol>
        </p>
        <hr />
        <h2 className={styles['labs_header2']}>Find the largest of three number</h2>
        <h3 className={styles['labs_header3']}>Week 1, Day 2</h3>
        <h6 className={styles['labs_header6']}>Tuesday, July 12th</h6>
        <p className={styles['labs-text']}>
          <ol>
            <li>Function `findLargest()` finds the largest of three number by using &#34;﹥&#34; and &#34;＆＆&#34; operator in JavaScript.</li>
            <li> Print num1 is the largest if num1﹥num2 and num1﹥num3.</li>
            <li> Print num2 is the largest if num2﹤num3.</li>
            <li>Else print num3.</li>
          </ol>
        </p>
        <hr />
      </section>

      {/* <div>
        {!allNews ? (
          <h2 id={styles['news_header2']}>Loading...</h2>
        ) : (
          <div>
            <>
              {allNews?.map((news) => {
                return (
                  <Card className={styles['news-card']} key={news.id} news={news}>
                    <h2 id={styles['news_header2']}>{news.title}</h2>
                    <h3 id={styles['news_header3']}>{news.author}</h3>
                    <h6 id={styles['news_header6']}>{new Date(news.createdAt._seconds * 1000).toLocaleDateString()}</h6>
                    <p className={styles['news-text']}>{news.body}</p>
                  </Card>
                )
              })}
            </>
          </div>
        )}
      </div> */}
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add News</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddNews handleClose={handleClose} />
        </Modal.Body>
      </Modal> */}
    </>
  )
}
