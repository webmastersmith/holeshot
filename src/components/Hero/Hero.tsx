// @ts-nocheck
import styles from './Hero.module.scss';
import TextBox from './TextBox/TextBox';

// IMAGES
// 9:16
import imageTall from './hero.jpg?aspect=9:16&w=675;1350&format=avif;webp;jpg&picture';
// 16:9 ratio
import image from './hero.jpg?w=600;800;1200;2400&format=avif;webp;jpg&picture';
import { src as placeholder, width, height } from './hero.jpg?width=800&metadata';
import { artDirection, ImageObj, defaultImg } from '~/utils/img';

export default function Hero() {
  function createPic(el: HTMLElement) {
    const sizes = '100vw';
    const phone = '(max-width: 600px)';
    const tablet = '(min-width: 601px)';
    const alt = 'Image of house and pool with nice lighting features';
    const imgInfo: ImageObj[] = [
      { img: imageTall, sizes, media: phone },
      { img: image, sizes, media: tablet },
    ];
    const defaultImage: defaultImg = {
      placeholder,
      width,
      height,
      alt,
    };
    el.innerHTML = artDirection(el, imgInfo, defaultImage, styles.pic);
  }

  return (
    <div class={styles.hero}>
      {/* <img src="/hero/hero.jpg" sizes="100vw" srcset="/hero/hero.jpg 2400w" loading="eager" /> */}
      <picture ref={(el) => createPic(el)}></picture>
      <TextBox />
    </div>
  );
}
