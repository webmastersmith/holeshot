import styles from './Background.module.scss';

export default function Background() {
  return (
    <div class={styles.background}>
      <div class={styles.textBlock}>
        <h1>Professional Craftsmanship</h1>
        <div class={styles.certs}>
          <img src="/electrical/agc-logo.png" alt="agc logo" />
          <img src="/electrical/asa.jpg" alt="asa logo" />
          <img src="/electrical/sachamber-logo.png" alt="sachamber logo" />
          <img src="/electrical/neca-logo.jpg" alt="neca logo" />
          <img src="/electrical/bicsi-logo.png" alt="bicsi logo" />
        </div>
        <button>
          <span>LET'S CONNECT</span>
        </button>
      </div>
    </div>
  );
}
