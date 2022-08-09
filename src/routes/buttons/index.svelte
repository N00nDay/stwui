<script lang="ts">
	import Button from '@components/button';
	import Card from '@components/card';
</script>

<Card class="m-auto max-w-xl p-8" bordered>
	<h1>Normal</h1>
	<Button>Default button</Button>

	<Button type="primary">I am primary</Button>

	<Button type="danger">I am scary</Button>

	<Button type="ghost">Boo I am a ghost</Button>

	<Button type="link">I am a link</Button>
</Card>

<Card class="m-auto max-w-xl p-8" bordered>
	<h1>Loading</h1>
	<Button lodading>Default button</Button>

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
