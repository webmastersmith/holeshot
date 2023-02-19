import styles from './Footer.module.scss';
import { AiOutlineFacebook } from 'solid-icons/ai';
import { AiOutlineTwitter } from 'solid-icons/ai';
import { AiOutlineInstagram } from 'solid-icons/ai';
import { AiOutlineLinkedin } from 'solid-icons/ai';
import { FaBrandsTiktok } from 'solid-icons/fa';

export default function Footer() {
  return (
    <footer class={styles.footer}>
      <div class={styles.holeshot}>
        <h1>HOLESHOT</h1>
        <h2>ELECTRIC</h2>
        <img
          src="/header/logo/logo-white.svg"
          alt="Holeshot logo"
          class={styles.whiteLogo}
          width="100"
          height="100"
        />
        <p>Garrett Smith</p>
        <p>
          <a href="tel:9035044028">(903) 504-4028</a>
        </p>
        <p>
          <a href="mailto:garrett@holeshotelec.com">garrett@holeshotelec.com</a>
        </p>
        <p>14001 State Hwy 29 Suite 205</p>
        <p>Liberty Hill, TX 78642</p>
      </div>

      <div class={styles.services}>
        <h1>Services</h1>
        <p>Solar</p>
        <p>Commercial</p>
        <p>Industrial</p>
      </div>

      <div class={styles.reviews}>
        <h1>Reviews</h1>
        <div>⭐⭐⭐⭐⭐</div>
        <p>Google</p>
        <p>Yelp</p>
        <p>Facebook</p>
        <p>BBB</p>
        <p>Trustpilot</p>
      </div>

      <div class={styles.icons}>
        <h1>Connect</h1>
        <div>
          <a href="">
            <AiOutlineFacebook />
          </a>
          <a href="">
            <AiOutlineLinkedin />
          </a>
          <a href="">
            <AiOutlineTwitter />
          </a>
          <a href="">
            <AiOutlineInstagram />
          </a>
          <a href="">
            <FaBrandsTiktok />
          </a>
        </div>
      </div>
    </footer>
  );
}
