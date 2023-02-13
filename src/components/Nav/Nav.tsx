import Logo from '../Logo/Logo';
import styles from './Nav.module.scss';
import Button from '../Button/Button';
import TexasImage from './TexasImage/TexasImage';

export default function Nav() {
  return (
    <header class={styles.header}>
      <div class={styles.masterElec}>
        <TexasImage />
        <div class={styles.text}>
          <p>MASTER ELECTRICIAN</p>
          <p>TECL #37447</p>
          <p class={styles.phone}>(903) 504-4028</p>
        </div>
      </div>

      <Logo style={{ '--height': '100px' }} />

      <div class={styles.phoneNumber}>
        <Button style={{ '--height': '32px' }}>CONTACT US</Button>
      </div>
    </header>
  );
}
