<script lang="ts">
	import { Row, Col, Divider } from '../../lib';
	import {
		example1,
		example2,
		example3,
		example4,
		rowProps,
		rowSlots,
		colSlots,
		classList
	} from './examples';
	import { PropsTable, SlotsTable, ClassTable, CodeBlock, ExampleContainer } from '../../docs';
	import { breakpoints } from '$lib/stores';

	const defaultClass = 'flex items-center justify-center h-12 text-primary-content';

	const lightBlock = defaultClass + ' bg-blue-500';
	const darkBlock = defaultClass + ' bg-primary';

	const lightBlockWithSpacing = defaultClass + ' bg-blue-500 py-4 my-2';
	const darkBlockWithSpacing = defaultClass + ' bg-primary py-4 my-2';
</script>

<ExampleContainer title="Basic">
	<div slot="preview" class="w-full">
		<Row>
			<Col class="col-24">
				<div class={lightBlockWithSpacing}>col-24</div>
			</Col>
		</Row>
		<Row>
			<Col class="col-12">
				<div class={lightBlockWithSpacing}>col-12</div>
			</Col>
			<Col class="col-12">
				<div class={darkBlockWithSpacing}>col-12</div>
			</Col>
		</Row>

		<Row>
			<Col class="col-8">
				<div class={lightBlockWithSpacing}>col-8</div>
			</Col>
			<Col class="col-8">
				<div class={darkBlockWithSpacing}>col-8</div>
			</Col>
			<Col class="col-8">
				<div class={lightBlockWithSpacing}>col-8</div>
			</Col>
		</Row>

		<Row>
			<Col class="col-6">
				<div class={lightBlockWithSpacing}>col-6</div>
			</Col>
			<Col class="col-6">
				<div class={darkBlockWithSpacing}>col-6</div>
			</Col>
			<Col class="col-6">
				<div class={lightBlockWithSpacing}>col-6</div>
			</Col>
			<Col class="col-6">
				<div class={darkBlockWithSpacing}>col-6</div>
			</Col>
		</Row>

		<Row>
			<Col class="w-[20%]">
				<div class={lightBlockWithSpacing}>w-[20%]</div>
			</Col>
			<Col class="w-[20%]">
				<div class={darkBlockWithSpacing}>w-[20%]</div>
			</Col>
			<Col class="w-[20%]">
				<div class={lightBlockWithSpacing}>w-[20%]</div>
			</Col>
			<Col class="w-[20%]">
				<div class={darkBlockWithSpacing}>w-[20%]</div>
			</Col>
			<Col class="w-[20%]">
				<div class={lightBlockWithSpacing}>w-[20%]</div>
			</Col>
		</Row>
	</div>

	<CodeBlock slot="code" language="svelte" code={example1} />
</ExampleContainer>

