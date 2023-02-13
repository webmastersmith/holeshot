import styles from './Logo.module.scss';

// await createImages([
//   [
//     'public/header/logo/bolt.gif',
//     'w=25;55',
//     'f=gif:4',
//     'animated=true',
//     'sizes=62px',
//     'c=bolt',
//     'alt=lighting bolt image',
//   ],
// ]);

export default function Logo(props: any) {
  return (
    <div class={styles.logo} style={props?.style ?? ''}>
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
