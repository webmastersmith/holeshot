import styles from './Employees.module.scss';

export default function Employees() {
  return (
    <section class={styles.employees}>
      <div class={styles.stars}></div>
      <div class={styles.stars2}></div>
      <div class={styles.stars3}></div>
      <div class={styles.content}>
        <div>
          <p>hello</p>
          <p>bob</p>
        </div>
      </div>
    </section>
  );
}
