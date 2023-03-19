<script lang="ts">
	import { Button, Swap } from '../../lib';
	import {
		typeExample,
		exampleLoading,
		exampleDisabled,
		exampleLeadingTrailing,
		exampleShape,
		exampleSwap,
		exampleSize,
		props,
		slots,
		iconProps
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock, ExampleContainer } from '../../docs';
	import { home } from '../../docs/icons';
	import { menu, close } from '../../lib/icons';

	let loading = false;

	function toggleLoading() {
		loading = !loading;
	}
</script>

<ExampleContainer title="With Type">
	<div slot="preview" class="w-full block m-auto gap-2 text-center">
		<Button on:click={() => console.log("I've been clicked!")} class="mb-2">No Type</Button>

		<Button type="primary" class="mb-2">primary</Button>

		<Button type="danger" class="mb-2">danger</Button>

		<Button type="ghost" class="mb-2">ghost</Button>

		<Button type="link" class="mb-2" href="https://google.com">link</Button>
	</div>
	<CodeBlock slot="code" language="svelte" code={typeExample} />
</ExampleContainer>

<ExampleContainer title="With Loading">
	<div slot="preview" class="w-full block m-auto gap-2 text-center">
		<Button {loading} class="mb-2" on:click={toggleLoading}>No Type</Button>

		<Button type="primary" class="mb-2" {loading} on:click={toggleLoading}>primary</Button>

		<Button type="danger" class="mb-2" {loading} on:click={toggleLoading}>danger</Button>

		<Button type="ghost" class="mb-2" {loading} on:click={toggleLoading}>ghost</Button>

		<Button type="link" class="mb-2" {loading} on:click={toggleLoading}>link</Button>
	</div>
	<CodeBlock slot="code" language="svelte" code={exampleLoading} />
</ExampleContainer>

<ExampleContainer title="With Disabled">
	<div slot="preview" class="w-full block m-auto gap-2 text-center">
		<Button disabled class="mb-2">No Type</Button>

		<Button type="primary" class="mb-2" disabled>primary</Button>

		<Button type="danger" class="mb-2" disabled>danger</Button>

		<Button type="ghost" class="mb-2" disabled>ghost</Button>

		<Button type="link" class="mb-2" disabled>link</Button>
	</div>
	<CodeBlock slot="code" language="svelte" code={exampleDisabled} />
</ExampleContainer>

<ExampleContainer title="With Leading & Trailing">
	<div slot="preview" class="w-full block m-auto gap-2 text-center">
		<Button class="mb-2">
			<Button.Leading data={home} slot="leading" />
			No Type
		</Button>

		<Button type="primary" class="mb-2">
			<Button.Leading data={home} slot="leading" />
			primary
		</Button>

		<Button type="danger" class="mb-2">
			<Button.Leading data={home} slot="leading" />
			danger
		</Button>

		<Button type="ghost" class="mb-2">
			<Button.Leading data={home} slot="leading" />
			ghost
		</Button>

		<Button type="link" class="mb-2">
			<Button.Leading data={home} slot="leading" />
			link
		</Button>

		<br />

		<Button class="mb-2">
			No Type
			<Button.Trailing data={home} slot="trailing" />
		</Button>

		<Button type="primary" class="mb-2">
			primary
			<Button.Trailing data={home} slot="trailing" />
		</Button>

		<Button type="danger" class="mb-2">
			danger
			<Button.Trailing data={home} slot="trailing" />
		</Button>

		<Button type="ghost" class="mb-2">
			ghost
			<Button.Trailing data={home} slot="trailing" />
		</Button>

		<Button type="link" class="mb-2">
			link
			<Button.Trailing data={home} slot="trailing" />
		</Button>
	</div>
	<CodeBlock slot="code" language="svelte" code={exampleLeadingTrailing} />
</ExampleContainer>

