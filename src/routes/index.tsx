import styles from './index.module.scss';
import Hero from '~/components/Hero/Hero';
import Electrical from '~/components/Electrical/Electrical';
import Info from '~/components/Info/Info';
import Testimonials from '~/components/Testimonials/Testimonials';
import ContactForm from '~/components/ContactForm/ContactForm';
import Footer from '~/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Info />
      <Electrical />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
