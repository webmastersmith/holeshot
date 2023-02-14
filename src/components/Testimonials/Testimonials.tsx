import { lazy } from 'solid-js';
import Slider from './Slider/Slider';
import styles from './Testimonials.module.scss';

const TestimonialImage = lazy(() => import('./TestimonialImage/TestimonialImage'));

export default function Testimonials() {
  return (
    <section class={styles.testimonials}>
      <TestimonialImage />

      <div class={styles.shadow}></div>

      <div class={styles.textBox}>
        <h1>Reviews</h1>
        <img src="/testimonials/heading-line-white.png" alt="fancy trim" />
        <Slider />
      </div>
    </section>
  );
}
