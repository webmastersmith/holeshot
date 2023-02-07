import solid from 'solid-start/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

// @ts-ignore
// import staticAdapter from 'solid-start-static';

export default defineConfig({
  plugins: [imagetools(), solid({ ssr: true })],
});
