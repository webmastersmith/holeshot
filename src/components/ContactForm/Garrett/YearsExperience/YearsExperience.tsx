import styles from './YearsExperience.module.scss';

export default function YearsExperience(props: any) {
  return (
    <picture class={props.years}>
      <source
        type="image/avif"
        srcset="/contactUs/years/years_1-1_200x200.avif 200w, /contactUs/years/years_1-1_400x400.avif 400w, /contactUs/years/years_1-1_600x600.avif 600w, /contactUs/years/years_1-1_800x800.avif 800w"
        sizes="125px"
      />
      <source
        type="image/webp"
        srcset="/contactUs/years/years_1-1_200x200.webp 200w, /contactUs/years/years_1-1_400x400.webp 400w, /contactUs/years/years_1-1_600x600.webp 600w, /contactUs/years/years_1-1_800x800.webp 800w"
        sizes="125px"
      />
      <source
        type="image/png"
        srcset="/contactUs/years/years_1-1_200x200.png 200w, /contactUs/years/years_1-1_400x400.png 400w, /contactUs/years/years_1-1_600x600.png 600w, /contactUs/years/years_1-1_800x800.png 800w"
        sizes="125px"
      />
      <img
        src="/contactUs/years/years_1-1_125x125.png"
        width="125"
        height="125"
        alt="Image of over 100 Years experience"
        class={props.years}
        loading="lazy"
      />
    </picture>
  );
}
