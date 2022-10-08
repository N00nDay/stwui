<script lang="ts">
	import { Divider } from '$lib';
	import CodeBlock from '../../docs/components/code-block';

	const carouselSlide = `interface Slide {
	id: string;
	src: string;
	alt?: string;
}`;
</script>

<div class="p-12 w-full h-full overflow-auto">
	<h1 id="CarouselSlide" class="text-light-content dark:text-dark-content mb-0">CarouselSlide</h1>
	<Divider />

	<p class="mb-3 mt-5 text-light-content dark:text-dark-content">
		Run the following command to add STWUI to your project:
	</p>

	<CodeBlock language="typescript" code={carouselSlide} />
</div>
