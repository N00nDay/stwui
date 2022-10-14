import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	define: {
		__version__: JSON.stringify(process.env.npm_package_version)
	}
};

export default config;