<ExampleContainer title="With Shape">
	<div slot="preview" class="w-full block m-auto gap-2 text-center">
		<Button shape="circle" class="mb-2">
			<Button.Icon data={home} slot="icon" />
		</Button>

		<Button shape="circle" type="primary" class="mb-2">
			<Button.Icon data={home} slot="icon" />
		</Button>

		<Button shape="circle" type="danger" class="mb-2">
			<Button.Icon data={home} slot="icon" />
		</Button>

		<Button shape="circle" type="ghost" class="mb-2">
			<Button.Icon data={home} slot="icon" />
		</Button>

		<Button shape="circle" type="link" class="mb-2">
			<Button.Icon data={home} slot="icon" />
		</Button>

		<br />

		<Button shape="pill" class="mb-2">No Type</Button>

		<Button shape="pill" type="primary" class="mb-2">primary</Button>

		<Button shape="pill" type="danger" class="mb-2">danger</Button>

		<Button shape="pill" type="ghost" class="mb-2">ghost</Button>

		<Button shape="pill" type="link" class="mb-2">link</Button>

		<br />

		<Button shape="rounded" class="mb-2">No Type</Button>

		<Button shape="rounded" type="primary" class="mb-2">primary</Button>

		<Button shape="rounded" type="danger" class="mb-2">danger</Button>

		<Button shape="rounded" type="ghost" class="mb-2">ghost</Button>

		<Button shape="rounded" type="link" class="mb-2">link</Button>

		<br />

		<Button shape="square" class="mb-2">No Type</Button>

		<Button shape="square" type="primary" class="mb-2">primary</Button>

		<Button shape="square" type="danger" class="mb-2">danger</Button>

		<Button shape="square" type="ghost" class="mb-2">ghost</Button>

		<Button shape="square" type="link" class="mb-2">link</Button>
	</div>
	<CodeBlock slot="code" language="svelte" code={exampleShape} />
</ExampleContainer>

<ExampleContainer title="With Swap">
	<div slot="preview" class="w-full block m-auto gap-2 text-center">
		<Button shape="circle" class="mb-2" on:click={toggleLoading}>
			<Swap slot="icon" {loading}>
				<Button.Icon data={menu} slot="on" stroke="currentColor" />
				<Button.Icon data={close} slot="off" stroke="currentColor" />
			</Swap>
		</Button>

		<Button shape="circle" class="mb-2" type="primary" on:click={toggleLoading}>
			<Swap slot="icon" {loading}>
				<Button.Icon data={menu} slot="on" stroke="currentColor" />
				<Button.Icon data={close} slot="off" stroke="currentColor" />
			</Swap>
		</Button>

		<Button shape="circle" class="mb-2" type="danger" on:click={toggleLoading}>
			<Swap slot="icon" {loading}>
				<Button.Icon data={menu} slot="on" stroke="currentColor" />
				<Button.Icon data={close} slot="off" stroke="currentColor" />
			</Swap>
		</Button>

		<Button shape="circle" class="mb-2" type="ghost" on:click={toggleLoading}>
			<Swap slot="icon" {loading}>
				<Button.Icon data={menu} slot="on" stroke="currentColor" />
				<Button.Icon data={close} slot="off" stroke="currentColor" />
			</Swap>
		</Button>

		<Button shape="circle" class="mb-2" type="link" on:click={toggleLoading}>
			<Swap slot="icon" {loading}>
				<Button.Icon data={menu} slot="on" stroke="currentColor" />
				<Button.Icon data={close} slot="off" stroke="currentColor" />
			</Swap>
		</Button>

		<br />

		<Button class="mb-2" on:click={toggleLoading}>
			<Swap slot="leading" {loading}>
				<Button.Icon data={menu} slot="on" stroke="currentColor" />
				<Button.Icon data={close} slot="off" stroke="currentColor" />
			</Swap>
			No Type
		</Button>

		<Button type="primary" class="mb-2" on:click={toggleLoading}>
			<Swap slot="leading" {loading}>
				<Button.Icon data={menu} slot="on" stroke="currentColor" />
				<Button.Icon data={close} slot="off" stroke="currentColor" />
			</Swap>
			primary
		</Button>

		<Button type="danger" class="mb-2" on:click={toggleLoading}>
			<Swap slot="leading" {loading}>
				<Button.Icon data={menu} slot="on" stroke="currentColor" />
				<Button.Icon data={close} slot="off" stroke="currentColor" />
			</Swap>
			danger
		</Button>

		<Button type="ghost" class="mb-2" on:click={toggleLoading}>
			<Swap slot="leading" {loading}>
				<Button.Icon data={menu} slot="on" stroke="currentColor" />
				<Button.Icon data={close} slot="off" stroke="currentColor" />
			</Swap>
			ghost
		</Button>

		<Button type="link" class="mb-2" on:click={toggleLoading}>
			<Swap slot="leading" {loading}>
				<Button.Icon data={menu} slot="on" stroke="currentColor" />
				<Button.Icon data={close} slot="off" stroke="currentColor" />
			</Swap>
			link
		</Button>

		<br />

		<Button class="mb-2" on:click={toggleLoading}>
			No Type
			<Swap slot="trailing" {loading}>
				<Button.Icon data={menu} slot="on" stroke="currentColor" />
				<Button.Icon data={close} slot="off" stroke="currentColor" />
			</Swap>
		</Button>

		<Button type="primary" class="mb-2" on:click={toggleLoading}>
			primary
			<Swap slot="trailing" {loading}>
				<Button.Icon data={menu} slot="on" stroke="currentColor" />
				<Button.Icon data={close} slot="off" stroke="currentColor" />
			</Swap>
		</Button>

		<Button type="danger" class="mb-2" on:click={toggleLoading}>
			danger
			<Swap slot="trailing" {loading}>
				<Button.Icon data={menu} slot="on" stroke="currentColor" />
				<Button.Icon data={close} slot="off" stroke="currentColor" />
			</Swap>
		</Button>

		<Button type="ghost" class="mb-2" on:click={toggleLoading}>
			ghost
			<Swap slot="trailing" {loading}>
				<Button.Icon data={menu} slot="on" stroke="currentColor" />
				<Button.Icon data={close} slot="off" stroke="currentColor" />
			</Swap>
		</Button>

		<Button type="link" class="mb-2" on:click={toggleLoading}>
			link
			<Swap slot="trailing" {loading}>
				<Button.Icon data={menu} slot="on" stroke="currentColor" />
				<Button.Icon data={close} slot="off" stroke="currentColor" />
			</Swap>
		</Button>
	</div>
	<CodeBlock slot="code" language="svelte" code={exampleSwap} />
