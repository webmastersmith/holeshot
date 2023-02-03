import Logo from '../Logo/Logo';
import styles from './Nav.module.scss';
import Button from '../Button/Button';

export default function Nav() {
  const size = 50;
  return (
    <header class={styles.header}>
      <div class={styles.masterElec}>
        <img src="/header/texas-300x281.png" alt="State of Texas image" />
        <div class={styles.text}>
          <p>MASTER ELECTRICIAN</p>
          <p>TECL #37447</p>
        </div>
      </div>

      <Logo style={{ '--height': '100px' }} />

      <div class={styles.phoneNumber}>
        <Button style={{ '--height': '32px' }}>CONTACT US</Button>
      </div>
    </header>
  );
}
