import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
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
		}
	}
};

export default config;
