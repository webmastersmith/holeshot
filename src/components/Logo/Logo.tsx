import styles from './Logo.module.scss';

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
        <img src="/header/logo/bolt.gif" alt="lighting bolt" class={styles.bolt} />
        <p>HOLESHOT</p>
        <p>ELECTRIC</p>
      </div>
    </div>
  );
}
