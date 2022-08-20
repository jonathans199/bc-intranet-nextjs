import styles from "./Layout.module.scss"

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <section className={styles["sub_footer_container"]}>
        <div className={styles["BC_logo_container"]}>
          <img src="./img/bc-logo-white.png" alt="Boca Code Logo in white" />
        </div>
        <div className={styles["contact_us_container"]}>
          <h2>Contact Us</h2>
          <p>Boca Code 7035 Beracasa Way, #207, Boca Raton, FL 33433</p>
          <p>(561) 473 4707 info@bocacode.com</p>
        </div>
        <div className={styles["socials_container"]}>
          <p>Socials</p>
          <div className={styles["social_images_container"]}>
            <img
              className={styles["social_logo"]}
              src="./img/facebookFooter.png"
              alt="FaceBook Logo in white"
            />
            <img
              className={styles["social_logo"]}
              src="./img/instagram.png"
              alt="Instagram Logo in white"
            />
            <img
              className={styles["social_logo"]}
              src="./img/twitter.png"
              alt="Twitter Logo in white"
            />
            <img
              className={styles["social_logo"]}
              src="./img/youtube.png"
              alt="YouTube Logo in white"
            />
          </div>
        </div>
      </section>
      <section className={styles["disclaimer"]}>
        <p>© 2021 BOCA CODE SCHOOL, LLC. ALL RIGHTS RESERVED. </p>
      </section>
    </footer>
  )
}
