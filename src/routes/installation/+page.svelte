<script lang="ts">
	import { Divider } from '$lib';
	import CodeBlock from '../../docs/components/code-block';

	const installCode = 'npm i -D stwui';

	const tailwindCode = `
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
		require('stwui/plugin')
	],
	darkMode: 'class',
};`;
</script>

<div class="p-12 w-full h-full overflow-auto">
	<article class="prose w-full max-w-full">
		<h1 class="text-light-content dark:text-dark-content mb-0">Installation</h1>
		<Divider />

		<p class="mb-3 mt-5 text-light-content dark:text-dark-content">
			Run the following command to add STWUI to your project:
		</p>
	</article>

	<CodeBlock language="bash" code={installCode} />

	<article class="prose w-full max-w-full">
		<h1 class="text-light-content dark:text-dark-content mb-0 mt-12">Configure TailwindCSS</h1>
		<Divider />

		<p class="mb-3 mt-5 text-light-content dark:text-dark-content">
			Modify your tailwind.config.cjs file with the following:
		</p>
	</article>

	<CodeBlock language="javascript" code={tailwindCode} />
</div>
