<script lang="ts">
	import { Button, Card, Col, Icon, Swap } from '../../lib';
	import CodeBlock from '../../docs/components/code-block';
	import {
		exampleDefault,
		exampleLoading,
		exampleDisabled,
		exampleLeadingTrailing,
		exampleShape,
		exampleSwap,
		props,
		slots,
		leadingTrailingIconSlots,
		iconProps
	} from './examples';
	import { PropsTable, SlotsTable } from '../../docs';

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

			<CodeBlock language="typescript" code={exampleDefault} />
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

			<CodeBlock language="typescript" code={exampleLoading} />
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

			<CodeBlock language="typescript" code={exampleDisabled} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered>
		<Card.Header slot="header">Leading & Trailing</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Button {loading} on:click={toggleLoading}>
				<Button.Leading slot="leading">
					<Button.Leading.Icon icon="paid" />
				</Button.Leading>
				Default button
			</Button>

			<Button type="primary">
				<Button.Leading slot="leading">
					<Button.Leading.Icon icon="paid" />
				</Button.Leading>I am primary</Button
			>

			<Button type="danger" {loading}
				>I am scary
				<Button.Trailing slot="trailing">
					<Button.Trailing.Icon icon="paid" />
				</Button.Trailing></Button
			>

			<Button type="ghost"
				>Boo I am a ghost
				<Button.Trailing slot="trailing">
					<Button.Trailing.Icon icon="paid" />
				</Button.Trailing>
			</Button>

			<Button type="link"
				>I am a link
				<Button.Trailing slot="trailing">
					<Button.Trailing.Icon icon="paid" />
				</Button.Trailing>
			</Button>

			<br />
			<br />

			<CodeBlock language="typescript" code={exampleLeadingTrailing} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered>
		<Card.Header slot="header">Shape</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Button shape="circle" on:click={toggleLoading} {loading}>
				<Button.Icon slot="icon" icon="paid" />
			</Button>

			<Button type="primary" shape="square">I am primary</Button>

			<Button type="danger" shape="rounded">I am scary</Button>

			<Button type="ghost">Boo I am a ghost</Button>

			<Button type="link">I am a link</Button>

			<br />
			<br />

			<CodeBlock language="typescript" code={exampleShape} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered>
		<Card.Header slot="header">Swap Icon</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Button shape="circle" on:click={toggleLoading}>
				<Swap slot="icon" {loading}>
					<Icon slot="on" icon="menu" />
					<Icon slot="off" icon="close" />
				</Swap>
			</Button>

			<Button type="primary">
				<Button.Leading slot="leading">
					<Swap {loading}>
						<Icon slot="on" icon="menu" />
						<Icon slot="off" icon="close" />
					</Swap>
				</Button.Leading>
				I am primary
			</Button>

			<br />
			<br />

			<CodeBlock language="typescript" code={exampleSwap} />
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
				<Button.Icon slot="icon" icon="paid" />
			</Button>

			<Button type="primary" size="sm" shape="circle">
				<Button.Icon slot="icon" icon="paid" />
			</Button>

			<Button type="primary" size="md" shape="circle">
				<Button.Icon slot="icon" icon="paid" />
			</Button>

			<Button type="primary" size="lg" shape="circle">
				<Button.Icon slot="icon" icon="paid" />
			</Button>

			<Button type="primary" size="xl" shape="circle">
				<Button.Icon slot="icon" icon="paid" />
			</Button>

			<Button type="default" size="xs">
				<Button.Leading slot="leading">
					<Button.Icon icon="paid" />
				</Button.Leading>
				xs</Button
			>

			<Button type="default" size="sm">
				<Button.Leading slot="leading">
					<Button.Icon icon="paid" />
				</Button.Leading>sm</Button
			>

			<Button type="default" size="md">
				<Button.Leading slot="leading">
					<Button.Icon icon="paid" />
				</Button.Leading>md</Button
			>

			<Button type="default" size="lg">
				<Button.Leading slot="leading">
					<Button.Icon icon="paid" />
				</Button.Leading>lg</Button
			>

			<Button type="default" size="xl">
				<Button.Leading slot="leading">
					<Button.Icon icon="paid" />
				</Button.Leading>xl</Button
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
	<SlotsTable component="Button.Leading" slots={leadingTrailingIconSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="Button.Leading.Icon" props={iconProps} />
</Col>

<Col class="col-24">
	<PropsTable component="Button.Icon" props={iconProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="Button.Trailing" slots={leadingTrailingIconSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="Button.Trailing.Icon" props={iconProps} />
</Col>
