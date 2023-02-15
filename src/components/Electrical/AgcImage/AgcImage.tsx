import styles from './AgcImage.module.scss';

export default function AgcImage() {
  return (
    <picture class={styles.agcImage}>
      <source
        type="image/avif"
        srcset="/electrical/agc/agc_1-1_100x100.avif 100w, /electrical/agc/agc_1-1_200x200.avif 200w, /electrical/agc/agc_1-1_300x300.avif 300w"
        sizes="100px"
      />
      <source
        type="image/webp"
        srcset="/electrical/agc/agc_1-1_100x100.webp 100w, /electrical/agc/agc_1-1_200x200.webp 200w, /electrical/agc/agc_1-1_300x300.webp 300w"
        sizes="100px"
      />
      <source
        type="image/png"
        srcset="/electrical/agc/agc_1-1_100x100.png 100w, /electrical/agc/agc_1-1_200x200.png 200w, /electrical/agc/agc_1-1_300x300.png 300w"
        sizes="100px"
      />
      <img
        src="/electrical/agc/agc_1-1_100x100.png"
        width="100"
        height="100"
        alt="Image of agc membership"
        class={styles.agcImage}
        loading="lazy"
      />
    </picture>
  );
}
