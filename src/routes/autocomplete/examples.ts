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
		prop: 'autofocus',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '6',
		prop: 'allowNonListValue',
		type: 'boolean',
		default: 'false'
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

export const leadingSlots: Slot[] = [
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

export const example = `
<script lang="ts">
   import { Autocomplete, Icon } from 'stwui';

	const email = "svg-path";

   let value: string;
   let options = ['Option 1', 'Option 2', 'Option 3'];

   function filter(e: Event) {
		const target = e.target as HTMLInputElement;
		filtered = options.filter((opt) => opt.toLowerCase().includes(target.value.toLowerCase()));
	}

   function filterOptions(option: string) {
      if (option) {
         filtered = options.filter((opt) => opt.toLowerCase().includes(option.toLowerCase()));
      } else {
         filtered = options;
      }
	}

	$: filterOptions(value);
</script>

<Autocomplete name="autocomplete" bind:value={value} on:input={filter}>
	<Autocomplete.Label slot="label">Label</Autocomplete.Label>
	<Autocomplete.Leading slot="leading">
		<Icon path={email} />
	</Autocomplete.Leading>
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

   let options = ['Option 1', 'Option 2', 'Option 3'];

   function filter(e: Event) {
		const target = e.target as HTMLInputElement;
		filtered = options.filter((opt) => opt.toLowerCase().includes(target.value.toLowerCase()));
	}

   function filterOptions(option: string) {
      if (option) {
         filtered = options.filter((opt) => opt.toLowerCase().includes(option.toLowerCase()));
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
