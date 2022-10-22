import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { configDefaults } from 'vitest/config';

const config: UserConfig = {
	plugins: [sveltekit()],
	define: {
		__version__: JSON.stringify(process.env.npm_package_version)
	},
	test: {
		globals: true,
		environment: 'jsdom',
		// setupFiles: ['src/lib/components/accordion/Accordion.test.js']
		exclude: [...configDefaults.exclude, '**/package/**', '**/build/**']
	}
};

export default config;
