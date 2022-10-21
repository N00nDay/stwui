<script lang="ts">
	import { Col, Divider } from '$lib';
	import { CodeBlock, InlineCode } from '../../docs';

	const svelteKitSetUp = `
npm create svelte@latest my-app
cd my-app
npm install
`;

	const installCode = 'npm i -D stwui';

	const tailwindInstall = `
npx svelte-add@latest tailwindcss
npm install
`;

	const tailwindCode = `
module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/stwui/**/*.{svelte,js,ts,html}
	],
	plugins: [
		require('@tailwindcss/forms'),
		require('stwui/plugin')
	],
	darkMode: 'class',
};`;
</script>

<Col class="col-24">
	<h2 class="text-light-content dark:text-dark-content mb-0">Create SvelteKit project</h2>
	<!-- <Divider /> -->

	<p class="mb-5 mt-1 text-light-content dark:text-dark-content">
		Create a svelte-kit project with the commands below. Visit <a
			href="https://kit.svelte.dev/docs/introduction#getting-started"
			class="link">kit.svelte</a
		> to view the official documentation:
	</p>

	<CodeBlock language="bash" code={svelteKitSetUp} />

	<h2 class="text-light-content dark:text-dark-content mb-0 mt-12">Install STWUI</h2>
	<!-- <Divider /> -->

	<p class="mb-5 mt-1 text-light-content dark:text-dark-content">
		Run the following command to add STWUI to your project:
	</p>

	<CodeBlock language="bash" code={installCode} />

	<h2 class="text-light-content dark:text-dark-content mb-0 mt-12">Install TailwindCSS</h2>
	<!-- <Divider /> -->

	<p class="mb-5 mt-1 text-light-content dark:text-dark-content">
		Run the following command to add STWUI to your project:
	</p>

	<CodeBlock language="bash" code={tailwindInstall} />

	<h2 class="text-light-content dark:text-dark-content mb-0 mt-12">Configure TailwindCSS</h2>
	<!-- <Divider /> -->

	<p class="mb-5 mt-1 text-light-content dark:text-dark-content">
		Modify your <InlineCode>tailwind.config.cjs</InlineCode> file with the following:
	</p>

	<CodeBlock language="javascript" code={tailwindCode} />
</Col>
