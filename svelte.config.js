import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true,
			sourceMap: true
		})
	],

	kit: {
		adapter: vercel()
	},
	package: {
		exports: (filepath) => {
			return filepath.endsWith('index.js');
		},
		files: (filepath) => {
			return filepath.indexOf('test') == -1 ? true : false;
		}
	}
};

export default config;
