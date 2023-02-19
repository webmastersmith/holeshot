import { Head, Title, Meta, Link, Body, Scripts } from 'solid-start';
import styles from './contact.module.scss';
import ContactForm from '~/components/ContactForm/ContactForm';

export default function Contact() {
  return <ContactForm />;
}
