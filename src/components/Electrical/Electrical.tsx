import { For } from 'solid-js';
import { makeIntersectionObserver } from '@solid-primitives/intersection-observer';
import Button from '../Button/Button';
import styles from './Electrical.module.scss';

export default function Electrical() {
  const images = ['agc.png', 'asa.jpg', 'sachamber.png', 'neca.jpg', 'bicsi.png'];
  const {
    add: intersectionObserver,
    remove,
    start,
    stop,
    instance,
  } = makeIntersectionObserver(
    [],
    (entries) => {
      entries.forEach((el) => {
        if (el.isIntersecting) {
          el.target.classList.add(styles.showImg);
          // remove(el.target); // remove observer or will get called again when in viewport.
        }
      });
    },
    { rootMargin: '-150px' } // delay intersection by 150px.
  );
  return (
    <section class={styles.electrical}>
      <img src="/electrical/commercial.jpg" alt="image of electrical conduit" />

      <div class={styles.textbox}>
        <h1 use:intersectionObserver>Professional Craftsmanship</h1>

        <ul use:intersectionObserver>
          <For each={images}>
            {(image) => {
              return (
                <li>
                  <img src={`/electrical/${image}`} alt={`${image.replace(/\.png|\.jpg/, '')} logo`} />
                </li>
              );
            }}
          </For>
        </ul>

        <Button style={{ '--height': '32px' }}>LET'S CONNECT</Button>
      </div>
    </section>
  );
}
