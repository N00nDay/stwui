import type { Slot, Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'type',
		type: "'info' | 'warn' | 'success' | 'error'",
		default: 'info'
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'icon',
		component: '<Alert.Icon slot="icon" />'
	},
	{
		id: '2',
		slot: 'title',
		component: '<Alert.Title slot="title" />'
	},
	{
		id: '3',
		slot: 'description',
		component: '<Alert.Description slot="description" />'
	},
	{
		id: '4',
		slot: 'extra',
		component: ''
	}
];

export const iconSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const titleSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const descriptionSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const example = `
<script lang="ts">
	import { Alert, Icon } from 'stwui';

	const clear = "svg-path";
	const close = "svg-path";
</script>

<Alert>
	<Alert.Title slot="title">Title</Alert.Title>
</Alert>

<Alert type="warn">
	<Alert.Title slot="title">Title</Alert.Title>
</Alert>

<Alert type="error">
	<Alert.Icon slot="icon">
		<Icon data={clear} class="text-current" />
	</Alert.Icon>
	<Alert.Title slot="title">Title</Alert.Title>
	<Alert.Description slot="description">I am a description</Alert.Description>
	<Button
		ariaLabel="close"
		slot="extra"
		shape="circle"
		class="top-[-0.5rem] right-[-0.5rem] text-error-icon dark:text-dark-error-icon"
		on:click={() => console.log('I clicked extra')}
	>
		<Icon slot="icon" data={close} let:size {size} />
	</Button>
</Alert>`;
