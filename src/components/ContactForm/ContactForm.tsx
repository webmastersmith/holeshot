import FormComponent from './FormComponent/FormComponent';
import Garrett from './Garrett/Garrett';
import styles from './ContactForm.module.scss';

export default function ContactForm() {
  return (
    <section class={styles.contactForm} id="contact">
      <Garrett />
      <FormComponent />
    </section>
  );
}
