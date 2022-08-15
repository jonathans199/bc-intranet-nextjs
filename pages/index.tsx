/* eslint-disable @next/next/next-script-for-ga */
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from './Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Boca Code Intranet | By the students. For the students </title>
        <meta name='description' content='Boca Code Intranet | By the students. For the students ' />
        <link rel='icon' href='/favicon.ico' />
        {/* <!-- Google Tag Manager --> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TL5SHFS');`,
          }}></script> */}
        {/* <!-- End Google Tag Manager --> */}
      </Head>
      <section className={styles.home}>
        {/* <!-- Google Tag Manager (noscript) --> */}
        {/* <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-TL5SHFS'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript> */}
        {/* <!-- End Google Tag Manager (noscript) --> */}

        <div className={`${styles['home-cta']} container`}>
          <div className={`${styles['home-cta__left']}`}>
            <div className={`${styles['home-cta__text']}`}>
              <span>Welcome to</span>
              <h2>BOCA CODE INTRANET</h2>
              <small>Build by the Students. For the Students</small>
            </div>
            <div className={styles['home-cta__buttons']}></div>
          </div>
        </div>
      </section>

      <section className={`container ${styles['section-about']}`} id='about'>
        <h2>About Boca Code Intranet</h2>
        <p>
          Boca Code intranet started as an idea to have a central location for all Students and Alumni to find and add resources to better succeed in
          the program.
        </p>
        <p>
          Since everything in Slack is temporary, we decided to build this Web Application where we can keep all of the resources, events, news,
          homework labs, code challenges, recommended restaurants and more!
        </p>
        <hr />
      </section>
      <section className={`${styles['section-contribute']} container`}>
        <h2>How to contribute</h2>
        <p>
          So you want to contribute to this project? In order to contribute you have to understand the technology behind this project that meaning you
          have to be comfortable with one of the following: &nbsp;
        </p>

        <strong>
          <i> HTML, CSS, Javascript, Typescript, React.js, Node.js, Next.js</i>
        </strong>

        <p>
          If you are not yet comfortable with any of these, no worries, you should be by the end of your Cohort. After your course then the Teacher
          Assistants (TAs) &amp; Instructors will be able to help and guide you
        </p>

        <div className='my-5'>
          <h3>Steps to contribute </h3>
          <p>These are the steps to contribute to this project.</p>

          <div className='row'>
            <div className='col'>
              <img src='./img/number1.png' alt='number 1' />
              <h5>Meet with TAs or Instructors</h5>
            </div>
            <div className='col'>
              <img src='./img/number2.png' alt='number 2' />
              <h5>Get credentials &amp; files, Clone repo</h5>
            </div>
            <div className='col'>
              <img src='./img/number3.png' alt='number 3' />
              <h5>Install Dependencies, with yarn</h5>
            </div>
            <div className='col'>
              <img src='./img/number4.png' alt='number 4' />
              <h5>Branch out, into your feature branch</h5>
            </div>
            <div className='col'>
              <img src='./img/number5.png' alt='number 5' />
              <h5>Developer Resources</h5>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="mt-5">
          <img className="img-fluid" style={{ width: '150px', marginRight: '30px' }} src={apple} alt="Google logo" />
          <img className="img-fluid" style={{ width: '150px' }} src={droid} alt="Google logo" />
        </div> */}

      <section className={styles['section-links']} id='links'>
        <div className='container'>
          <h3>Important Links</h3>
          <div className={styles['section-links__articles']}>
            <ol>
              <h5>Boca Code</h5>
              <li>
                <a href='https://bocacode.slack.com/' target='_blank' rel='noreferrer'>
                  https://bocacode.slack.com/
                </a>
              </li>
              <li>
                <span>Github &#8594; </span>
                <a href='https://github.com/bocacode' target='_blank' rel='noreferrer'>
                  https://github.com/bocacode
                </a>
              </li>
            </ol>
            <ol>
              <h5>South Florida Tech Hub</h5>
              <li>
                <a href='https://techhubsouthflorida.org/' target='_blank' rel='noreferrer'>
                  https://techhubsouthflorida.org/
                </a>
              </li>

              <li>
                <a href='https://techhubsouthflorida.org/careers/' target='_blank' rel='noreferrer'>
                  Careers
                </a>
              </li>
            </ol>
            <ol>
              <h5>Florida JS</h5>
              <li>
                <a href='https://floridajs.com/' target='_blank' rel='noreferrer'>
                  https://floridajs.com/
                </a>
              </li>
              <li>
                <a href='https://www.youtube.com/c/floridajs/videos' target='_blank' rel='noreferrer'>
                  YouTube
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>
      <section className={`container ${styles['section-about']}`} id='about'>
        <h2>Active Contributors</h2>
        <p>
          <strong>Cohort 6 - 2022:</strong>
          <p>
            Arthur Silva, Maria Bruno, Ann Starovoitov, Josh Philip, Carlie Duperval, Ludwingson Morisseau, Neil Bennett, Miguel Gomez, Anneer Fidalgo
          </p>
          <strong>Fall 2021 Cohort:</strong>
          <br />
          Peter Lewandowski
        </p>
        <strong>Leads: </strong>
        <p>Matthew McKney, Peter Lewandowski</p>
        <p>Thank you for all your efforts</p>
        <hr />
        <h2>Past Contributors</h2>
        <strong>Cohort 5 - 2021:</strong>
        <br />
        Ashley Dennis, Danielle Kom, Deyvin Cano
      </section>
    </div>
  )
}

export default Home
