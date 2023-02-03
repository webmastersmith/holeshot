import { createEffect, createSignal, onMount, Show } from 'solid-js';
import styles from './DarkMode.module.scss';
import Moon from './Moon';
import Sun from './Sun';

export default function DarkMode() {
  const [theme, setTheme] = createSignal('light');

  onMount(() => {
    // check local storage for previous theme setting on mount.
    if ((localStorage.getItem('theme') ?? 'light') === 'dark') {
      setTheme('dark');
    }
  });

  createEffect(() => {
    // Record theme in local storage.
    localStorage.setItem('theme', theme());
    // change document theme
    document.documentElement.setAttribute('data-theme', theme());
  });

  // <div class={styles['toggle-switch']}>
  //   <label>
  //     <input
  //       onChange={() => (theme() === 'light' ? setTheme('dark') : setTheme('light'))}
  //       type="checkbox"
  //       id="checkbox"
  //       checked={theme() === 'dark' ? true : false}
  //     />
  //     <span class={styles.slider} />
  //   </label>
  // </div>
  return (
    <button
      class={styles.btn}
      onClick={() => (theme() === 'light' ? setTheme('dark') : setTheme('light'))}
      type="button"
      title="Toggle Dark Mode"
    >
      <Show when={theme() === 'light'}>
        <Moon width={'30px'} />
      </Show>
      <Show when={theme() === 'dark'}>
        <Sun width={'30px'} />
      </Show>
    </button>
  );
}
