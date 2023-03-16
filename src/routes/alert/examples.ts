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

export const basicExample = `
<script lang="ts">
	import { Alert } from 'stwui';
</script>

<Alert type="info">
	<Alert.Title slot="title">Title</Alert.Title>
</Alert>
<Alert type="warn">
	<Alert.Title slot="title">Title</Alert.Title>
</Alert>
<Alert type="success">
	<Alert.Title slot="title">Title</Alert.Title>
</Alert>
<Alert type="error">
	<Alert.Title slot="title">Title</Alert.Title>
</Alert>`;

export const withDescriptionExample = `
<script lang="ts">
	import { Alert } from 'stwui';

	const info = "svg-path";
	const alert = "svg-path";
	const check_circle = "svg-path";
	const alert_circle = "svg-path";
</script>

<Alert type="info" class="w-full">
	<Alert.Leading slot="leading" data={info} />
	<Alert.Title slot="title">Title</Alert.Title>
	<Alert.Description slot="description">I am a description</Alert.Description>
</Alert>
<Alert type="warn" class="w-full">
	<Alert.Leading slot="leading" data={alert} />
	<Alert.Title slot="title">Title</Alert.Title>
	<Alert.Description slot="description">I am a description</Alert.Description>
</Alert>
<Alert type="success" class="w-full">
	<Alert.Leading slot="leading" data={check_circle} />
	<Alert.Title slot="title">Title</Alert.Title>
	<Alert.Description slot="description">I am a description</Alert.Description>
</Alert>
<Alert type="error" class="w-full">
	<Alert.Leading slot="leading" data={alert_circle} />
	<Alert.Title slot="title">Title</Alert.Title>
	<Alert.Description slot="description">I am a description</Alert.Description>
</Alert>`;

export const withExtraExample = `
<script lang="ts">
	import { Alert } from 'stwui';

	const info = "svg-path";
	const alert = "svg-path";
	const check_circle = "svg-path";
	const alert_circle = "svg-path";
</script>

<Alert type="info" class="w-full">
	<Alert.Leading slot="leading" data={info} />
	<Alert.Title slot="title">Title</Alert.Title>
	<Alert.Extra slot="extra">
		<Button type="primary">
			Action
			<Button.Trailing slot="trailing" data={arrow_right} />
		</Button>
	</Alert.Extra>
</Alert>
<Alert type="warn" class="w-full">
	<Alert.Leading slot="leading" data={alert} />
	<Alert.Title slot="title">Title</Alert.Title>
	<Alert.Extra slot="extra">
		<Button type="primary">
			Action
			<Button.Trailing slot="trailing" data={arrow_right} />
		</Button>
	</Alert.Extra>
</Alert>
<Alert type="success" class="w-full">
	<Alert.Leading slot="leading" data={check_circle} />
	<Alert.Title slot="title">Title</Alert.Title>
	<Alert.Extra slot="extra">
		<Button type="primary">Action</Button>
	</Alert.Extra>
</Alert>
<Alert type="error" class="w-full">
	<Alert.Leading slot="leading" data={alert_circle} />
	<Alert.Title slot="title">Title</Alert.Title>
	<Alert.Extra slot="extra">
		<Button type="primary">Action</Button>
	</Alert.Extra>
</Alert>`;

export const kitcheSinkExample = `
<script lang="ts">
	import { Alert } from 'stwui';

	const info = "svg-path";
	const alert = "svg-path";
	const check_circle = "svg-path";
	const alert_circle = "svg-path";
</script>

<Alert type="info" class="w-full max-w-lg m-auto">
	<Alert.Leading slot="leading" data={info} />
	<Alert.Title slot="title">Title</Alert.Title>
	<Alert.Description slot="description">I am a description</Alert.Description>
	<Alert.Extra slot="extra">
		<Button type="primary">
			Action
			<Button.Trailing slot="trailing" data={arrow_right} />
		</Button>
	</Alert.Extra>
</Alert>

<Alert type="warn" class="w-full max-w-lg m-auto">
	<Alert.Leading slot="leading" data={alert} />
	<Alert.Title slot="title">Title</Alert.Title>
	<Alert.Description slot="description">I am a description</Alert.Description>
	<Alert.Extra slot="extra">
		<Button type="primary">
			Action
			<Button.Trailing slot="trailing" data={arrow_right} />
		</Button>
	</Alert.Extra>
</Alert>

<Alert type="success" class="w-full max-w-lg m-auto">
	<Alert.Leading slot="leading" data={check_circle} />
	<Alert.Title slot="title">Title</Alert.Title>
	<Alert.Description slot="description">I am a description</Alert.Description>
	<Alert.Extra slot="extra">
		<Button type="primary">
			Action
			<Button.Trailing slot="trailing" data={arrow_right} />
		</Button>
	</Alert.Extra>
</Alert>

<Alert type="error" class="w-full max-w-lg m-auto">
	<Alert.Leading slot="leading" data={alert_circle} />
	<Alert.Title slot="title">Title</Alert.Title>
	<Alert.Description slot="description">I am a description</Alert.Description>
	<Alert.Extra slot="extra">
		<Button type="primary">
			Action
			<Button.Trailing slot="trailing" data={arrow_right} />
		</Button>
	</Alert.Extra>
</Alert>
`;
