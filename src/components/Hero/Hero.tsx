// @ts-nocheck
import { onMount, createSignal } from 'solid-js';
import styles from './Hero.module.scss';
import TextBox from './TextBox/TextBox';
// 9:16
import imageTall from './hero.jpg?aspect=9:16&w=675;1350&format=avif;webp;jpg&picture';
// 16:9 ratio
import image from './hero.jpg?w=600;800;1200;2400&format=avif;webp;jpg&picture';
import { src as placeholder, width, height } from './hero.jpg?width=800&metadata';

export default function Hero() {
  const [pic, setPic] = createSignal('');

  const sizes = '100vw';
  const phone = '(max-width: 600px)';
  const tablet = '(min-width: 601px)';
  const alt = 'Women Lying Near to a Multicolored Glass Window Close-up Photography';
  let sources = [];

  // 9:16 aspect ratio maker media changes at <=600px
  for (const [format, images] of Object.entries(imageTall.sources)) {
    const s = `<source media="${phone}" sizes="${sizes}" srcset="${images
      .map((i) => `${i.src} ${i.w}w`)
      .join(', ')}" type="image/${format}" />`;
    sources.push(s);
  }
  // 16:9 file type maker media changes at >=601px
  for (const [format, images] of Object.entries(image.sources)) {
    const s = `<source media="${tablet}" sizes="${sizes}" srcset="${images
      .map((i) => `${i.src} ${i.w}w`)
      .join(', ')}" type="image/${format}" />`;
    sources.push(s);
  }
  const so = sources.join('');

  onMount(() => {
    const html = new DOMParser().parseFromString(
      `<picture>${so}<img src="${placeholder}" width="${width}" height="${height}" alt="${alt}" class="${styles.pic}" /></picture>`,
      'text/html'
    ).body.firstChild;
    setPic(html);
  });

  return (
    <div class={styles.hero}>
      {/* <img src="/hero/hero.jpg" sizes="100vw" srcset="/hero/hero.jpg 2400w" loading="eager" /> */}
      {pic}
      <TextBox />
    </div>
  );
}
