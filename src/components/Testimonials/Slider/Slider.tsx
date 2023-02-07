import { onMount, For } from 'solid-js';
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import './slider.scss';

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
      img: 'image.jpg',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quisquam voluptatibus, omnis voluptatem tenetur dolor est, iste quaerat nostrum, itaque nesciunt cumque dolore corrupti aliquam nisi enim pariatur ut aliquid.',
      name: 'Robert Smith',
    },
    {
      img: 'image4w.jpg',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis mollitia fugiat, culpa at eius esse pariatur quo nemo aliquam, impedit doloribus autem consequuntur possimus maxime tempore enim, sint ipsa est!',
      name: 'Cindy B. Spiegel',
    },
    {
      img: 'image3.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda pariatur expedita unde nulla officia iste modi in ducimus, molestiae debitis vitae repudiandae quasi dolorum hic velit. Aperiam repellendus aliquid excepturi.',
      name: 'Zek Davis',
    },
    {
      img: 'image2.jpg',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque incidunt consequatur porro minima et totam aliquam, officiis aspernatur cumque distinctio numquam laudantium accusantium tempora aperiam doloremque possimus nihil laborum. Consequatur.',
      name: 'Harold M. Dodson',
    },
    {
      img: 'image5w.jpg',
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
                <img src={`/testimonials/${e.img}`} alt={e.name} loading="lazy" />
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
