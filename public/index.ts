import fs from 'fs';
import path from 'path';
import sharp, { Sharp } from 'sharp';

// npm i -D sharp  // not needed in production.
// npm i -D @types/sharp // not needed in production.
// ts-node-esm index.ts

/**
 * Resolution Switching: only one url and one format. Usually jpg format.
 * PICTURE ELEMENT
 * Multiple Formats: Do not include media queries. Provide multiple formats. ex.. f=avif,webp,jpg
 * Art Direction: provide at least two urls. Must have media queries on urls.
 *
 * ex...'hero.jpg?w=300;600;900&&f=avif:50;jpg;webp:80;png:50&sharpen=true&d=500&alt=The dog and the Cat'
 * w = width of images. ex.. w=600;800;1000
 * a = aspectRatio, string, -ex..'a=16:9'
 * f = string[] -format:quality  ex.. avif:50, webp:80, jpg, png:100
 * sharpen = boolean -sharpen image. Increases the image size. ex.. sharpen=true
 * d = default image size for the 'img' element. ex.. d=700
 * alt = string. Screen reader message. ex.. alt=Hello World.
 * media = (min-width: 900px) | you can leave blank.
 * sizes = string. ex.. 100vw | (max-width: 320px) 100vw, (max-width: 600px) 50vw, 25vw | blank.
 */
(async function () {
  const heroImage = await createImages([
    'hero.jpg?w=600;1200;2400&a=9:16&f=avif;jpg;webp&d=700&alt=Image of house and pool with custom lighting&sizes=100vw&media=(max-width: 600px)',

    'hero.jpg?w=600;1200;2400&f=avif;jpg;webp&a=16:9&d=700&alt=Image of house and pool with custom lighting&sizes=100vw&media=(min-width: 601px)',
  ]);
})();

/**
 * During development, create images, and console.log picture element webpage data.
 * @param urls string[] of urls.
 * @returns void
 */
async function createImages(urls: string[]): Promise<void> {
  // 1. create/write img for each url, return source for art direction.
  const sources: string[][] = [];
  for (const [i, urlParams] of urls.entries()) {
    const sharpDetails = parseURL(urlParams); // details object
    sharpDetails.urls = urls.length;
    console.log(sharpDetails);
    const s = sharp(`${path.join(process.cwd(), sharpDetails.imgName)}`);

    const _sources = await createSources(s, sharpDetails);
    // Resolution Switching.
    if (sharpDetails.f.length === 1 && sharpDetails.urls === 1) {
      // can use Resolution Switching
      const d = await defaultImage(s, sharpDetails, _sources.join(', '));
      console.log(d);
    } else {
      sources.push(_sources);
      // last url, make default img tag.
      if (i === urls.length - 1) {
        sources.push([await defaultImage(s, sharpDetails)]);
      }
      // 2. add picture tag and console.log.
      const pic = `<picture>${sources.flat(Infinity).join('')}</picture>`;
      console.log(pic);
    }
  }
}

// UTILS
export type Format = 'avif' | 'png' | 'webp' | 'jpeg' | 'jpg' | 'gif';
export interface SharpDetails {
  imgPath: string;
  imgName: string;
  w: number[]; // width
  a: string; // aspect
  f: string[]; // f = 'avif:50' -format and quality can be combined.
  sharpen: boolean; // boolean as string
  d: number; // boolean as string -default -size of default image.
  alt: string;
  media: string;
  sizes: string;
  urls: number;
}
export interface ImageFormatDetails extends Omit<SharpDetails, 'f'> {
  f: Format; // format
}
export interface ImageSizeDetails extends Omit<ImageFormatDetails, 'w'> {
  w: number; // width
}
export type AllDetails = SharpDetails | ImageFormatDetails | ImageSizeDetails;

