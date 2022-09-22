<script lang="ts">
	import { Button, Card, Col } from '../../lib';

	let loading = false;

	function handleClick() {
		console.log('button clicked!');
	}

	function toggleLoading() {
		loading = !loading;
	}
</script>

<Col class="col-24 md:col-12">
	<Card bordered>
		<Card.Header slot="header">Basic</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Button on:click={handleClick}>Default button</Button>

			<Button type="primary">I am primary</Button>

			<Button type="danger">I am scary</Button>

			<Button type="ghost">Boo I am a ghost</Button>

			<Button type="link">I am a link</Button>
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
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered>
		<Card.Header slot="header">Leading & Trailing</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Button {loading} leading="paid">Default button</Button>

			<Button type="primary" leading="paid">I am primary</Button>

			<Button type="danger" {loading} trailing="paid">I am scary</Button>

			<Button type="ghost" trailing="paid">Boo I am a ghost</Button>

			<Button type="link" trailing="paid">I am a link</Button>
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered>
		<Card.Header slot="header">Shape</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Button shape="circle" on:click={toggleLoading} {loading} icon="paid" />

			<Button type="primary" shape="square">I am primary</Button>

			<Button type="danger" shape="rounded">I am scary</Button>

			<Button type="ghost">Boo I am a ghost</Button>

			<Button type="link">I am a link</Button>
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered>
		<Card.Header slot="header">Swap Icon</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Button shape="circle" on:click={toggleLoading} {loading} icon="paid" swap="menu" />

			<Button type="primary" shape="square">I am primary</Button>

			<Button type="danger" shape="rounded">I am scary</Button>

			<Button type="ghost">Boo I am a ghost</Button>

			<Button type="link">I am a link</Button>
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

			<Button type="primary" size="xs" shape="circle" icon="paid" />

			<Button type="primary" size="sm" shape="circle" icon="paid" />

			<Button type="primary" size="md" shape="circle" icon="paid" />

			<Button type="primary" size="lg" shape="circle" icon="paid" />

			<Button type="primary" size="xl" shape="circle" icon="paid" />

			<Button type="default" size="xs" leading="paid">xs</Button>

			<Button type="default" size="sm" leading="paid">sm</Button>

			<Button type="default" size="md" leading="paid">md</Button>

			<Button type="default" size="lg" leading="paid">lg</Button>

			<Button type="default" size="xl" leading="paid">xl</Button>
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Button Group</Card.Header>
		<Card.Content slot="content" class="p-4">
			<Button.Group
				buttons={[
					{
						label: 'Button 1',
						onClick: () => console.log('clicked button!')
					},
					{
						label: 'Button 2',
						onClick: () => console.log('clicked button!')
					},
					{
						label: 'Button 3',
						onClick: () => console.log('clicked button!')
					}
				]}
			/>
			<br />
			<Button.Group
				allowDeselect
				buttons={[
					{
						label: 'Button 1',
						onClick: () => console.log('clicked button!')
					},
					{
						label: 'Button 2',
						onClick: () => console.log('clicked button!')
					},
					{
						label: 'Button 3',
						onClick: () => console.log('clicked button!')
					}
				]}
			/>
			<br />
			<Button.Group
				allowDeselect
				buttons={[
					{
						icon: 'home',
						onClick: () => console.log('clicked button!')
					},
					{
						icon: 'description',
						onClick: () => console.log('clicked button!')
					},
					{
						icon: 'question_answer',
						onClick: () => console.log('clicked button!')
					}
				]}
			/>
			<br />
			<Button.Group
				allowDeselect
				buttons={[
					{
						label: 'Label',
						icon: 'home',
						onClick: () => console.log('clicked button!')
					},
					{
						label: 'Label',
						icon: 'description',
						onClick: () => console.log('clicked button!')
					},
					{
						label: 'Label',
						icon: 'question_answer',
						onClick: () => console.log('clicked button!')
					}
				]}
			/>
		</Card.Content>
	</Card>
</Col>
