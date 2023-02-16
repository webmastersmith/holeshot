import styles from './Footer.module.scss';
import Logo from '../Logo/Logo';

export default function Footer() {
  return (
    <footer class={styles.footer}>
      <div class={styles.footerLogo}>
        {/* <img src="/footer/splat.png" alt="splat" class={styles.splat} /> */}
        <Logo display={styles.logo} style={{ '--size': '7vw' }} />
      </div>
    </footer>
  );
}