</ExampleContainer>

<ExampleContainer title="With Size">
	<div slot="preview" class="w-full block m-auto gap-2 text-center">
		<Button type="primary" class="mb-2" size="xs">xs</Button>

		<Button type="primary" class="mb-2" size="sm">sm</Button>

		<Button type="primary" class="mb-2" size="md">md</Button>

		<Button type="primary" class="mb-2" size="lg">lg</Button>

		<Button type="primary" class="mb-2" size="xl">xl</Button>

		<br />

		<Button type="primary" class="mb-2" size="xs" shape="circle">
			<Button.Icon data={home} slot="icon" />
		</Button>

		<Button type="primary" class="mb-2" size="sm" shape="circle">
			<Button.Icon data={home} slot="icon" />
		</Button>

		<Button type="primary" class="mb-2" size="md" shape="circle">
			<Button.Icon data={home} slot="icon" />
		</Button>

		<Button type="primary" class="mb-2" size="lg" shape="circle">
			<Button.Icon data={home} slot="icon" />
		</Button>

		<Button type="primary" class="mb-2" size="xl" shape="circle">
			<Button.Icon data={home} slot="icon" />
		</Button>

		<Button type="primary" class="mb-2" size="fab" shape="circle">
			<Button.Icon data={home} slot="icon" />
		</Button>

		<br />

		<Button class="mb-2" size="xs">
			<Button.Leading data={home} slot="leading" />
			xs
		</Button>

		<Button class="mb-2" size="sm">
			<Button.Leading data={home} slot="leading" />
			sm
		</Button>

		<Button class="mb-2" size="md">
			<Button.Leading data={home} slot="leading" />
			md
		</Button>

		<Button class="mb-2" size="lg">
			<Button.Leading data={home} slot="leading" />
			lg
		</Button>

		<Button class="mb-2" size="xl">
			<Button.Leading data={home} slot="leading" />
			xl
		</Button>
	</div>
	<CodeBlock slot="code" language="svelte" code={exampleSize} />
</ExampleContainer>

<PropsTable component="Button" {props} />

<SlotsTable component="Button" {slots} />

<PropsTable component="Button.Leading" props={iconProps} />

<PropsTable component="Button.Icon" props={iconProps} />

<PropsTable component="Button.Trailing" props={iconProps} />
