import styles from './NecaImage.module.scss';

export default function NecaImage() {
  return (
    <picture class={styles.necaImage}>
      <source
        type="image/avif"
        srcset="/electrical/neca/neca_11-6_210x115.avif 210w, /electrical/neca/neca_11-6_420x229.avif 420w"
        sizes="210px"
      />
      <source
        type="image/webp"
        srcset="/electrical/neca/neca_11-6_210x115.webp 210w, /electrical/neca/neca_11-6_420x229.webp 420w"
        sizes="210px"
      />
      <source
        type="image/jpg"
        srcset="/electrical/neca/neca_11-6_210x115.jpg 210w, /electrical/neca/neca_11-6_420x229.jpg 420w"
        sizes="210px"
      />
      <img
        src="/electrical/neca/neca_11-6_210x115.jpg"
        width="210"
        height="115"
        alt="Image of sachamber membership"
        class={styles.necaImage}
        loading="lazy"
      />
    </picture>
  );
}
