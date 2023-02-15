import styles from './AsaImage.module.scss';

export default function AsaImage() {
  return (
    <picture class={styles.bicsiImage}>
      <source
        type="image/avif"
        srcset="/electrical/asa/asa_19-8_240x101.avif 240w, /electrical/asa/asa_19-8_480x202.avif 480w"
        sizes="240px"
      />
      <source
        type="image/webp"
        srcset="/electrical/asa/asa_19-8_240x101.webp 240w, /electrical/asa/asa_19-8_480x202.webp 480w"
        sizes="240px"
      />
      <source
        type="image/jpg"
        srcset="/electrical/asa/asa_19-8_240x101.jpg 240w, /electrical/asa/asa_19-8_480x202.jpg 480w"
        sizes="240px"
      />
      <img
        src="/electrical/asa/asa_19-8_240x101.jpg"
        width="240"
        height="101"
        alt="Image of asa membership"
        class={styles.bicsiImage}
        loading="lazy"
      />
    </picture>
  );
}
