import styles from './TexasImage.module.scss';

// 'header/texasFlag.png?w=100;200;300&f=png;avif;webp:fff&d=100&alt=Image of Texas Flag&sizes=100px&c=backup&c=texasImage&sharpen=true',
export default function TexasImage() {
  return (
    <picture class={styles.texasImage}>
      <source
        type="image/avif"
        srcset="/header/texasFlag/texasFlag_20-19_100x95.avif 100w, /header/texasFlag/texasFlag_22-21_200x191.avif 200w, /header/texasFlag/texasFlag_22-21_265x253.avif 265w"
        sizes="100px"
      />
      <source
        type="image/webp"
        srcset="/header/texasFlag/texasFlag_20-19_100x95.webp 100w, /header/texasFlag/texasFlag_22-21_200x191.webp 200w, /header/texasFlag/texasFlag_22-21_265x253.webp 265w"
        sizes="100px"
      />
      <source
        type="image/png"
        srcset="/header/texasFlag/texasFlag_20-19_100x95.png 100w, /header/texasFlag/texasFlag_22-21_200x191.png 200w, /header/texasFlag/texasFlag_22-21_265x253.png 265w"
        sizes="100px"
      />
      <img
        src="/header/texasFlag/texasFlag_20-19_100x95.png"
        width="100"
        height="95"
        alt="Image of Texas Flag"
        class={styles.texasImage}
      />
    </picture>
  );
}
