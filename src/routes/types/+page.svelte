<script lang="ts">
	import { Divider } from '$lib';
	import { carouselSlide, locale, lightboxAction, tableColumn, timelineItem } from './examples';
	import { InlineCode, CodeBlock } from '../..//docs';
</script>

<div class="w-full h-full overflow-auto">
	<h1 id="CarouselSlide" class="text-light-content dark:text-dark-content mb-0">CarouselSlide</h1>
	<Divider />

	<p class="mb-3 mt-5 text-light-content dark:text-dark-content">
		Used in conjunction with the <a class="link" href="/carousel">Carousel</a> and
		<a href="/post">Post</a> components.
	</p>

	<CodeBlock language="typescript" code={carouselSlide} />

	<br />

	<h1 id="LightboxAction" class="text-light-content dark:text-dark-content mb-0">LightboxAction</h1>
	<Divider />

	<p class="mb-3 mt-5 text-light-content dark:text-dark-content">
		Used in conjunction with the <a class="link" href="/post">Post.Images</a> component.
	</p>

	<CodeBlock language="typescript" code={lightboxAction} />

	<br />

	<h1 id="Locale" class="text-light-content dark:text-dark-content mb-0">Locale</h1>
	<Divider />

	<p class="mb-3 mt-5 text-light-content dark:text-dark-content">
		Used in conjunction with the <a class="link" href="/datepicker">DatePicker</a> component.
	</p>

	<CodeBlock language="typescript" code={locale} />

	<br />

	<h1 id="MaterialIcon" class="text-light-content dark:text-dark-content mb-0">MaterialIcon</h1>
	<Divider />

	<p class="mb-3 mt-5 text-light-content dark:text-dark-content">
		All Icon components use <a
			class="link"
			target="_blank"
			href="https://fonts.google.com/icons?selected=Material+Icons">Material Design Icons</a
		>
		under the hood. Use the string value for any
		<InlineCode>icon=""</InlineCode> properties.
	</p>

	<br />

	<h1 id="TableColumn" class="text-light-content dark:text-dark-content mb-0">TableColumn</h1>
	<Divider />

	<p class="mb-3 mt-5 text-light-content dark:text-dark-content">
		Used in conjunction with the <a class="link" href="/table">Table</a> component.
	</p>

	<CodeBlock language="typescript" code={tableColumn} />

	<br />

	<h1 id="TimelineItem" class="text-light-content dark:text-dark-content mb-0">TimelineItem</h1>
	<Divider />

	<p class="mb-3 mt-5 text-light-content dark:text-dark-content">
		Used in conjunction with the <a class="link" href="/timeline">Timeline</a> component.
	</p>

	<CodeBlock language="typescript" code={timelineItem} />
</div>
