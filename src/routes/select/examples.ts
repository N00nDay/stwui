import type { Slot, Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'name',
		type: 'string',
		default: ''
	},
	{
		id: '2',
		prop: 'error',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '3',
		prop: 'placeholder',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '4',
		prop: 'value',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '5',
		prop: 'visible',
		type: 'boolean',
		default: 'false'
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'label',
		component: '<Select.Label slot="label" />'
	},
	{
		id: '2',
		slot: 'leading',
		component: '<Select.Leading slot="leading" />'
	},
	{
		id: '3',
		slot: 'options',
		component: '<Select.Options slot="options" />'
	}
];

export const labelSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const optionsSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const optionProps: Prop[] = [
	{
		id: '1',
		prop: 'option',
		type: 'string',
		default: ''
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

export const example = `
<script lang="ts">
	import { Select } from 'stwui';

	const email = "svg-path";
	const options = ['Option 1', 'Option 2', 'Option 3'];

	let value: string | undefined;
	let error: string | undefined = "You're doing it wrong!";
	$: if (value && value.length > 0) {
		error = undefined;
	} else {
		error = "You're doing it wrong!";
	}
</script>

<Select name="select-1" placeholder="Basic">
	<Select.Options slot="options">
		{#each options as option}
			<Select.Options.Option {option} />
		{/each}
	</Select.Options>
</Select>

<Select name="select-2">
	<Select.Label slot="label">Label</Select.Label>
	<Select.Leading slot="leading" data={email} />
	<Select.Options slot="options">
		{#each options as option}
			<Select.Options.Option {option} />
		{/each}
	</Select.Options>
</Select>

<Select name="select-3" {error} bind:value>
	<Select.Label slot="label">Label</Select.Label>
	<Select.Leading slot="leading" data={email} />
	<Select.Options slot="options">
		{#each options as option}
			<Select.Options.Option {option} />
		{/each}
	</Select.Options>
</Select>`;
