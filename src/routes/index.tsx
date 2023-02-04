import { lazy } from 'solid-js';
import styles from './index.module.scss';
import Hero from '~/components/Hero/Hero';
import Info from '~/components/Info/Info';

const Electrical = lazy(() => import('~/components/Electrical/Electrical'));
const Testimonials = lazy(() => import('~/components/Testimonials/Testimonials'));
const ContactForm = lazy(() => import('~/components/ContactForm/ContactForm'));

export default function Home() {
  return (
    <main class={styles.main}>
      <Hero />
      <Info />
      <Electrical />
      <Testimonials />
      <ContactForm />
    </main>
  );
}
