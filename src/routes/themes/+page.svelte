<script lang="ts">
	import { Col } from '../../lib';
	import {
		dataTheme,
		basicExample,
		sectionExample,
		customTheme,
		advancedExample
	} from './examples';
	import { CodeBlock, InlineCode } from '../../docs';
</script>

<Col class="col-24">
	<p class="mb-5 mt-1 text-secondary-content">
		How to use STWUI Themes? STWUI comes with a light and dark theme, which you can use with no
		extra effort. Each theme defines a set of colors which will be used on all STWUI components. To
		use a theme, add <strong>data-theme</strong> attribute to your <strong>html</strong> tag:
	</p>

	<CodeBlock language="html" code={dataTheme} />

	<h2 class="text-content mb-0 mt-12">Basic Themes</h2>

	<p class="mb-5 mt-1 text-secondary-content">
		To utilize the light and dark themes with no changes modify your <InlineCode
			>tailwind.config.cjs</InlineCode
		> file with the following:
	</p>

	<CodeBlock language="bash" code={basicExample} />

	<p class="mb-5 mt-1 text-secondary-content">
		If you don't want to use a theme, simply do not include it in the themes array.
	</p>

	<h2 class="text-content mb-0 mt-12">How to use a theme only for a section of a page?</h2>

	<p class="mb-5 mt-1 text-secondary-content">
		Add <strong>data-theme="THEME_NAME"</strong> to any element and everything inside will have your
		theme. You can nest themes and there is no limit! You can force a section of your HTML to only use
		a specific theme.
	</p>

	<CodeBlock language="html" code={sectionExample} />

	<h2 class="text-content mb-0 mt-12">How to add a new custom theme?</h2>

	<p class="mb-5 mt-1 text-secondary-content">
		You can add a new theme from <InlineCode>tailwind.config.cjs</InlineCode> file. In the below example,
		I added a new theme called <strong>mytheme</strong> and I'm also including light and dark
		themes.
		<br />&nbsp;&#x2022;&nbsp;&nbsp;The first theme (<strong>mytheme</strong>) will be the default
		theme.
		<br />&nbsp;&#x2022;&nbsp;&nbsp;<strong>dark</strong> theme will be the default theme fordark
		mode.
		<br />In the below example, I have the required colors. All other colors will be generated
		automatically (Like the color of button when you focus on it or the color of text on a
		<strong>primary</strong>
		button).
	</p>

	<CodeBlock language="bash" code={customTheme} />

	<h2 class="text-content mb-0 mt-12">How to customize an existing theme?</h2>

	<p class="mb-5 mt-1 text-secondary-content">
		In your <InlineCode>tailwind.config.cjs</InlineCode>, you can require an existing STWUI theme
		and override some colors. In the below example, I require and spread <strong>light</strong>
		theme and change its
		<strong>primary</strong>
		and <strong>primary-hover</strong> colors:
	</p>

	<CodeBlock language="bash" code={advancedExample} />
</Col>
