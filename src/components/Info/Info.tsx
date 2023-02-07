import { lazy } from 'solid-js';
import styles from './Info.module.scss';
const Articles = lazy(() => import('./Articles/Articles'));

export default function Info() {
  return (
    <section class={styles.info}>
      <Articles />
    </section>
  );
}
