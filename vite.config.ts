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
		exclude: [...configDefaults.exclude, '**/package/**', '**/build/**']
	},
	optimizeDeps: {
		include: ['dayjs', 'tailwind-merge', 'highlight.js', 'tippy.js', '@floating-ui/dom']
	}
};

export default config;
