import Button from '../Button/Button';
import styles from './ContactForm.module.scss';
import FormComponent from './FormComponent/FormComponent';
import Garrett from './Garrett/Garrett';

export default function ContactForm() {
  return (
    <section class={styles.contactForm} id="contact">
      <Garrett />
      <FormComponent />
    </section>
  );
}
