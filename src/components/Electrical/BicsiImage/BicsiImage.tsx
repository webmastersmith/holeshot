import styles from './BicsiImage.module.scss';

export default function BicsiImage() {
  return (
    <picture class={styles.bicsiImage}>
      <source
        type="image/avif"
        srcset="/electrical/bicsi/bicsi_1-1_100x100.avif 100w, /electrical/bicsi/bicsi_1-1_200x200.avif 200w, /electrical/bicsi/bicsi_1-1_300x300.avif 300w"
        sizes="100px"
      />
      <source
        type="image/webp"
        srcset="/electrical/bicsi/bicsi_1-1_100x100.webp 100w, /electrical/bicsi/bicsi_1-1_200x200.webp 200w, /electrical/bicsi/bicsi_1-1_300x300.webp 300w"
        sizes="100px"
      />
      <source
        type="image/png"
        srcset="/electrical/bicsi/bicsi_1-1_100x100.png 100w, /electrical/bicsi/bicsi_1-1_200x200.png 200w, /electrical/bicsi/bicsi_1-1_300x300.png 300w"
        sizes="100px"
      />
      <img
        src="/electrical/bicsi/bicsi_1-1_100x100.png"
        width="100"
        height="100"
        alt="Image of bicsi membership"
        class={styles.bicsiImage}
        loading="lazy"
      />
    </picture>
  );
}
