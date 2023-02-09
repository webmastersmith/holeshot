export type ImageObj = {
  img: any;
  sizes: string;
  media: string;
};
export type defaultImg = {
  placeholder: string;
  width: number;
  height: number;
  alt: string;
};
type ImageProps = {
  src: string;
  w: number;
};
// Single image for 'Resolution Switching'
export function ResolutionSwitching(
  el: HTMLElement,
  img: ImageObj,
  defaultImg: defaultImg,
  styles: string = ''
) {
  const { placeholder, width, height, alt } = defaultImg;

  // loop each image object
  const s = Object.entries(img.img.sources as any)
    .map(
      ([format, images]) =>
        `<source media="${img.media}" sizes="${img.sizes}" srcset="${(images as ImageProps[])
          .map((i) => `${i.src} ${i.w}w`)
          .join(', ')}" type="image/${format}" />`
    )
    .join('');

  return `${s}<img src="${placeholder}" width="${width}" height="${height}" alt="${alt}" class="${styles}" />`;
}

// multiple images for ArtDirection or types
export function artDirection(el: HTMLElement, arr: ImageObj[], defaultImg: defaultImg, styles: string = '') {
  const { placeholder, width, height, alt } = defaultImg;

  // loop each image object
  const s = arr
    .map(({ img, sizes, media }) => {
      // turn into sources
      return Object.entries(img.sources)
        .map(
          ([format, images]) =>
            `<source media="${media}" sizes="${sizes}" srcset="${(images as ImageProps[])
              .map((i) => `${i.src} ${i.w}w`)
              .join(', ')}" type="image/${format}" />`
        )
        .join('');
    })
    .join('');

  return `${s}<img src="${placeholder}" width="${width}" height="${height}" alt="${alt}" class="${styles}" />`;
}
