import { lazy } from 'solid-js';
import styles from './Testimonials.module.scss';

const Background = lazy(() => import('./Background/Background'));
const Slider = lazy(() => import('./Slider/Slider'));

export default function Testimonials() {
  return (
    <section class={styles.testimonials}>
      <Background />
      <div class={styles.textBox}>
        <h1>Reviews</h1>
        <img src="/testimonials/heading-line-white.png" alt="fancy trim" />
        <Slider />
      </div>
    </section>
  );
}
