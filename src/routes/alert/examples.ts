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

export const iconProps: Prop[] = [
	{
		id: '1',
		prop: 'icon',
		type: '<a href="/types#MaterialIcon">MaterialIcon</a>',
		default: ''
	}
];

export const example = `
<script lang="ts">
	import { Alert } from 'stwui';
</script>

<Alert>
	<Alert.Title slot="title">Title</Alert.Title>
</Alert>
<br />
<Alert type="warn">
	<Alert.Title slot="title">Title</Alert.Title>
</Alert>
<br />
<Alert type="error">
	<Alert.Icon slot="icon">
		<Icon icon="cancel" class="text-current" />
	</Alert.Icon>
	<Alert.Title slot="title">Title</Alert.Title>
	<Alert.Description slot="description">I am a description</Alert.Description>
	<Button
		slot="extra"
		shape="circle"
		class="top-[-0.5rem] right-[-0.5rem] text-error-icon dark:text-dark-error-icon"
		on:click={() => console.log('I clicked extra')}
	>
		<Button.Icon slot="icon" icon="close" />
	</Button>
</Alert>`;
