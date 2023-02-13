// @ts-nocheck
import styles from './Hero.module.scss';
import TextBox from './TextBox/TextBox';
import HeroImage from './HeroImage/HeroImage';

export default function Hero() {
  return (
    <div class={styles.hero}>
      <HeroImage />
      <TextBox />
    </div>
  );
}
