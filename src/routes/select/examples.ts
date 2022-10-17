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
		prop: 'autofocus',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '6',
		prop: 'visible',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '7',
		prop: 'options',
		type: 'string[]',
		default: '[]'
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
		component: ''
	}
];

export const example = `
<script lang="ts">
	import { Select, Icon } from 'stwui';
	
	const email = "svg-path";
	const options = ['Option 1', 'Option 2', 'Option 3'];
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
	<Icon slot="leading" path={email} />
	<Select.Options slot="options">
		{#each options as option}
			<Select.Options.Option {option} />
		{/each}
	</Select.Options>
</Select>

<Select name="select-3" error="There has been an error">
	<Select.Label slot="label">Label</Select.Label>
	<Icon slot="leading" path={email} />
	<Select.Options slot="options">
		{#each options as option}
			<Select.Options.Option {option} />
		{/each}
	</Select.Options>
</Select>`;
