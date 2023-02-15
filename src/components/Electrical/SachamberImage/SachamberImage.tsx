import styles from './SachamberImage.module.scss';

export default function SachamberImage() {
  return (
    <picture class={styles.sachamberImage}>
      <source
        type="image/avif"
        srcset="/electrical/sachamber/sachamber_5-4_144x115.avif 144w, /electrical/sachamber/sachamber_5-4_288x230.avif 288w"
        sizes="144px"
      />
      <source
        type="image/webp"
        srcset="/electrical/sachamber/sachamber_5-4_144x115.webp 144w, /electrical/sachamber/sachamber_5-4_288x230.webp 288w"
        sizes="144px"
      />
      <source
        type="image/png"
        srcset="/electrical/sachamber/sachamber_5-4_144x115.png 144w, /electrical/sachamber/sachamber_5-4_288x230.png 288w"
        sizes="144px"
      />
      <img
        src="/electrical/sachamber/sachamber_5-4_144x115.png"
        width="144"
        height="115"
        alt="Image of sachamber membership"
        class={styles.sachamberImage}
        loading="lazy"
      />
    </picture>
  );
}
