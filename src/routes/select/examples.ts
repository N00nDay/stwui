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
		type: '<a href="/types#SelectOption" class="link">SelectOption</a> | undefined',
		default: ''
	},
	{
		id: '5',
		prop: 'multiple',
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
		prop: 'optionLabel',
		type: 'string',
		default: 'label'
	},
	{
		id: '8',
		prop: 'optionValue',
		type: 'string',
		default: 'value'
	},
	{
		id: '9',
		prop: 'closeOnSelect',
		type: 'boolean',
		default: 'true'
	},
	{
		id: '10',
		prop: 'disabled',
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
	import { SelectOption } from 'stwui/types';

	const options: SelectOption[] = [
		{
			value: 'option_1',
			label: 'Option 1'
		},
		{
			value: 'option_2',
			label: 'Option 2'
		},
		{
			value: 'option_3',
			label: 'Option 3'
		}
	];
</script>

<Select name="select-1" placeholder="Basic">
	<Select.Options slot="options">
		{#each options as option}
			<Select.Options.Option {option} />
		{/each}
	</Select.Options>
</Select>`;

export const exampleLabel = `
<script lang="ts">
	import { Select } from 'stwui';
	import { SelectOption } from 'stwui/types';

	const options: SelectOption[] = [
		{
			value: 'option_1',
			label: 'Option 1'
		},
		{
			value: 'option_2',
			label: 'Option 2'
		},
		{
			value: 'option_3',
			label: 'Option 3'
		}
	];
</script>

<Select name="select-2">
	<Select.Label slot="label">Label</Select.Label>
	<Select.Options slot="options">
		{#each options as option}
			<Select.Options.Option {option} />
		{/each}
	</Select.Options>
</Select>`;

export const exampleLeading = `
<script lang="ts">
	import { Select } from 'stwui';
	import { SelectOption } from 'stwui/types';

	const email = "svg-path";
	const options: SelectOption[] = [
		{
			value: 'option_1',
			label: 'Option 1'
		},
		{
			value: 'option_2',
			label: 'Option 2'
		},
		{
			value: 'option_3',
			label: 'Option 3'
		}
	];
</script>

<Select name="select-3">
	<Select.Label slot="label">Label</Select.Label>
	<Select.Leading slot="leading" data={email} />
	<Select.Options slot="options">
		{#each options as option}
			<Select.Options.Option {option} />
		{/each}
	</Select.Options>
</Select>`;

export const exampleError = `
<script lang="ts">
	import { Select } from 'stwui';
	import { SelectOption } from 'stwui/types';

	const email = "svg-path";
	const options: SelectOption[] = [
		{
			value: 'option_1',
			label: 'Option 1'
		},
		{
			value: 'option_2',
			label: 'Option 2'
		},
		{
			value: 'option_3',
			label: 'Option 3'
		}
	];

	let value: string | undefined;
	let error: string | undefined = "You're doing it wrong!";
	$: if (value && value.length > 0) {
		error = undefined;
	} else {
		error = "You're doing it wrong!";
	}
</script>

<Select name="select-4" {error} bind:value>
	<Select.Label slot="label">Label</Select.Label>
	<Select.Leading slot="leading" data={email} />
	<Select.Options slot="options">
		{#each options as option}
			<Select.Options.Option {option} />
		{/each}
	</Select.Options>
</Select>`;

export const exampleDisabled = `
<script lang="ts">
	import { Select } from 'stwui';
	import { SelectOption } from 'stwui/types';

	const email = "svg-path";
	const options: SelectOption[] = [
		{
			value: 'option_1',
			label: 'Option 1'
		},
		{
			value: 'option_2',
			label: 'Option 2'
		},
		{
			value: 'option_3',
			label: 'Option 3'
		}
	];
</script>

<Select name="select-5" disabled>
	<Select.Label slot="label">Label</Select.Label>
	<Select.Leading slot="leading" data={email} />
	<Select.Options slot="options">
		{#each options as option}
			<Select.Options.Option {option} />
		{/each}
	</Select.Options>
</Select>`;

export const exampleMultiple = `
<script lang="ts">
	import { Select } from 'stwui';
	import { SelectOption } from 'stwui/types';

	const email = "svg-path";
	const options: SelectOption[] = [
		{
			value: 'option_1',
			label: 'Option 1'
		},
		{
			value: 'option_2',
			label: 'Option 2'
		},
		{
			value: 'option_3',
			label: 'Option 3'
		},
		{
			value: 'option_4',
			label: 'Option 4'
		},
		{
			value: 'option_5',
			label: 'Option 5'
		},
		{
			value: 'option_6',
			label: 'Option 6'
		}
	];
</script>

<Select name="select-4" placeholder="Basic" multiple>
	<Select.Label slot="label">Label</Select.Label>
	<Select.Options slot="options">
		{#each multipleOptions as option}
			<Select.Options.Option {option} />
		{/each}
	</Select.Options>
</Select>
`;
