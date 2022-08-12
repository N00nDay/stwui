<script lang="ts">
	import { Button } from '@components/button';
	import { Card } from '@components/card';

	let loading = false;

	function handleClick() {
		console.log('button clicked!');
	}

	function toggleLoading() {
		loading = !loading;
	}
</script>

<Card class="m-auto max-w-xl p-8" bordered>
	<h1>Normal</h1>
	<Button on:click={handleClick}>Default button</Button>

	<Button type="primary">I am primary</Button>

	<Button type="danger">I am scary</Button>

	<Button type="ghost">Boo I am a ghost</Button>

	<Button type="link">I am a link</Button>
</Card>

<Card class="m-auto max-w-xl p-8" bordered>
	<h1>Loading</h1>
	<Button loading>Default button</Button>

	<Button type="primary" loading>I am primary</Button>

	<Button type="danger" loading>I am scary</Button>

	<Button type="ghost" loading>Boo I am a ghost</Button>

	<Button type="link" loading>I am a link</Button>
</Card>

<Card class="m-auto max-w-xl p-8" bordered>
	<h1>Disabled</h1>
	<Button disabled>Default button</Button>

	<Button type="primary" disabled>I am primary</Button>

	<Button type="danger" disabled>I am scary</Button>

	<Button type="ghost" disabled>Boo I am a ghost</Button>

	<Button type="link" disabled>I am a link</Button>
</Card>

<Card class="m-auto max-w-xl p-8" bordered>
	<h1>Leading & Trailing</h1>
	<Button {loading} leading="paid">Default button</Button>

	<Button type="primary" leading="paid">I am primary</Button>

	<Button type="danger" {loading} trailing="paid">I am scary</Button>

	<Button type="ghost" trailing="paid">Boo I am a ghost</Button>

	<Button type="link" trailing="paid">I am a link</Button>
</Card>

<Card class="m-auto max-w-xl p-8" bordered>
	<h1>Shape</h1>
	<Button shape="circle" on:click={toggleLoading} {loading} icon="paid" />

	<Button type="primary" shape="square">I am primary</Button>

	<Button type="danger" shape="rounded">I am scary</Button>

	<Button type="ghost">Boo I am a ghost</Button>

	<Button type="link">I am a link</Button>
</Card>

<Card class="m-auto max-w-xl p-8" bordered>
	<h1>Swap your own icon</h1>
	<Button shape="circle" on:click={toggleLoading} {loading} icon="paid" swap="menu" />

	<Button type="primary" shape="square">I am primary</Button>

	<Button type="danger" shape="rounded">I am scary</Button>

	<Button type="ghost">Boo I am a ghost</Button>

	<Button type="link">I am a link</Button>
</Card>

<Card class="m-auto max-w-xl p-8" bordered>
	<h1>Sizes</h1>
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
</Card>
