export const svelteKitSetUp = `
npm create svelte@latest my-app
cd my-app
npm install
`;

export const installCode = 'npm i -D stwui';

export const tailwindInstall = `
npx svelte-add@latest tailwindcss
npm install
`;

export const tailwindCode = `
module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/stwui/**/*.{svelte,js,ts,html}'
	],
	plugins: [
		require('@tailwindcss/forms'),
		require('stwui/plugin')
	],
	darkMode: 'class',
};`;