<ExampleContainer title="With Breakpoints" resizable={false}>
	<div slot="preview" class="w-full">
		<Row>
			<Col class="col-24 sm:col-12 md:col-12 lg:col-8 xl:col-4 2xl:col-4">
				<div class={lightBlockWithSpacing}>
					{#if $breakpoints['2xl']}
						2xl:col-4
					{:else if $breakpoints.xl}
						xl:col-4
					{:else if $breakpoints.lg}
						lg:col-8
					{:else if $breakpoints.md}
						md:col-12
					{:else if $breakpoints.sm}
						sm:col-12
					{:else}
						col-24
					{/if}
				</div>
			</Col>
			<Col class="col-24 sm:col-12 md:col-12 lg:col-8 xl:col-4 2xl:col-4">
				<div class={darkBlockWithSpacing}>
					{#if $breakpoints['2xl']}
						2xl:col-4
					{:else if $breakpoints.xl}
						xl:col-4
					{:else if $breakpoints.lg}
						lg:col-8
					{:else if $breakpoints.md}
						md:col-12
					{:else if $breakpoints.sm}
						sm:col-12
					{:else}
						col-24
					{/if}
				</div>
			</Col>
			<Col class="col-24 sm:col-12 md:col-12 lg:col-8 xl:col-4 2xl:col-4">
				<div class={lightBlockWithSpacing}>
					{#if $breakpoints['2xl']}
						2xl:col-4
					{:else if $breakpoints.xl}
						xl:col-4
					{:else if $breakpoints.lg}
						lg:col-8
					{:else if $breakpoints.md}
						md:col-12
					{:else if $breakpoints.sm}
						sm:col-12
					{:else}
						col-24
					{/if}
				</div>
			</Col>
			<Col class="col-24 sm:col-12 md:col-12 lg:col-8 xl:col-4 2xl:col-4">
				<div class={darkBlockWithSpacing}>
					{#if $breakpoints['2xl']}
						2xl:col-4
					{:else if $breakpoints.xl}
						xl:col-4
					{:else if $breakpoints.lg}
						lg:col-8
					{:else if $breakpoints.md}
						md:col-12
					{:else if $breakpoints.sm}
						sm:col-12
					{:else}
						col-24
					{/if}
				</div>
			</Col>
			<Col class="col-24 sm:col-12 md:col-12 lg:col-8 xl:col-4 2xl:col-4">
				<div class={lightBlockWithSpacing}>
					{#if $breakpoints['2xl']}
						2xl:col-4
					{:else if $breakpoints.xl}
						xl:col-4
					{:else if $breakpoints.lg}
						lg:col-8
					{:else if $breakpoints.md}
						md:col-12
					{:else if $breakpoints.sm}
						sm:col-12
					{:else}
						col-24
					{/if}
				</div>
			</Col>
			<Col class="col-24 sm:col-12 md:col-12 lg:col-8 xl:col-4 2xl:col-4">
				<div class={darkBlockWithSpacing}>
					{#if $breakpoints['2xl']}
						2xl:col-4
					{:else if $breakpoints.xl}
						xl:col-4
					{:else if $breakpoints.lg}
						lg:col-8
					{:else if $breakpoints.md}
						md:col-12
					{:else if $breakpoints.sm}
						sm:col-12
					{:else}
						col-24
					{/if}
				</div>
			</Col>
		</Row>
		<!-- <Row>
			<Col class="col-12">
				<div class={lightBlockWithSpacing}>col-12</div>
			</Col>
			<Col class="col-12">
				<div class={darkBlockWithSpacing}>col-12</div>
			</Col>
		</Row>

		<Row>
			<Col class="col-8">
				<div class={lightBlockWithSpacing}>col-8</div>
			</Col>
			<Col class="col-8">
				<div class={darkBlockWithSpacing}>col-8</div>
			</Col>
			<Col class="col-8">
				<div class={lightBlockWithSpacing}>col-8</div>
			</Col>
		</Row> -->

		<!-- <Row>
			<Col class="col-6">
				<div class={lightBlockWithSpacing}>col-6</div>
			</Col>
			<Col class="col-6">
				<div class={darkBlockWithSpacing}>col-6</div>
			</Col>
			<Col class="col-6">
				<div class={lightBlockWithSpacing}>col-6</div>
			</Col>
			<Col class="col-6">
				<div class={darkBlockWithSpacing}>col-6</div>
			</Col>
		</Row>

		<Row>
			<Col class="w-[20%]">
				<div class={lightBlockWithSpacing}>w-[20%]</div>
			</Col>
			<Col class="w-[20%]">
				<div class={darkBlockWithSpacing}>w-[20%]</div>
			</Col>
			<Col class="w-[20%]">
				<div class={lightBlockWithSpacing}>w-[20%]</div>
			</Col>
			<Col class="w-[20%]">
				<div class={darkBlockWithSpacing}>w-[20%]</div>
			</Col>
			<Col class="w-[20%]">
				<div class={lightBlockWithSpacing}>w-[20%]</div>
			</Col>
		</Row> -->
	</div>

	<CodeBlock slot="code" language="svelte" code={example1} />
</ExampleContainer>

<ExampleContainer title="With Gutter">
	<div slot="preview" class="w-full">
		<Divider position="left">
			<Divider.Label slot="label">Horizontal</Divider.Label>
		</Divider>

		<Row gutter={['0', '4']}>
			<Col class="col-6">
				<div class={lightBlock}>col-6</div>
			</Col>
			<Col class="col-6">
				<div class={darkBlock}>col-6</div>
			</Col>
			<Col class="col-6">
				<div class={lightBlock}>col-6</div>
			</Col>
			<Col class="col-6">
				<div class={darkBlock}>col-6</div>
			</Col>

			<Col class="col-6">
				<div class={lightBlock}>col-6</div>
			</Col>
			<Col class="col-6">
				<div class={darkBlock}>col-6</div>
			</Col>
			<Col class="col-6">
				<div class={lightBlock}>col-6</div>
			</Col>
			<Col class="col-6">
				<div class={darkBlock}>col-6</div>
			</Col>
		</Row>

		<Divider position="left">
			<Divider.Label slot="label">Vertical</Divider.Label>
		</Divider>

		<Row gutter={['4', '0']}>
			<Col class="col-6">
				<div class={lightBlock}>col-6</div>
			</Col>
			<Col class="col-6">
				<div class={darkBlock}>col-6</div>
			</Col>
			<Col class="col-6">
				<div class={lightBlock}>col-6</div>
			</Col>
			<Col class="col-6">
				<div class={darkBlock}>col-6</div>
			</Col>

			<Col class="col-6">
				<div class={lightBlock}>col-6</div>
			</Col>
			<Col class="col-6">
				<div class={darkBlock}>col-6</div>
			</Col>
			<Col class="col-6">
				<div class={lightBlock}>col-6</div>
			</Col>
			<Col class="col-6">
				<div class={darkBlock}>col-6</div>
			</Col>
		</Row>

		<Divider position="left">
			<Divider.Label slot="label">Horizontal & Vertical</Divider.Label>
		</Divider>

		<Row gutter="4">
			<Col class="col-6">
				<div class={lightBlock}>col-6</div>
			</Col>
			<Col class="col-6">
				<div class={darkBlock}>col-6</div>
			</Col>
			<Col class="col-6">
				<div class={lightBlock}>col-6</div>
			</Col>
			<Col class="col-6">
				<div class={darkBlock}>col-6</div>
			</Col>

			<Col class="col-6">
				<div class={lightBlock}>col-6</div>
			</Col>
			<Col class="col-6">
				<div class={darkBlock}>col-6</div>
			</Col>
			<Col class="col-6">
				<div class={lightBlock}>col-6</div>
			</Col>
			<Col class="col-6">
				<div class={darkBlock}>col-6</div>
			</Col>
		</Row>
	</div>

	<CodeBlock slot="code" language="svelte" code={example2} />
</ExampleContainer>

<ExampleContainer title="With Justify">
	<div slot="preview" class="w-full">
		<Divider position="left">
			<Divider.Label slot="label">Start</Divider.Label>
		</Divider>

		<Row justify="start" class="bg-background p-2">
			<Col class="col-4">
				<div class={lightBlock}>col-4</div>
			</Col>
			<Col class="col-4">
				<div class={darkBlock}>col-4</div>
			</Col>
			<Col class="col-4">
				<div class={lightBlock}>col-4</div>
			</Col>
			<Col class="col-4">
				<div class={darkBlock}>col-4</div>
			</Col>
		</Row>

		<Divider position="left">
			<Divider.Label slot="label">Center</Divider.Label>
		</Divider>

		<Row justify="center" class="bg-background p-2">
			<Col class="col-4">
				<div class={lightBlock}>col-4</div>
			</Col>
			<Col class="col-4">
				<div class={darkBlock}>col-4</div>
			</Col>
			<Col class="col-4">
				<div class={lightBlock}>col-4</div>
			</Col>
			<Col class="col-4">
				<div class={darkBlock}>col-4</div>
			</Col>
		</Row>

		<Divider position="left">
			<Divider.Label slot="label">End</Divider.Label>
		</Divider>

		<Row justify="end" class="bg-background p-2">
			<Col class="col-4">
				<div class={lightBlock}>col-4</div>
			</Col>
			<Col class="col-4">
				<div class={darkBlock}>col-4</div>
			</Col>
			<Col class="col-4">
				<div class={lightBlock}>col-4</div>
			</Col>
			<Col class="col-4">
				<div class={darkBlock}>col-4</div>
			</Col>
		</Row>

		<Divider position="left">
			<Divider.Label slot="label">Between</Divider.Label>
		</Divider>

		<Row justify="between" class="bg-background p-2">
			<Col class="col-4">
				<div class={lightBlock}>col-4</div>
			</Col>
			<Col class="col-4">
				<div class={darkBlock}>col-4</div>
			</Col>
			<Col class="col-4">
				<div class={lightBlock}>col-4</div>
			</Col>
			<Col class="col-4">
				<div class={darkBlock}>col-4</div>
			</Col>
		</Row>

		<Divider position="left">
			<Divider.Label slot="label">Around</Divider.Label>
		</Divider>

		<Row justify="around" class="bg-backgroundp-2">
			<Col class="col-4">
				<div class={lightBlock}>col-4</div>
			</Col>
			<Col class="col-4">
				<div class={darkBlock}>col-4</div>
			</Col>
			<Col class="col-4">
				<div class={lightBlock}>col-4</div>
			</Col>
			<Col class="col-4">
				<div class={darkBlock}>col-4</div>
			</Col>
		</Row>
	</div>

	<CodeBlock slot="code" language="svelte" code={example3} />
</ExampleContainer>

<ExampleContainer title="With Align">
	<div slot="preview" class="w-full">
		<Divider position="left">
			<Divider.Label slot="label">Start</Divider.Label>
		</Divider>

		<Row align="start" justify="center" class="bg-background p-2">
			<Col class="col-4">
				<div class={lightBlock} style="height: 5rem;">col-4</div>
			</Col>
			<Col class="col-4">
				<div class={darkBlock}>col-4</div>
			</Col>
			<Col class="col-4">
				<div class={lightBlock} style="height: 5rem;">col-4</div>
			</Col>
			<Col class="col-4">
				<div class={darkBlock}>col-4</div>
			</Col>
		</Row>

		<Divider position="left">
			<Divider.Label slot="label">Center</Divider.Label>
		</Divider>

		<Row align="center" justify="between" class="bg-background p-2">
			<Col class="col-4">
				<div class={lightBlock} style="height: 4rem;">col-4</div>
			</Col>
			<Col class="col-4">
				<div class={darkBlock}>col-4</div>
			</Col>
			<Col class="col-4">
				<div class={lightBlock} style="height: 4rem;">col-4</div>
			</Col>
			<Col class="col-4">
				<div class={darkBlock}>col-4</div>
			</Col>
		</Row>

		<Divider position="left">
			<Divider.Label slot="label">End</Divider.Label>
		</Divider>

		<Row align="end" justify="center" class="bg-background p-2">
			<Col class="col-4">
				<div class={lightBlock} style="height: 4rem;">col-4</div>
			</Col>
			<Col class="col-4">
				<div class={darkBlock}>col-4</div>
			</Col>
			<Col class="col-4">
				<div class={lightBlock} style="height: 4rem;">col-4</div>
			</Col>
			<Col class="col-4">
				<div class={darkBlock}>col-4</div>
			</Col>
		</Row>
	</div>

	<CodeBlock slot="code" language="svelte" code={example4} />
</ExampleContainer>

<SlotsTable component="Row" slots={rowSlots} />

<PropsTable component="Row" props={rowProps} />

<SlotsTable component="Col" slots={colSlots} />

<ClassTable component="Row/Col" {classList} />
