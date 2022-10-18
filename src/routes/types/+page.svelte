<script lang="ts">
	import { Divider, Col } from '../../lib';
	import {
		carouselSlide,
		locale,
		lightboxAction,
		tableColumn,
		timelineItem,
		tooltipConfig,
		formatNumber,
		iconData
	} from './examples';
	import { CodeBlock } from '../../docs';
</script>

<Col class="col-24">
	<h2 id="CarouselSlide" class="text-light-content dark:text-dark-content mb-0 mt-12">
		CarouselSlide
	</h2>
	<Divider />

	<p class="mb-3 mt-5 text-light-content dark:text-dark-content">
		Used in conjunction with the <a class="link" href="/carousel">Carousel</a> and
		<a href="/post">Post</a> components.
	</p>

	<CodeBlock language="typescript" code={carouselSlide} />

	<br />

	<h2 id="FormatNumber" class="text-light-content dark:text-dark-content mb-0 mt-12">
		FormatNumber
	</h2>
	<Divider />

	<p class="mb-3 mt-5 text-light-content dark:text-dark-content">
		Used in conjunction with the <a class="link" href="/format-number">formatNumber</a> utility.
	</p>

	<CodeBlock language="typescript" code={formatNumber} />

	<br />

	<h2 id="IconData" class="text-light-content dark:text-dark-content mb-0 mt-12">IconData</h2>
	<Divider />

	<p class="mb-3 mt-5 text-light-content dark:text-dark-content">
		Used in conjunction with any <a class="link" href="/icon">Icon</a> components. IconData is just
		an svg element as a string. The interal icons for this package utilize icons from
		<a href="https://materialdesignicons.com/" class="link">https://materialdesignicons.com/</a> but
		you can use any library that provides the raw svg element.
	</p>

	<CodeBlock language="typescript" code={iconData} />

	<br />

	<h2 id="LightboxAction" class="text-light-content dark:text-dark-content mb-0 mt-12">
		LightboxAction
	</h2>
	<Divider />

	<p class="mb-3 mt-5 text-light-content dark:text-dark-content">
		Used in conjunction with the <a class="link" href="/post">Post.Images</a> component.
	</p>

	<CodeBlock language="typescript" code={lightboxAction} />

	<br />

	<h2 id="Locale" class="text-light-content dark:text-dark-content mb-0 mt-12">Locale</h2>
	<Divider />

	<p class="mb-3 mt-5 text-light-content dark:text-dark-content">
		Used in conjunction with the <a class="link" href="/datepicker">DatePicker</a> component.
	</p>

	<CodeBlock language="typescript" code={locale} />

	<br />

	<h2 id="TableColumn" class="text-light-content dark:text-dark-content mb-0 mt-12">TableColumn</h2>
	<Divider />

	<p class="mb-3 mt-5 text-light-content dark:text-dark-content">
		Used in conjunction with the <a class="link" href="/table">Table</a> component.
	</p>

	<CodeBlock language="typescript" code={tableColumn} />

	<br />

	<h2 id="TimelineItem" class="text-light-content dark:text-dark-content mb-0 mt-12">
		TimelineItem
	</h2>
	<Divider />

	<p class="mb-3 mt-5 text-light-content dark:text-dark-content">
		Used in conjunction with the <a class="link" href="/timeline">Timeline</a> component.
	</p>

	<CodeBlock language="typescript" code={timelineItem} />

	<br />

	<h2 id="TooltipConfig" class="text-light-content dark:text-dark-content mb-0 mt-12">
		TooltipConfig
	</h2>
	<Divider />

	<p class="mb-3 mt-5 text-light-content dark:text-dark-content">
		Used in conjunction with the <a class="link" href="/tooltip">tooltip</a> action.
	</p>

	<CodeBlock language="typescript" code={tooltipConfig} />
</Col>
