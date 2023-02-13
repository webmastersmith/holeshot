import styles from './HeroImage.module.scss';
// await createImages([
//   [
//     'public/hero/hero-full.jpg',
//     'w=600;800;1200;2400',
//     'a=9:16',
//     'f=avif;webp;jpg',
//     'fallbackWidth=700',
//     'fallbackFormat=jpg',
//     'alt=Image of house and pool with custom lighting',
//     'sizes=100vw',
//     'c=heroImage',
//     'media=(max-width: 600px)',
//   ],

//   [
//     'public/hero/hero.jpg',
//     'w=600;800;1200;2400',
//     'a=16:9',
//     'f=avif;webp;jpg',
//     'fallbackWidth=700',
//     'fallbackFormat=jpg',
//     'alt=Image of house and pool with custom lighting',
//     'sizes=100vw',
//     'c=heroImage',
//     'media=(min-width: 601px)',
//     'sharpen=true',
//   ],
// ]);

export default function HeroImage() {
  return (
    <picture class={styles.heroImage}>
      <source
        type="image/avif"
        srcset="/hero/hero-full/hero-full_9-16_600x1067.avif 600w, /hero/hero-full/hero-full_9-16_800x1422.avif 800w, /hero/hero-full/hero-full_9-16_900x1600.avif 900w"
        sizes="100vw"
        media="(max-width: 600px)"
      />
      <source
        type="image/webp"
        srcset="/hero/hero-full/hero-full_9-16_600x1067.webp 600w, /hero/hero-full/hero-full_9-16_800x1422.webp 800w, /hero/hero-full/hero-full_9-16_900x1600.webp 900w"
        sizes="100vw"
        media="(max-width: 600px)"
      />
      <source
        type="image/jpg"
        srcset="/hero/hero-full/hero-full_9-16_600x1067.jpg 600w, /hero/hero-full/hero-full_9-16_800x1422.jpg 800w, /hero/hero-full/hero-full_9-16_900x1600.jpg 900w"
        sizes="100vw"
        media="(max-width: 600px)"
      />
      <source
        type="image/avif"
        srcset="/hero/hero/hero_16-9_600x338.avif 600w, /hero/hero/hero_16-9_800x450.avif 800w, /hero/hero/hero_16-9_1200x675.avif 1200w, /hero/hero/hero_16-9_2400x1350.avif 2400w"
        sizes="100vw"
        media="(min-width: 601px)"
      />
      <source
        type="image/webp"
        srcset="/hero/hero/hero_16-9_600x338.webp 600w, /hero/hero/hero_16-9_800x450.webp 800w, /hero/hero/hero_16-9_1200x675.webp 1200w, /hero/hero/hero_16-9_2400x1350.webp 2400w"
        sizes="100vw"
        media="(min-width: 601px)"
      />
      <source
        type="image/jpg"
        srcset="/hero/hero/hero_16-9_600x338.jpg 600w, /hero/hero/hero_16-9_800x450.jpg 800w, /hero/hero/hero_16-9_1200x675.jpg 1200w, /hero/hero/hero_16-9_2400x1350.jpg 2400w"
        sizes="100vw"
        media="(min-width: 601px)"
      />
      <img
        src="/hero/hero/hero_16-9_700x394.jpg"
        width="700"
        height="394"
        alt="Image of house and pool with custom lighting"
        class={styles.heroImage}
      />
    </picture>
  );
}
