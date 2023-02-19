import styles from './ElectricianImage.module.scss';

export default function ElectricianImage(props: any) {
  return (
    <picture class={props.electrician}>
      <source
        type="image/avif"
        srcset="/contactUs/electrician_9-16/electrician_9-16_6-7_650x756.avif 650w, /contactUs/electrician_9-16/electrician_9-16_6-7_800x930.avif 800w"
        sizes="90vw"
        media="(max-width: 600px)"
      />
      <source
        type="image/webp"
        srcset="/contactUs/electrician_9-16/electrician_9-16_6-7_650x756.webp 650w, /contactUs/electrician_9-16/electrician_9-16_6-7_800x930.webp 800w"
        sizes="90vw"
        media="(max-width: 600px)"
      />
      <source
        type="image/png"
        srcset="/contactUs/electrician_9-16/electrician_9-16_6-7_650x756.png 650w, /contactUs/electrician_9-16/electrician_9-16_6-7_800x930.png 800w"
        sizes="90vw"
        media="(max-width: 600px)"
      />
      <source
        type="image/avif"
        srcset="/contactUs/electrician/electrician_3-2_600x401.avif 600w, /contactUs/electrician/electrician_3-2_800x534.avif 800w"
        sizes="600px"
        media="(min-width: 601px)"
      />
      <source
        type="image/webp"
        srcset="/contactUs/electrician/electrician_3-2_600x401.webp 600w, /contactUs/electrician/electrician_3-2_800x534.webp 800w"
        sizes="600px"
        media="(min-width: 601px)"
      />
      <source
        type="image/png"
        srcset="/contactUs/electrician/electrician_3-2_600x401.png 600w, /contactUs/electrician/electrician_3-2_800x534.png 800w"
        sizes="600px"
        media="(min-width: 601px)"
      />
      <img
        src="/contactUs/electrician/electrician_3-2_320x214.png"
        width="320"
        height="214"
        alt="Image of electrician"
        class={props.electrician}
        loading="lazy"
      />
    </picture>
  );
}
