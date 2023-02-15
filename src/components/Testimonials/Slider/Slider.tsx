import { onMount, For, lazy } from 'solid-js';
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import './slider.scss';

const Person1 = lazy(() => import('./Person1Image/Person1Image'));
const Person2 = lazy(() => import('./Person2Image/Person2Image'));
const Person3 = lazy(() => import('./Person3Image/Person3Image'));
const Person4 = lazy(() => import('./Person4Image/Person4Image'));
const Person5 = lazy(() => import('./Person5Image/Person5Image'));

export default function Slider() {
  onMount(() => {
    new Splide('.splide', {
      type: 'fade',
      perPage: 1,
      rewind: true,
      speed: 2500,
      pagination: false,
      autoplay: true,
      interval: 5000,
      classes: {
        arrows: 'splide__arrows my-arrows',
        arrow: 'splide__arrow my-arrow',
        prev: 'splide__arrow--prev my-prev',
        next: 'splide__arrow--next my-next',
      },
    }).mount();
  });

  const data = [
    {
      // img: 'image.jpg',
      img: Person1,
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quisquam voluptatibus, omnis voluptatem tenetur dolor est, iste quaerat nostrum, itaque nesciunt cumque dolore corrupti aliquam nisi enim pariatur ut aliquid.',
      name: 'Robert Smith',
    },
    {
      img: Person2,
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis mollitia fugiat, culpa at eius esse pariatur quo nemo aliquam, impedit doloribus autem consequuntur possimus maxime tempore enim, sint ipsa est!',
      name: 'Harold M. Dodson',
    },
    {
      img: Person3,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda pariatur expedita unde nulla officia iste modi in ducimus, molestiae debitis vitae repudiandae quasi dolorum hic velit. Aperiam repellendus aliquid excepturi.',
      name: 'Zek Davis',
    },
    {
      img: Person4,
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque incidunt consequatur porro minima et totam aliquam, officiis aspernatur cumque distinctio numquam laudantium accusantium tempora aperiam doloremque possimus nihil laborum. Consequatur.',
      name: 'Cindy B. Spiegel',
    },
    {
      img: Person5,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos itaque quo iste reprehenderit libero suscipit dolorem, earum ea dolorum quidem dolore illo eaque, sequi error doloribus esse impedit repudiandae.',
      name: 'Linda J. Guion',
    },
  ];
  return (
    <div class="splide" aria-label="Splide Basic HTML Example">
      <div class="splide__track">
        <ul class="splide__list">
          <For each={data}>
            {(e) => (
              <li class="splide__slide">
                <e.img />
                <p>{e.text}</p>
                <h2>{e.name}</h2>
              </li>
            )}
          </For>
        </ul>
      </div>
    </div>
  );
}