export function parseURL(rawUrl: string) {
  // 'hero.jpg?w=300;600;900&a=9:16&f=avif;jpg;png&sharpen=true&d=700&alt=the dog and the cat'
  const urlPath = new URL(rawUrl, 'file://');
  // parse url into array of tuples.
  const arr: Array<[string, string[]]> = [];
  arr.push(['imgPath', [urlPath.pathname.replace('/', '').trim()]]);
  for (const [key, value] of urlPath.searchParams) {
    arr.push([key, value.split(';')]);
  }
  // convert array into object.
  const o = Object.fromEntries(arr) as any;
  // set defaults if query does not exist.
  const obj: SharpDetails = {
    imgPath: o?.imgPath?.[0] ?? '',
    imgName: o?.imgPath?.[0].split('/').pop() ?? [''],
    w: o?.w?.length > 0 ? o.w.map((w: string) => +w) : [700],
    a: o?.a?.[0] ?? '',
    f: o?.f ?? ['jpeg'],
    sharpen: o?.sharpen?.[0] === 'true' ? true : false,
    d: o?.d?.[0] ? +o.d[0] : 700,
    alt: o?.alt?.[0] ?? 'This is a image',
    media: o?.media?.[0] ? o.media[0] : '',
    sizes: o?.sizes?.[0] ? o.sizes[0] : '',
    urls: 0,
  };
  return obj;
}

/**
 * When given w/h, find closest aspect ratio.
 * @param val w/h
 * @returns  string. ex.. '16:9'
 */
export function findAspectRatio(val: number) {
  const [w, h] = AspectRatio(val, 21);
  return `${w}:${h}`;
  function AspectRatio(val: number, lim: number) {
    var lower = [0, 1];
    var upper = [1, 0];

    while (true) {
      var mediant = [lower[0] + upper[0], lower[1] + upper[1]];

      if (val * mediant[1] > mediant[0]) {
        if (lim < mediant[1]) {
          return upper;
        }
        lower = mediant;
      } else if (val * mediant[1] == mediant[0]) {
        if (lim >= mediant[1]) {
          return mediant;
        }
        if (lower[1] < upper[1]) {
          return lower;
        }
        return upper;
      } else {
        if (lim < mediant[1]) {
          return lower;
        }
        upper = mediant;
      }
    }
  }
}

/**
 * When given width and desired aspectRatio, return height.
 * @param width desired width of image
 * @param aspectRatio
 * @returns number height to keep aspectRatio as a number.
 */
export function getHeight(width: number, aspectRatio: string): number {
  const [w, h] = aspectRatio.split(':');
  return Math.round(width * (+h / +w));
}

/**
 * Creates the 'source' element and calls all formats/sizes provide from url params.
 * @param _img instance of sharp image.
 * @param sharpDetails object containing url params
 * @param media (min-width: 900px)
 * @param sizes 100vw | (max-width: 320px) 100vw, (max-width: 600px) 50vw, 25vw
 * @returns string. Source element w/ different image formats and srcset pre-filled.
 */
export async function createSources(_img: Sharp, sharpDetails: SharpDetails): Promise<string[]> {
  const sources: string[] = [];
  for await (const format of sharpDetails.f) {
    const srcset: string[] = [];
    const imageDetails = { ...sharpDetails, f: format } as ImageFormatDetails;
    const { media, sizes } = imageDetails;

    for await (const w of imageDetails.w) {
      const sizeDetails = { ...imageDetails, w } as ImageSizeDetails;
      // this creates,writes the image and returns srcset data.
      const ss = await createSrcset(_img, sizeDetails);
      srcset.push(ss);
    }
    // return sources (Art Direction | Format types) or img (Resolution Switching)?
    if (sharpDetails.f.length === 1 && sharpDetails.urls === 1) {
      // can use Resolution Switching
      return srcset;
    }
    const f = format.split(':')[0];
    let _source: string;
    if (sizes && media) {
      _source = `<source type="image/${f}" media="${media}" sizes="${sizes}" srcset="${srcset.join(
        ', '
      )}" />`;
    } else if (sizes) {
      _source = `<source type="image/${f}" sizes="${sizes}" srcset="${srcset.join(', ')}" />`;
    } else if (media) {
      _source = `<source type="image/${f}" media="${media}" srcset="${srcset.join(', ')}" />`;
    } else {
      _source = `<source type="image/${f}" srcset="${srcset.join(', ')}" />`;
    }
    // remove double spaces
    const source = _source.replace(/\s{2,}/g, ' ');
    // after each format type, push source element into array.
    // insertion order: avif, webp, everything else.
    if (f === 'avif') {
      sources.unshift(source);
    } else if (f === 'webp') {
      sources.splice(1, 0, source);
    } else {
      sources.push(source);
    }
  } // end outer loop
  // return sources array
  return sources;
}

/**
 * create/write images to folder. Return srcset values.
 * @param _img sharp image instance
 * @param sizeDetails url params
 * @returns creates/writes image, returns srcset imgPath and width.
 */
