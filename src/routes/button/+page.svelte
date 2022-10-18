<script lang="ts">
	import { Button, Card, Col, Icon, Swap } from '../../lib';
	import {
		exampleDefault,
		exampleLoading,
		exampleDisabled,
		exampleLeadingTrailing,
		exampleShape,
		exampleSwap,
		props,
		slots
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';
	import { home } from '../../docs/icons';
	import { menu, close } from '../../lib/icons';

	let loading = false;

	function toggleLoading() {
		loading = !loading;
	}
</script>

<Col class="col-24 md:col-12">
	<Card bordered>
		<Card.Header slot="header">Basic</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Button on:click={() => console.log("I've been clicked!")}>Default button</Button>

			<Button type="primary">I am primary</Button>

			<Button type="danger">I am scary</Button>

			<Button type="ghost">Boo I am a ghost</Button>

			<Button type="link">I am a link</Button>

			<br />
			<br />

			<CodeBlock language="svelte" code={exampleDefault} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered>
		<Card.Header slot="header">Loading</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Button loading>Default button</Button>

			<Button type="primary" loading>I am primary</Button>

			<Button type="danger" loading>I am scary</Button>

			<Button type="ghost" loading>Boo I am a ghost</Button>

			<Button type="link" loading>I am a link</Button>

			<br />
			<br />

			<CodeBlock language="svelte" code={exampleLoading} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered>
		<Card.Header slot="header">Disabled</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Button disabled>Default button</Button>

			<Button type="primary" disabled>I am primary</Button>

			<Button type="danger" disabled>I am scary</Button>

			<Button type="ghost" disabled>Boo I am a ghost</Button>

			<Button type="link" disabled>I am a link</Button>

			<br />
			<br />

			<CodeBlock language="svelte" code={exampleDisabled} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered>
		<Card.Header slot="header">Leading & Trailing</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Button {loading} on:click={toggleLoading}>
				<Icon data={home} slot="leading" let:size {size} />
				Default button
			</Button>

			<Button type="primary">
				<Icon data={home} slot="leading" let:size {size} />I am primary</Button
			>

			<Button type="danger" {loading}
				>I am scary
				<Icon data={home} slot="trailing" let:size {size} />
			</Button>

			<Button type="ghost"
				>Boo I am a ghost
				<Icon data={home} slot="trailing" let:size {size} />
			</Button>

			<Button type="link"
				>I am a link
				<Icon data={home} slot="trailing" let:size {size} />
			</Button>

			<br />
			<br />

			<CodeBlock language="svelte" code={exampleLeadingTrailing} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered>
		<Card.Header slot="header">Shape</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Button shape="circle" on:click={toggleLoading} {loading}>
				<Icon data={home} slot="icon" let:size {size} />
			</Button>

			<Button type="primary" shape="square">I am primary</Button>

			<Button type="danger" shape="rounded">I am scary</Button>

			<Button type="ghost">Boo I am a ghost</Button>

			<Button type="link">I am a link</Button>

			<br />
			<br />

			<CodeBlock language="svelte" code={exampleShape} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered>
		<Card.Header slot="header">Swap Icon</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Button shape="circle" on:click={toggleLoading}>
				<Swap slot="icon" {loading} let:size>
					<Icon data={menu} slot="on" {size} />
					<Icon data={close} slot="off" {size} />
				</Swap>
			</Button>

			<Button type="primary">
				<Swap {loading} slot="leading" let:size>
					<Icon data={menu} slot="on" {size} />
					<Icon data={close} slot="off" {size} />
				</Swap>
				I am primary
			</Button>

			<br />
			<br />

			<CodeBlock language="svelte" code={exampleSwap} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered>
		<Card.Header slot="header">Sizes</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Button type="primary" size="xs">xs</Button>

			<Button type="primary" size="sm">sm</Button>

			<Button type="primary" size="md">md</Button>

			<Button type="primary" size="lg">lg</Button>

			<Button type="primary" size="xl">xl</Button>

			<Button type="primary" size="xs" shape="circle">
				<Icon data={home} slot="icon" let:size {size} />
			</Button>

			<Button type="primary" size="sm" shape="circle">
				<Icon data={home} slot="icon" let:size {size} />
			</Button>

			<Button type="primary" size="md" shape="circle">
				<Icon data={home} slot="icon" let:size {size} />
			</Button>

			<Button type="primary" size="lg" shape="circle">
				<Icon data={home} slot="icon" let:size {size} />
			</Button>

			<Button type="primary" size="xl" shape="circle">
				<Icon data={home} slot="icon" let:size {size} />
			</Button>

			<Button type="default" size="xs">
				<Icon data={home} slot="leading" let:size {size} />
				xs</Button
			>

			<Button type="default" size="sm">
				<Icon data={home} slot="leading" let:size {size} />
				sm</Button
			>

			<Button type="default" size="md">
				<Icon data={home} slot="leading" let:size {size} />
				md</Button
			>

			<Button type="default" size="lg">
				<Icon data={home} slot="leading" let:size {size} />
				lg</Button
			>

			<Button type="default" size="xl">
				<Icon data={home} slot="leading" let:size {size} />
				xl</Button
			>
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="Button" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="Button" {slots} />
</Col>
