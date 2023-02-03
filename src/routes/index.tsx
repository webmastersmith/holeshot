import styles from './index.module.scss';
import Hero from '~/components/Hero/Hero';
import Electrical from '~/components/Electrical/Electrical';
import Info from '~/components/Info/Info';
import Testimonials from '~/components/Testimonials/Testimonials';
import ContactForm from '~/components/ContactForm/ContactForm';

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
