<script lang="ts">
	import Button from '@components/button';
	import Card from '@components/card';
</script>

<Card class="m-auto max-w-xl p-8" bordered>
	<Button>Default button</Button>

	<Button type="primary">I am primary</Button>

	<Button type="danger">I am scary</Button>

	<Button type="ghost">Boo I am a ghost</Button>

	<Button type="link">I am a link</Button>

	<Button type="primary" loading>I am loading</Button>

	<Button type="primary" disabled loading>I am disabled</Button>
</Card>
