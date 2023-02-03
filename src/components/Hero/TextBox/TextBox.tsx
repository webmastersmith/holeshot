import { createSignal, onMount, Show } from 'solid-js';
import styles from './TextBox.module.scss';
import Button from '~/components/Button/Button';

export default function TextBox() {
  const [ready, setReady] = createSignal(false);
  onMount(() => {
    setReady(true);
  });
  return (
    <Show when={ready()}>
      <div class={ready() ? styles.shadow : ''}></div>
      <div class={styles.textWrapper} id={ready() ? styles.flyIn : ''}>
        <div class={styles.textBox}>
          <p class={styles.electrical}>ELECTRICAL</p>
          <p class={styles.contractor}>CONTRACTOR</p>
          <p class={styles.area}>SERVICING CENTRAL TEXAS AND SURROUNDING AREAS</p>
        </div>
        <Button style={{ '--height': '32px' }}>CONTACT US</Button>
      </div>
    </Show>
  );
}
