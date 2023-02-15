import styles from './FancyTrim.module.scss';

export default function FancyTrim() {
  return (
    <picture class={styles.fancyTrim}>
      <source
        type="image/avif"
        srcset="/testimonials/fancyTrim/fancyTrim_17-2_170x20.avif 170w, /testimonials/fancyTrim/fancyTrim_17-2_340x40.avif 340w"
        sizes="170px"
      />
      <source
        type="image/webp"
        srcset="/testimonials/fancyTrim/fancyTrim_17-2_170x20.webp 170w, /testimonials/fancyTrim/fancyTrim_17-2_340x40.webp 340w"
        sizes="170px"
      />
      <source
        type="image/png"
        srcset="/testimonials/fancyTrim/fancyTrim_17-2_170x20.png 170w, /testimonials/fancyTrim/fancyTrim_17-2_340x40.png 340w"
        sizes="170px"
      />
      <img
        src="/testimonials/fancyTrim/fancyTrim_17-2_170x20.png"
        width="170"
        height="20"
        alt="Image of fancy trim"
        class={styles.fancyTrim}
        loading="lazy"
      />
    </picture>
  );
}
