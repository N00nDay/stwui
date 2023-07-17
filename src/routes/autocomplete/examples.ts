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

export const basicExample = `
<script lang="ts">
   import { Autocomplete } from 'stwui';

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

<Autocomplete
	name="autocomplete"
	placeholder="Basic"
	bind:value={value}
	on:input={filter}
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
   let options = ['Option 1', 'Option 2', 'Option 3'];
	let email = 'svg-path';

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
   let options = ['Option 1', 'Option 2', 'Option 3'];
	let email = 'svg-path';

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
   let options = ['Option 1', 'Option 2', 'Option 3'];
	let email = 'svg-path';

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

export const withMobileExample = `
<script lang="ts">
   import { Autocomplete } from 'stwui';

   let value: string;
   let options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'];

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
