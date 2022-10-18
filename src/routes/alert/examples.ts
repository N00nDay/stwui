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
		slot: 'leading',
		component: '<Alert.Leading slot="leading" />'
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
		component: '<Alert.Extra slot="extra" />'
	}
];

export const leadingSlots: Slot[] = [
	{
		id: '1',
		slot: 'icon',
		component: '<Alert.Leading.Icon slot="icon" />'
	},
	{
		id: '2',
		slot: 'default',
		component: ''
	}
];

export const extraSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const iconProps: Prop[] = [
	{
		id: '1',
		prop: 'data',
		type: '<a href="/types#IconData" class="link">string (IconData)</a>',
		default: ''
	},
	{
		id: '2',
		prop: 'viewBox',
		type: 'string',
		default: '0 0 24 24'
	},
	{
		id: '3',
		prop: 'size',
		type: 'string',
		default: '24px'
	},
	{
		id: '4',
		prop: 'width',
		type: 'string',
		default: '24px'
	},
	{
		id: '5',
		prop: 'height',
		type: 'string',
		default: '24px'
	},
	{
		id: '6',
		prop: 'color',
		type: 'string',
		default: 'currentColor'
	},
	{
		id: '7',
		prop: 'stroke',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '8',
		prop: 'fill',
		type: 'string',
		default: 'currentColor'
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
	import { Alert } from 'stwui';

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
	<Alert.Leading slot="leading">
		<Alert.Leading.Icon slot="icon" data={clear} class="text-current" />
	</Alert.Leading>
	<Alert.Title slot="title">Title</Alert.Title>
	<Alert.Description slot="description">I am a description</Alert.Description>
	<Alert.Extra slot="extra">
		<Button ariaLabel="close" shape="circle" on:click={() => console.log('I clicked extra')}>
			<Button.Icon slot="icon" data={close} />
		</Button>
	</Alert.Extra>
</Alert>`;
