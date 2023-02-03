import { A } from 'solid-start';
import styles from './LinkBar.module.scss';
import { FaSolidPhone } from 'solid-icons/fa';

export default function LinkBar() {
  return (
    <nav class={styles.linkBar}>
      <A href="/" activeClass={styles.active} inactiveClass={styles.inactive} end={true}>
        HOME
      </A>
      <A href="/services" activeClass={styles.active} inactiveClass={styles.inactive} end={true}>
        SERVICES
      </A>
      <A href="/gallery" activeClass={styles.active} inactiveClass={styles.inactive} end={true}>
        GALLERY
      </A>
      <A href="/contact" activeClass={styles.active} inactiveClass={styles.inactive} end={true}>
        CONTACT
      </A>
      <a href="tel:9035044028" class={styles.phone}>
        <FaSolidPhone size={20} />
        (903) 504-4028
      </a>
    </nav>
  );
}
