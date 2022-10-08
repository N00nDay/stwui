<script lang="ts">
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
	<h1 class="text-5xl font-bold text-light-content dark:text-dark-content mb-4">Installation</h1>

	<p class="mb-3 text-light-content dark:text-dark-content">
		Run the following command to add STWUI to your project:
	</p>

	<CodeBlock language="bash" code={installCode} />

	<h1 class="text-5xl font-bold text-light-content dark:text-dark-content mb-4 mt-12">
		Configure TailwindCSS
	</h1>

	<p class="mb-3 text-light-content dark:text-dark-content">
		Modify your tailwind.config.cjs file with the following:
	</p>

	<CodeBlock language="javascript" code={tailwindCode} />
</div>
