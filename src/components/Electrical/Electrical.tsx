import { For, Show, lazy } from 'solid-js';
import { makeIntersectionObserver, createVisibilityObserver } from '@solid-primitives/intersection-observer';
import Button from '../Button/Button';
import styles from './Electrical.module.scss';
import ElectricalImage from './ElectricalImage/ElectricalImage';

const Agc = lazy(() => import('./AgcImage/AgcImage'));
const Asa = lazy(() => import('./AsaImage/AsaImage'));
const Sachamber = lazy(() => import('./SachamberImage/SachamberImage'));
const Neca = lazy(() => import('./NecaImage/NecaImage'));
const Bicsi = lazy(() => import('./BicsiImage/BicsiImage'));

export default function Electrical() {
  let el: HTMLDivElement | undefined;

  // const images = ['agc.png', 'asa.jpg', 'sachamber.png', 'neca.jpg', 'bicsi.png'];
  const images = [Agc, Asa, Sachamber, Neca, Bicsi];
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
          remove(el.target); // remove observer or will get called again when in viewport.
        }
      });
    },
    { rootMargin: '-150px' } // delay intersection by 150px.
  );
  const useVisibilityObserver = createVisibilityObserver({ rootMargin: '700px' });
  const visible = useVisibilityObserver(() => el);

  //
  return (
    //@ts-ignore
    <section class={styles.electrical} ref={el}>
      <Show when={visible()}>
        {/* <img src="/electrical/commercial.jpg" alt="image of electrical conduit" loading="eager" /> */}
        <ElectricalImage />
      </Show>

      <div class={styles.textbox}>
        <h1 use:intersectionObserver>Professional Craftsmanship</h1>

        <ul use:intersectionObserver>
          <For each={images}>
            {(Image) => {
              return (
                <li>
                  {/* <img
                    src={`/electrical/${Image}`}
                    alt={`${Image.replace(/\.png|\.jpg/, '')} logo`}
                    loading="lazy"
                  /> */}
                  <Image />
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