export async function createSrcset(_img: Sharp, sizeDetails: ImageSizeDetails): Promise<string> {
  const { imgPath, imgName, w: width, f, a: aspect, sharpen } = sizeDetails;
  const [format, quality = ''] = f.split(':') as any;

  //get height if height is bigger than orgImage, reduce height by one.
  const { width: orgWidth, height: orgHeight } = await _img.metadata();
  // if aspect is provided, create size.
  if (aspect) {
    const height = getHeight(width, aspect);
    // reduce width till height is same as original image height.
    if (height > orgHeight!) {
      let resizeHeight: number = Infinity;
      let resizeWidth: number = orgWidth!;
      while (resizeHeight > orgHeight!) {
        resizeHeight = getHeight(resizeWidth, aspect);
        resizeWidth--;
      }
      // resize with calculated width|height.
      _img.resize(resizeWidth + 1, resizeHeight, { withoutEnlargement: true });
    } else {
      _img.resize(width, height, { withoutEnlargement: true });
    }
  } else {
    _img.resize({ width, withoutEnlargement: true });
  }

  // if jpeg use mozjpeg, else use sharp filters.
  if (format === 'jpeg' || format === 'jpg') {
    _img.toFormat(format, { mozjpeg: true });
  }
  if (quality) {
    _img.toFormat(format, { quality: +quality });
  } else {
    _img.toFormat(format);
  }

  if (sharpen) {
    _img.sharpen({
      sigma: 2,
      m1: 0,
      m2: 3,
      x1: 3,
      y2: 15,
      y3: 15,
    });
  }
  const _image = await _img.toBuffer();
  const newImgMeta = await sharp(_image).metadata();
  // when 'avif' format the metadata says 'heif'? Not sure why, here is workaround.
  if (format === 'avif') {
    newImgMeta.format = 'avif';
  }

  // find path to write image.
  const { folderPath, srcPath, writePath } = createPaths(sizeDetails, newImgMeta);

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
  await sharp(_image).toFile(writePath);
  return `${srcPath} ${newImgMeta.width}w`;
}

/**
 * Create default image w/ provided default value and aspectRatio.
 * @param _img instantiated Sharp image.
 * @param sharpDetails url params
 * @returns string. img tag pre-filled with image details.
 */
export async function defaultImage(
  _img: Sharp,
  sharpDetails: SharpDetails,
  srcset: string = ''
): Promise<string> {
  const { imgName, d: width, alt } = sharpDetails;
  if (sharpDetails.a) {
    //get height
    const height = getHeight(width, sharpDetails.a);
    // resize with height
    _img.resize({ width, height });
  } else {
    _img.resize({ width });
  }
  const _image = await _img.toFormat('jpeg', { mozjpeg: true }).toBuffer();
  const newImgMeta = await sharp(_image).metadata();

  // find path to write image.
  const { folderPath, srcPath, name, writePath } = createPaths(sharpDetails, newImgMeta);

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
  await sharp(_image).toFile(writePath);

  // if srcset provide, Resolution Switching. return modified img element.
  if (srcset) {
    return `<img srcset="${srcset}" src="${srcPath}" width="${newImgMeta.width}" height="${newImgMeta.height}" alt="${alt}" class={styles.pic}/>`;
  }
  return `<img src="${srcPath}" width="${newImgMeta.width}" height="${newImgMeta.height}" alt="${alt}" class={styles.pic}/>`;
}

/**
 * Create the paths need to write images and get images.
 * @param sharpDetails url params
 * @param newImgMeta metadata from newly created image.
 * @returns paths to image.
 */
export function createPaths(sharpDetails: AllDetails, newImgMeta: sharp.Metadata) {
  const [name, ext] = sharpDetails.imgName.split('/').pop()?.split('.') as string[];
  // get new image metadata and find aspectRatio.
  let a: string;
  if (sharpDetails.a) {
    a = sharpDetails.a.replace(':', '-');
  } else {
    // get ratio from new image width & height
    a = findAspectRatio(+newImgMeta.width! / +newImgMeta.height!).replace(':', '-');
  }
  const newName = `${name}_${a}_${newImgMeta.width}x${newImgMeta.height}.${newImgMeta.format}`;
  const srcPath = `/${name}/${newName}`;
  const folderPath = path.join(process.cwd(), name);
  const writePath = path.join(folderPath, newName);
  return { folderPath, name, srcPath, newName, writePath };
}
