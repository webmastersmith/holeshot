import styles from './Electrical.module.scss';
import { lazy } from 'solid-js';
import agc from '/electrical/agc-logo.png';
const Background = lazy(() => import('./Background/Background'));
export default function Electrical() {
  return (
    <section class={styles.electrical}>
      <Background />
    </section>
  );
}
