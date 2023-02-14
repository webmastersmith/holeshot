import styles from './ElectricalImage.module.scss';

export default function ElectricalImage() {
  return (
    <picture class={styles.electricalImage}>
      <source
        type="image/avif"
        srcset="/electrical/commercial/commercial_9-16_600x1067.avif 600w, /electrical/commercial/commercial_9-16_700x1244.avif 700w, /electrical/commercial/commercial_9-16_800x1422.avif 800w, /electrical/commercial/commercial_9-16_1200x2133.avif 1200w, /electrical/commercial/commercial_9-16_1500x2667.avif 1500w"
        sizes="100vw"
        media="(max-width: 550px)"
      />
      <source
        type="image/webp"
        srcset="/electrical/commercial/commercial_9-16_600x1067.webp 600w, /electrical/commercial/commercial_9-16_700x1244.webp 700w, /electrical/commercial/commercial_9-16_800x1422.webp 800w, /electrical/commercial/commercial_9-16_1200x2133.webp 1200w, /electrical/commercial/commercial_9-16_1500x2667.webp 1500w"
        sizes="100vw"
        media="(max-width: 550px)"
      />
      <source
        type="image/jpg"
        srcset="/electrical/commercial/commercial_9-16_600x1067.jpg 600w, /electrical/commercial/commercial_9-16_700x1244.jpg 700w, /electrical/commercial/commercial_9-16_800x1422.jpg 800w, /electrical/commercial/commercial_9-16_1200x2133.jpg 1200w, /electrical/commercial/commercial_9-16_1500x2667.jpg 1500w"
        sizes="100vw"
        media="(max-width: 550px)"
      />
      <source
        type="image/avif"
        srcset="/electrical/commercial/commercial_3-4_600x800.avif 600w, /electrical/commercial/commercial_3-4_1500x2000.avif 1500w, /electrical/commercial/commercial_3-4_2500x3333.avif 2500w"
        sizes="100vw"
        media="((min-width: 551px) and (max-width: 850px))"
      />
      <source
        type="image/webp"
        srcset="/electrical/commercial/commercial_3-4_600x800.webp 600w, /electrical/commercial/commercial_3-4_1500x2000.webp 1500w, /electrical/commercial/commercial_3-4_2500x3333.webp 2500w"
        sizes="100vw"
        media="((min-width: 551px) and (max-width: 850px))"
      />
      <source
        type="image/jpg"
        srcset="/electrical/commercial/commercial_3-4_600x800.jpg 600w, /electrical/commercial/commercial_3-4_1500x2000.jpg 1500w, /electrical/commercial/commercial_3-4_2500x3333.jpg 2500w"
        sizes="100vw"
        media="((min-width: 551px) and (max-width: 850px))"
      />
      <source
        type="image/avif"
        srcset="/electrical/commercial/commercial_16-9_900x506.avif 900w, /electrical/commercial/commercial_16-9_1200x675.avif 1200w, /electrical/commercial/commercial_16-9_1800x1013.avif 1800w, /electrical/commercial/commercial_16-9_2500x1406.avif 2500w"
        sizes="100vw"
        media="(min-width: 851px)"
      />
      <source
        type="image/webp"
        srcset="/electrical/commercial/commercial_16-9_900x506.webp 900w, /electrical/commercial/commercial_16-9_1200x675.webp 1200w, /electrical/commercial/commercial_16-9_1800x1013.webp 1800w, /electrical/commercial/commercial_16-9_2500x1406.webp 2500w"
        sizes="100vw"
        media="(min-width: 851px)"
      />
      <source
        type="image/jpg"
        srcset="/electrical/commercial/commercial_16-9_900x506.jpg 900w, /electrical/commercial/commercial_16-9_1200x675.jpg 1200w, /electrical/commercial/commercial_16-9_1800x1013.jpg 1800w, /electrical/commercial/commercial_16-9_2500x1406.jpg 2500w"
        sizes="100vw"
        media="(min-width: 851px)"
      />
      <img
        src="/electrical/commercial/commercial_16-9_700x394.jpg"
        width="700"
        height="394"
        alt="Image of electrical piping and conduit"
        class={styles.electricalImage}
      />
    </picture>
  );
}
