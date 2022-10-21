<script lang="ts">
	import { Button, Card, Col, Swap } from '../../lib';
	import {
		exampleDefault,
		exampleLoading,
		exampleDisabled,
		exampleLeadingTrailing,
		exampleShape,
		exampleSwap,
		props,
		slots,
		iconProps
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
				<Button.Leading data={home} slot="leading" />
				Default button
			</Button>

			<Button type="primary">
				<Button.Leading data={home} slot="leading" />I am primary</Button
			>

			<Button type="danger" {loading}
				>I am scary
				<Button.Trailing data={home} slot="trailing" />
			</Button>

			<Button type="ghost"
				>Boo I am a ghost
				<Button.Trailing data={home} slot="trailing" />
			</Button>

			<Button type="link"
				>I am a link
				<Button.Trailing data={home} slot="trailing" />
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
				<Button.Icon data={home} slot="icon" />
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
				<Swap slot="icon" {loading}>
					<Button.Icon data={menu} slot="on" stroke="currentColor" />
					<Button.Icon data={close} slot="off" stroke="currentColor" />
				</Swap>
			</Button>

			<Button type="primary">
				<Swap {loading} slot="leading">
					<Button.Icon data={menu} slot="on" stroke="currentColor" />
					<Button.Icon data={close} slot="off" stroke="currentColor" />
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
				<Button.Icon data={home} slot="icon" />
			</Button>

			<Button type="primary" size="sm" shape="circle">
				<Button.Icon data={home} slot="icon" />
			</Button>

			<Button type="primary" size="md" shape="circle">
				<Button.Icon data={home} slot="icon" />
			</Button>

			<Button type="primary" size="lg" shape="circle">
				<Button.Icon data={home} slot="icon" />
			</Button>

			<Button type="primary" size="xl" shape="circle">
				<Button.Icon data={home} slot="icon" />
			</Button>

			<Button type="primary" size="fab" shape="circle">
				<Button.Icon data={home} slot="icon" />
			</Button>

			<Button type="default" size="xs">
				<Button.Leading data={home} slot="leading" />
				xs</Button
			>

			<Button type="default" size="sm">
				<Button.Leading data={home} slot="leading" />
				sm</Button
			>

			<Button type="default" size="md">
				<Button.Leading data={home} slot="leading" />
				md</Button
			>

			<Button type="default" size="lg">
				<Button.Leading data={home} slot="leading" />
				lg</Button
			>

			<Button type="default" size="xl">
				<Button.Leading data={home} slot="leading" />
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

<Col class="col-24">
	<PropsTable component="Button.Leading" props={iconProps} />
</Col>

<Col class="col-24">
	<PropsTable component="Button.Icon" props={iconProps} />
</Col>

<Col class="col-24">
	<PropsTable component="Button.Trailing" props={iconProps} />
</Col>
