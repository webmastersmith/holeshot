import styles from './Logo.module.scss';

export default function Logo(props: any) {
  return (
    <div class={`${styles.logo} ${props?.display ?? ''}`} style={props?.style ?? ''}>
      <img
        src="/header/logo/logo.svg"
        alt="HoleShot electric logo"
        width={'125px'}
        class={styles.holeShotLogo}
      />
      <div>
        <img
          srcset="/header/logo/bolt/bolt_2-3_25x37.gif 25w, /header/logo/bolt/bolt_2-3_55x81.gif 55w"
          sizes="62px"
          src="/header/logo/bolt/bolt_2-3_55x81.gif"
          alt="lighting bolt image"
          class={styles.bolt}
        />
        <p>HOLESHOT</p>
        <p>ELECTRIC</p>
      </div>
    </div>
  );
}
