import Logo from '../Logo/Logo';
import {
  FaSolidPhone,
  FaBrandsFacebookSquare,
  FaBrandsSquareTwitter,
  FaBrandsLinkedin,
} from 'solid-icons/fa';
import styles from './Nav.module.scss';

export default function Nav() {
  const size = 50;
  return (
    <header class={styles.header}>
      <div class={styles.icons}>
        {/* <FaBrandsFacebookSquare size={size} />
        <FaBrandsSquareTwitter size={size} />
        <FaBrandsLinkedin size={size} /> */}
      </div>
      <Logo style={{ '--height': '100px' }} />
      <div class={styles.phoneNumber}>
        {/* <FaSolidPhone />
        (903) 504-4028 */}
      </div>
    </header>
  );
}
