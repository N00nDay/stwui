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
		adapter: vercel(),
		package: {
			exports: (filepath) => {
				return filepath.endsWith('index.js');
			},
			files: (filepath) => {
				return !filepath.endsWith('.text.ts');
			}
		},
		alias: {
			'@components/*': 'src/lib/components/*',
			'@utils/*': 'src/lib/utils/*',
			'@stores/*': 'src/lib/stores/*',
			'@database/*': 'src/lib/database/*',
			'@types/*': 'src/types/*',
			'@styles/*': 'src/styles/*',
			'@lib/*': 'src/lib/*'
		}
	}
};

export default config;
