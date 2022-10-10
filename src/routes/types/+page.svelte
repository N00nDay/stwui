<script lang="ts">
	import { Divider } from '$lib';
	import { carouselSlide, locale } from './examples';
	import { InlineCode, CodeBlock } from '../..//docs';
</script>

<div class="p-12 w-full h-full overflow-auto">
	<h1 id="CarouselSlide" class="text-light-content dark:text-dark-content mb-0">CarouselSlide</h1>
	<Divider />

	<p class="mb-3 mt-5 text-light-content dark:text-dark-content">
		Used in conjunction with the <a href="/carousel">Carousel</a> and <a href="/post">Post</a> components.
	</p>

	<CodeBlock language="typescript" code={carouselSlide} />

	<br />

	<h1 id="Locale" class="text-light-content dark:text-dark-content mb-0">Locale</h1>
	<Divider />

	<p class="mb-3 mt-5 text-light-content dark:text-dark-content">
		Used in conjunction with the <a href="/datepicker">DatePicker</a> components.
	</p>

	<CodeBlock language="typescript" code={locale} />

	<br />

	<h1 id="MaterialIcon" class="text-light-content dark:text-dark-content mb-0">MaterialIcon</h1>
	<Divider />

	<p class="mb-3 mt-5 text-light-content dark:text-dark-content">
		All Icon components use <a
			target="_blank"
			href="https://fonts.google.com/icons?selected=Material+Icons">Material Design Icons</a
		>
		under the hood. Use the string value for any
		<InlineCode>icon=""</InlineCode> properties.
	</p>
</div>
