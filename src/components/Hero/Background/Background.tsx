import styles from './Background.module.scss';

export default function Background() {
  return (
    <picture>
      <source
        type="image/avif"
        media="(max-width: 600px)"
        sizes="100vw"
        srcset="/hero/hero_9-16_600x1067.avif 600w, /hero/hero_9-16_759x1349.avif 759w, /hero/hero_9-16_759x1349.avif 759w"
      />
      <source
        type="image/webp"
        media="(max-width: 600px)"
        sizes="100vw"
        srcset="/hero/hero_9-16_600x1067.webp 600w, /hero/hero_9-16_759x1349.webp 759w, /hero/hero_9-16_759x1349.webp 759w"
      />
      <source
        type="image/jpg"
        media="(max-width: 600px)"
        sizes="100vw"
        srcset="/hero/hero_9-16_600x1067.jpeg 600w, /hero/hero_9-16_759x1349.jpeg 759w, /hero/hero_9-16_759x1349.jpeg 759w"
      />
      <source
        type="image/avif"
        media="(min-width: 601px)"
        sizes="100vw"
        srcset="/hero/hero_16-9_600x338.avif 600w, /hero/hero_16-9_1200x675.avif 1200w, /hero/hero_16-9_2400x1350.avif 2400w"
      />
      <source
        type="image/webp"
        media="(min-width: 601px)"
        sizes="100vw"
        srcset="/hero/hero_16-9_600x338.webp 600w, /hero/hero_16-9_1200x675.webp 1200w, /hero/hero_16-9_2400x1350.webp 2400w"
      />
      <source
        type="image/jpg"
        media="(min-width: 601px)"
        sizes="100vw"
        srcset="/hero/hero_16-9_600x338.jpeg 600w, /hero/hero_16-9_1200x675.jpeg 1200w, /hero/hero_16-9_2400x1350.jpeg 2400w"
      />
      <img
        src="/hero/hero_16-9_700x394.jpeg"
        width="700"
        height="394"
        alt="Image of house and pool with custom lighting"
        class={styles.pic}
      />
    </picture>
  );
}
