import { For, lazy } from 'solid-js';
import { FaSolidComputer, FaSolidHandHoldingDollar } from 'solid-icons/fa';
import { IoConstructSharp, IoDocumentText } from 'solid-icons/io';
import { BiRegularLineChart } from 'solid-icons/bi';
import styles from './Info.module.scss';
import { makeIntersectionObserver } from '@solid-primitives/intersection-observer';
import { sun } from '~/assets/Svg/Svg';

export default function Info() {
  const data = [
    {
      img: FaSolidComputer,
      title: 'TECHNOLOGY',
      text: 'Our design and estimating teams use the latest technology to build, bid and resource the best components available.',
    },
    {
      img: sun,
      title: 'SOLAR',
      text: 'We install, fix and clean solar panels, street lights and interior solar lighting to fit your engineering requirements.',
    },
    {
      img: IoConstructSharp,
      title: 'New Construction',
      text: 'We pride ourselves at being the best. All new construction work is completed on time, exceeds electrical code and backed by our One Year warranty.',
    },
    {
      img: FaSolidHandHoldingDollar,
      title: 'SAVINGS',
      text: 'We work hard to save money and time on electrical projects. Using state of the art technology we can accurately bid and buy in bulk to save you money.',
    },
    {
      img: BiRegularLineChart,
      title: 'FLEXIBLE',
      text: 'Job size or location are not problems for us. We have structured the company so we can expand instantly to as many electricians needed and travel wherever the job is located.',
    },
    {
      img: IoDocumentText,
      title: 'WARRANTY',
      text: 'We always have certified electricians on-hand and everything is overseen by our Master Electricians. All jobs contracts have a complete one year warranty in writing that we stand behind.',
    },
  ];
  return (
    <section class={styles.info}>
      <For each={data}>
        {(item) => {
          const { add: intersectionObserver, remove } = makeIntersectionObserver(
            [],
            (entries) => {
              entries.forEach((el) => {
                if (el.isIntersecting) {
                  el.target.classList.add('inView');
                  remove(el.target);
                }
              });
            },
            { rootMargin: '-150px' }
          );
          return (
            <article use:intersectionObserver>
              <item.img />
              <h1>{item.title}</h1>
              <p>{item.text}</p>
            </article>
          );
        }}
      </For>
    </section>
  );
}
