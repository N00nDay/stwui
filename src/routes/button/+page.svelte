<script lang="ts">
	import { Col } from '../../lib/components/grid';
	import { Card, CardHeader, CardContent } from '../../lib/components/card';
	import { Button, ButtonGroup } from '../../lib/components/button';

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
		<CardHeader>Basic</CardHeader>
		<CardContent class="p-4">
			<Button on:click={handleClick}>Default button</Button>

			<Button type="primary">I am primary</Button>

			<Button type="danger">I am scary</Button>

			<Button type="ghost">Boo I am a ghost</Button>

			<Button type="link">I am a link</Button>
		</CardContent>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered>
		<CardHeader>Loading</CardHeader>
		<CardContent class="p-4">
			<Button loading>Default button</Button>

			<Button type="primary" loading>I am primary</Button>

			<Button type="danger" loading>I am scary</Button>

			<Button type="ghost" loading>Boo I am a ghost</Button>

			<Button type="link" loading>I am a link</Button>
		</CardContent>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered>
		<CardHeader>Disabled</CardHeader>
		<CardContent class="p-4">
			<Button disabled>Default button</Button>

			<Button type="primary" disabled>I am primary</Button>

			<Button type="danger" disabled>I am scary</Button>

			<Button type="ghost" disabled>Boo I am a ghost</Button>

			<Button type="link" disabled>I am a link</Button>
		</CardContent>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered>
		<CardHeader>Leading & Trailing</CardHeader>
		<CardContent class="p-4">
			<Button {loading} leading="paid">Default button</Button>

			<Button type="primary" leading="paid">I am primary</Button>

			<Button type="danger" {loading} trailing="paid">I am scary</Button>

			<Button type="ghost" trailing="paid">Boo I am a ghost</Button>

			<Button type="link" trailing="paid">I am a link</Button>
		</CardContent>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered>
		<CardHeader>Shape</CardHeader>
		<CardContent class="p-4">
			<Button shape="circle" on:click={toggleLoading} {loading} icon="paid" />

			<Button type="primary" shape="square">I am primary</Button>

			<Button type="danger" shape="rounded">I am scary</Button>

			<Button type="ghost">Boo I am a ghost</Button>

			<Button type="link">I am a link</Button>
		</CardContent>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered>
		<CardHeader>Swap Icon</CardHeader>
		<CardContent class="p-4">
			<Button shape="circle" on:click={toggleLoading} {loading} icon="paid" swap="menu" />

			<Button type="primary" shape="square">I am primary</Button>

			<Button type="danger" shape="rounded">I am scary</Button>

			<Button type="ghost">Boo I am a ghost</Button>

			<Button type="link">I am a link</Button>
		</CardContent>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered>
		<CardHeader>Sizes</CardHeader>
		<CardContent class="p-4">
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
		</CardContent>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<CardHeader>Button Group</CardHeader>
		<CardContent class="p-4">
			<ButtonGroup
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
			<ButtonGroup
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
			<ButtonGroup
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
			<ButtonGroup
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
		</CardContent>
	</Card>
</Col>