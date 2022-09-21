import styles from './Layout.module.scss'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className={styles['footer']}>
      <section className={styles['sub_footer_container']}>
        <div className={styles['BC_logo_container']}>
          <img src="./img/bc-logo-white.png" alt="Boca Code Logo in white" />
        </div>
        <div className={styles['sub_footer_link_container']}>
          <div className={styles['footer_link_group']}>
            <b>Mobile app</b>
            <ul>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Live share</a>
              </li>
              <li>
                <a href="#">Video record</a>
              </li>
            </ul>
          </div>
          <div className={styles['footer_link_group']}>
            <b>Community</b>
            <ul>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Live share</a>
              </li>
              <li>
                <a href="#">Video record</a>
              </li>
            </ul>
          </div>
          <div className={styles['footer_link_group']}>
            <b>Company</b>
            <ul>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Live share</a>
              </li>
              <li>
                <a href="#">Video record</a>
              </li>
            </ul>
          </div>
          <div className={styles['footer_btn_group']}>
            <button type="button" className={'btn ' + styles['btn-pink']}>
              Register
            </button>
            <button type="button" className={'btn ' + styles['btn-pink-outlined']}>
              Login
            </button>
          </div>
        </div>
      </section>
      <section className={styles['disclaimer']}>
        <span>© 2021 BOCA CODE SCHOOL, LLC. ALL RIGHTS RESERVED. </span>
        <div className={styles['socials_container']}>
          <span>Follow us:</span>
          <div className={styles['social_images_container']}>
            <Image
              className={styles['social_logo']}
              src="/img/facebookFooter.png"
              alt="FaceBook Logo in white"
              width={32}
              height={32}
            />

            <Image
              className={styles['social_logo']}
              src="/img/instagram.png"
              alt="Instagram Logo in white"
              width={32}
              height={32}
            />

            <Image
              className={styles['social_logo']}
              src="/img/twitter.png"
              alt="Twitter Logo in white"
              width={32}
              height={32}
            />
            <Image
              className={styles['social_logo']}
              src="/img/youtube.png"
              alt="YouTube Logo in white"
              width={32}
              height={32}
            />
          </div>
        </div>
      </section>
    </footer>
  )
}
