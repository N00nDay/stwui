<script lang="ts">
	import { Col } from '../../lib';
	import {
		carouselSlide,
		locale,
		lightboxAction,
		tableColumn,
		timelineItem,
		tooltipConfig,
		formatNumber,
		iconData,
		twSizes,
		selectOption,
		dropResult
	} from './examples';
	import { CodeBlock } from '../../docs';
</script>

<Col class="col-24">
	<h2 id="CarouselSlide" class="text-content mb-0">CarouselSlide</h2>

	<p class="mb-5 mt-1 text-secondary-content">
		Used in conjunction with the <a class="link" href="/carousel">Carousel</a> and
		<a href="/post">Post</a> components.
	</p>

	<CodeBlock language="typescript" code={carouselSlide} />

	<h2 id="DropResult" class="text-content mb-0 mt-12">DropResult</h2>

	<p class="mb-5 mt-1 text-secondary-content">
		Used in conjunction with the <a class="link" href="/file-picker">FilePicker</a> utility.
	</p>

	<CodeBlock language="typescript" code={dropResult} />

	<h2 id="FormatNumber" class="text-content mb-0 mt-12">FormatNumber</h2>

	<p class="mb-5 mt-1 text-secondary-content">
		Used in conjunction with the <a class="link" href="/format-number">formatNumber</a> utility.
	</p>

	<CodeBlock language="typescript" code={formatNumber} />

	<h2 id="IconData" class="text-content mb-0 mt-12">IconData</h2>

	<p class="mb-5 mt-1 text-secondary-content">
		Used in conjunction with any <a class="link" href="/icon">Icon</a> components. IconData is just
		an svg element as a string. The interal icons for this package utilize icons from
		<a href="https://materialdesignicons.com/" target="_blank" rel="noreferrer" class="link"
			>https://materialdesignicons.com/</a
		> but you can use any library that provides the raw svg element.
	</p>

	<CodeBlock language="typescript" code={iconData} />

	<h2 id="LightboxAction" class="text-content mb-0 mt-12">LightboxAction</h2>

	<p class="mb-5 mt-1 text-secondary-content">
		Used in conjunction with the <a class="link" href="/post">Post.Images</a> component.
	</p>

	<CodeBlock language="typescript" code={lightboxAction} />

	<h2 id="Locale" class="text-content mb-0 mt-12">Locale</h2>

	<p class="mb-5 mt-1 text-secondary-content">
		Used in conjunction with the <a class="link" href="/datepicker">DatePicker</a> component.
	</p>

	<CodeBlock language="typescript" code={locale} />

	<h2 id="SelectOption" class="text-content mb-0 mt-12">SelectOption</h2>

	<p class="mb-5 mt-1 text-secondary-content">
		Used in conjunction with the <a class="link" href="/select">Select</a> component.
	</p>

	<CodeBlock language="typescript" code={selectOption} />

	<h2 id="TableColumn" class="text-content mb-0 mt-12">TableColumn</h2>

	<p class="mb-5 mt-1 text-secondary-content">
		Used in conjunction with the <a class="link" href="/table">Table</a> component.
	</p>

	<CodeBlock language="typescript" code={tableColumn} />

	<h2 id="TimelineItem" class="text-content mb-0 mt-12">TimelineItem</h2>

	<p class="mb-5 mt-1 text-secondary-content">
		Used in conjunction with the <a class="link" href="/timeline">Timeline</a> component.
	</p>

	<CodeBlock language="typescript" code={timelineItem} />

	<h2 id="TooltipConfig" class="text-content mb-0 mt-12">TooltipConfig</h2>

	<p class="mb-5 mt-1 text-secondary-content">
		Used in conjunction with the <a class="link" href="/tooltip">tooltip</a> action. STWUI utilizes
		tippy.js for its tooltips. Refer to their website for
		<a href="https://atomiks.github.io/tippyjs/" class="link" target="_blank" rel="noreferrer"
			>official documentation</a
		>.
	</p>

	<CodeBlock language="typescript" code={tooltipConfig} />

	<h2 id="TwSizes" class="text-content mb-0 mt-12">TwSizes</h2>

	<p class="mb-5 mt-1 text-secondary-content">
		Used in conjunction with the <a class="link" href="/grid">Row</a> component. TwSizes is an
		interface of all TailwindCSS sizes. These can be referenced on the TailwindCSS website here:
		<a href="https://tailwindcss.com/docs/height" target="_blank" rel="noreferrer" class="link"
			>https://tailwindcss.com/docs/height</a
		>
	</p>

	<CodeBlock language="typescript" code={twSizes} />
</Col>
