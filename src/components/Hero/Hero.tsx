import styles from './Hero.module.scss';
import TextBox from './TextBox/TextBox';

export default function Hero() {
  return (
    <div class={styles.hero}>
      <TextBox />
    </div>
  );
}
