import type { Slot, Prop, IClass } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'name',
		type: 'string',
		default: 'nanoid()'
	},
	{
		id: '2',
		prop: 'error',
		type: 'string',
		default: ''
	},
	{
		id: '3',
		prop: 'placeholder',
		type: 'string',
		default: ''
	},
	{
		id: '4',
		prop: 'value',
		type: 'string',
		default: ''
	},
	{
		id: '5',
		prop: 'allowNonListValue',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '6',
		prop: 'disabled',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '7',
		prop: 'options',
		type: 'string[]',
		default: '[]'
	},
	{
		id: '8',
		prop: 'mobile',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '9',
		prop: 'optionLabel',
		type: 'string',
		default: 'label'
	},
	{
		id: '10',
		prop: 'optionValue',
		type: 'string',
		default: 'value'
	},
	{
		id: '11',
		prop: 'options',
		type: '<a href="/types#SelectOption" class="link">SelectOption</a>[]',
		default: ''
	},
	{
		id: '12',
		prop: 'on:change',
		type: '(e: Event) => void',
		default: ''
	},
	{
		id: '13',
		prop: 'on:input',
		type: '(e: Event) => void',
		default: ''
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'label',
		component: '<Autocomplete.Label slot="label" />'
	},
	{
		id: '2',
		slot: 'leading',
		component: '<Autocomplete.Leading slot="leading" />'
	},
	{
		id: '3',
		slot: 'options',
		component: '<Autocomplete.Options slot="options" />'
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
		component: '<Autocomplete.Options.Option />'
	},
	{
		id: '2',
		slot: 'default',
		component: '<Autocomplete.Options.EmptyOption />'
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

export const emptyOptionSlots: Slot[] = [
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

export const classList: IClass[] = [
	{
		id: '1',
		class: 'stwi-autocomplete'
	},
	{
		id: '2',
		class: 'stwui-autocomplete-wrapper'
	},
	{
		id: '3',
		class: 'stwui-autocomplete-trigger'
	},
	{
		id: '4',
		class: 'stwui-autocomplete-input'
	},
	{
		id: '5',
		class: 'stwui-autocomplete-leading'
	},
	{
		id: '6',
		class: 'stwui-autocomplete-clear-wrapper'
	},
	{
		id: '7',
		class: 'stwui-autocomplete-error-wrapper'
	},
	{
		id: '8',
		class: 'stwui-autocomplete-mobile-drawer'
	},
	{
		id: '9',
		class: 'stwui-autocomplete-mobile-input'
	},
	{
		id: '10',
		class: 'stwui-autocomplete-mobile-options'
	},
	{
		id: '11',
		class: 'stwui-autocomplete-error'
	},
	{
		id: '12',
		class: 'stwui-autocomplete-empty-option'
	},
	{
		id: '13',
		class: 'stwui-autocomplete-label'
	},
	{
		id: '14',
		class: 'stwui-autocomplete-option'
	},
	{
		id: '15',
		class: 'stwui-autocomplete-options'
	}
];

export const usage = `
import { Autocomplete } from 'stwui';
// OR
import Autocomplete from 'stwui/autocomplete'; // for tree shaking
`;

export const basicExample = `
<script lang="ts">
   import { Autocomplete } from 'stwui';

   let value: string;
   let options = [
		{
			label: 'Option 1',
			value: 'option_1'
		},
		{
			label: 'Option 2',
			value: 'option_2'
		},
		{
			label: 'Option 3',
			value: 'option_3'
		},
		{
			label: 'Option 4',
			value: 'option_4'
		},
		{
			label: 'Option 5',
			value: 'option_5'
		},
		{
			label: 'Option 6',
			value: 'option_6'
		},
		{
			label: 'Option 7',
			value: 'option_7'
		}
	];
	let filtered = options;

   function filter(e: Event) {
		const target = e.target as HTMLInputElement;
		filtered = options.filter((opt) => opt.value.toLowerCase().includes(target.value.toLowerCase()));
	}

   function filterOptions(newValue: string) {
      if (newValue) {
         filtered = options.filter((opt) => opt.value.toLowerCase().includes(newValue.toLowerCase()));
      } else {
         filtered = options;
      }
	}

	function handleChange(event: Event) {
		const target = event.target as HTMLSelectElement;
		console.log('event', target.value);
	}

	$: filterOptions(value);
</script>

<Autocomplete
	name="autocomplete"
	placeholder="Basic"
	bind:value={value}
	on:input={filter}
	on:change={handleChange}
	{options}
>
	<Autocomplete.Options slot="options">
		{#if filtered.length > 0}
			{#each filtered as option}
				<Autocomplete.Options.Option {option} />
			{/each}
		{:else}
			<Autocomplete.Options.EmptyOption />
		{/if}
	</Autocomplete.Options>
</Autocomplete>`;

export const withLabelExample = `
<script lang="ts">
   import { Autocomplete } from 'stwui';

   let value: string;
   let options = [
		{
			label: 'Option 1',
			value: 'option_1'
		},
		{
			label: 'Option 2',
			value: 'option_2'
		},
		{
			label: 'Option 3',
			value: 'option_3'
		},
		{
			label: 'Option 4',
			value: 'option_4'
		},
		{
			label: 'Option 5',
			value: 'option_5'
		},
		{
			label: 'Option 6',
			value: 'option_6'
		},
		{
			label: 'Option 7',
			value: 'option_7'
		}
	];
	let filtered = options;

	function filter(e: Event) {
		const target = e.target as HTMLInputElement;
		filtered = options.filter((opt) => opt.value.toLowerCase().includes(target.value.toLowerCase()));
	}

   function filterOptions(newValue: string) {
      if (newValue) {
         filtered = options.filter((opt) => opt.value.toLowerCase().includes(newValue.toLowerCase()));
      } else {
         filtered = options;
      }
	}

	$: filterOptions(value);
</script>

<Autocomplete
	name="autocomplete"
	placeholder="Basic"
	bind:value={value}
	on:input={filter}
	{options}
>
	<Autocomplete.Label slot="label">Label</Autocomplete.Label>
	<Autocomplete.Options slot="options">
		{#if filtered.length > 0}
			{#each filtered as option}
				<Autocomplete.Options.Option {option} />
			{/each}
		{:else}
			<Autocomplete.Options.EmptyOption />
		{/if}
	</Autocomplete.Options>
</Autocomplete>`;

export const withLeadingExample = `
<script lang="ts">
   import { Autocomplete } from 'stwui';

   let value: string;
   let options = [
		{
			label: 'Option 1',
			value: 'option_1'
		},
		{
			label: 'Option 2',
			value: 'option_2'
		},
		{
			label: 'Option 3',
			value: 'option_3'
		},
		{
			label: 'Option 4',
			value: 'option_4'
		},
		{
			label: 'Option 5',
			value: 'option_5'
		},
		{
			label: 'Option 6',
			value: 'option_6'
		},
		{
			label: 'Option 7',
			value: 'option_7'
		}
	];
	let filtered = options;
	let email = 'svg-path';

   function filter(e: Event) {
		const target = e.target as HTMLInputElement;
		filtered = options.filter((opt) => opt.value.toLowerCase().includes(target.value.toLowerCase()));
	}

   function filterOptions(newValue: string) {
      if (newValue) {
         filtered = options.filter((opt) => opt.value.toLowerCase().includes(newValue.toLowerCase()));
      } else {
         filtered = options;
      }
	}

	$: filterOptions(value);
</script>

<Autocomplete
	name="autocomplete"
	bind:value={value}
	on:input={filter}
	{options}
>
	<Autocomplete.Label slot="label">Label</Autocomplete.Label>
	<Autocomplete.Leading slot="leading" data={email} />
	<Autocomplete.Options slot="options">
		{#if filtered.length > 0}
			{#each filtered as option}
				<Autocomplete.Options.Option {option} />
			{/each}
		{:else}
			<Autocomplete.Options.EmptyOption />
		{/if}
	</Autocomplete.Options>
</Autocomplete>`;

export const withErrorExample = `
<script lang="ts">
   import { Autocomplete } from 'stwui';

   let value: string;
   let options = [
		{
			label: 'Option 1',
			value: 'option_1'
		},
		{
			label: 'Option 2',
			value: 'option_2'
		},
		{
			label: 'Option 3',
			value: 'option_3'
		},
		{
			label: 'Option 4',
			value: 'option_4'
		},
		{
			label: 'Option 5',
			value: 'option_5'
		},
		{
			label: 'Option 6',
			value: 'option_6'
		},
		{
			label: 'Option 7',
			value: 'option_7'
		}
	];
	let filtered = options;
	let email = 'svg-path';

   function filter(e: Event) {
		const target = e.target as HTMLInputElement;
		filtered = options.filter((opt) => opt.value.toLowerCase().includes(target.value.toLowerCase()));
	}

   function filterOptions(newValue: string) {
      if (newValue) {
         filtered = options.filter((opt) => opt.value.toLowerCase().includes(newValue.toLowerCase()));
      } else {
         filtered = options;
      }
	}

	$: filterOptions(value);

	let error: string | undefined = "You're doing it wrong!";
	$: if (value && value.length > 0) {
		error = undefined;
	} else {
		error = "You're doing it wrong!";
	}
</script>

<Autocomplete
	name="autocomplete"
	bind:value={value}
	on:input={filter}
	{options}
	{error}
>
	<Autocomplete.Label slot="label">Label</Autocomplete.Label>
	<Autocomplete.Leading slot="leading" data={email} />
	<Autocomplete.Options slot="options">
		{#if filtered.length > 0}
			{#each filtered as option}
				<Autocomplete.Options.Option {option} />
			{/each}
		{:else}
			<Autocomplete.Options.EmptyOption />
		{/if}
	</Autocomplete.Options>
</Autocomplete>`;

export const disabledExample = `
<script lang="ts">
   import { Autocomplete } from 'stwui';

   let value: string;
   let options = [
		{
			label: 'Option 1',
			value: 'option_1'
		},
		{
			label: 'Option 2',
			value: 'option_2'
		},
		{
			label: 'Option 3',
			value: 'option_3'
		},
		{
			label: 'Option 4',
			value: 'option_4'
		},
		{
			label: 'Option 5',
			value: 'option_5'
		},
		{
			label: 'Option 6',
			value: 'option_6'
		},
		{
			label: 'Option 7',
			value: 'option_7'
		}
	];
	let filtered = options;
	let email = 'svg-path';

   function filter(e: Event) {
		const target = e.target as HTMLInputElement;
		filtered = options.filter((opt) => opt.value.toLowerCase().includes(target.value.toLowerCase()));
	}

   function filterOptions(newValue: string) {
      if (newValue) {
         filtered = options.filter((opt) => opt.value.toLowerCase().includes(newValue.toLowerCase()));
      } else {
         filtered = options;
      }
	}

	$: filterOptions(value);
</script>

<Autocomplete
	name="autocomplete"
	bind:value={value}
	on:input={filter}
	{options}
	disabled
>
	<Autocomplete.Label slot="label">Label</Autocomplete.Label>
	<Autocomplete.Leading slot="leading" data={email} />
	<Autocomplete.Options slot="options">
		{#if filtered.length > 0}
			{#each filtered as option}
				<Autocomplete.Options.Option {option} />
			{/each}
		{:else}
			<Autocomplete.Options.EmptyOption />
		{/if}
	</Autocomplete.Options>
</Autocomplete>`;

export const allowNonOptionExample = `
<script lang="ts">
   import { Autocomplete } from 'stwui';

   let value = 'I am not in the list!';

   let options = [
		{
			label: 'Option 1',
			value: 'option_1'
		},
		{
			label: 'Option 2',
			value: 'option_2'
		},
		{
			label: 'Option 3',
			value: 'option_3'
		},
		{
			label: 'Option 4',
			value: 'option_4'
		},
		{
			label: 'Option 5',
			value: 'option_5'
		},
		{
			label: 'Option 6',
			value: 'option_6'
		},
		{
			label: 'Option 7',
			value: 'option_7'
		}
	];
	let filtered = options;

   function filter(e: Event) {
		const target = e.target as HTMLInputElement;
		filtered = options.filter((opt) => opt.value.toLowerCase().includes(target.value.toLowerCase()));
	}

   function filterOptions(newValue: string) {
      if (newValue) {
         filtered = options.filter((opt) => opt.value.toLowerCase().includes(newValue.toLowerCase()));
      } else {
         filtered = options;
      }
	}

	$: filterOptions(value);
</script>

<Autocomplete
	name="autocomplete"
	placeholder="Basic"
	bind:value={value}
	on:input={filter}
	allowNonListValue
>
	<Autocomplete.Options slot="options">
		{#if filtered.length > 0}
			{#each filtered as option}
				<Autocomplete.Options.Option {option} />
			{/each}
		{:else}
			<Autocomplete.Options.EmptyOption />
		{/if}
	</Autocomplete.Options>
</Autocomplete>`;

export const withMobileExample = `
<script lang="ts">
   import { Autocomplete } from 'stwui';

   let value: string;
   let options = [
		{
			label: 'Option 1',
			value: 'option_1'
		},
		{
			label: 'Option 2',
			value: 'option_2'
		},
		{
			label: 'Option 3',
			value: 'option_3'
		},
		{
			label: 'Option 4',
			value: 'option_4'
		},
		{
			label: 'Option 5',
			value: 'option_5'
		},
		{
			label: 'Option 6',
			value: 'option_6'
		},
		{
			label: 'Option 7',
			value: 'option_7'
		}
	];
	let filtered = options;

   function filter(e: Event) {
		const target = e.target as HTMLInputElement;
		filtered = options.filter((opt) => opt.value.toLowerCase().includes(target.value.toLowerCase()));
	}

   function filterOptions(newValue: string) {
      if (newValue) {
         filtered = options.filter((opt) => opt.value.toLowerCase().includes(newValue.toLowerCase()));
      } else {
         filtered = options;
      }
	}

	$: filterOptions(value);
</script>

<Autocomplete
	name="autocomplete"
	placeholder="Basic"
	bind:value={value}
	on:input={filter}
	{options}
	mobile
>
	<Autocomplete.Label slot="label">Label</Autocomplete.Label>
	<Autocomplete.Options slot="options">
		{#if filtered.length > 0}
			{#each filtered as option}
				<Autocomplete.Options.Option {option} />
			{/each}
		{:else}
			<Autocomplete.Options.EmptyOption />
		{/if}
	</Autocomplete.Options>
</Autocomplete>`;
