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
	}
};

export default config;
