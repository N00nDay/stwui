import type { Slot, Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'leading',
		type: '<a class="link" href="/types#MaterialIcon">MaterialIcon</a>',
		default: ''
	},
	{
		id: '2',
		prop: 'name',
		type: 'string',
		default: ''
	},
	{
		id: '3',
		prop: 'label',
		type: 'string',
		default: ''
	},
	{
		id: '4',
		prop: 'srOnly',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '5',
		prop: 'error',
		type: 'string',
		default: ''
	},
	{
		id: '6',
		prop: 'placeholder',
		type: 'string',
		default: ''
	},
	{
		id: '7',
		prop: 'value',
		type: 'string',
		default: ''
	},
	{
		id: '8',
		prop: 'autofocus',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '9',
		prop: 'handleLeadingClick',
		type: '() => void',
		default: ''
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'list',
		component: '<Autocomplete.List slot="list" />'
	}
];

export const listSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: '<Autocomplete.List.Option />'
	},
	{
		id: '2',
		slot: 'default',
		component: '<Autocomplete.List.EmptyOption />'
	}
];

export const optionProps: Prop[] = [
	{
		id: '1',
		prop: 'value',
		type: 'string',
		default: ''
	},
	{
		id: '2',
		prop: 'selected',
		type: 'boolean',
		default: 'false'
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

<Autocomplete name="autocomplete" placeholder="Basic" bind:value={value} on:input={filter}>
   <Autocomplete.List slot="list">
      {#if filtered.length > 0}
         {#each filtered as option}
            <Autocomplete.List.Option value={option} selected={value === option} />
         {/each}
      {:else}
         <Autocomplete.List.EmptyOption />
      {/if}
   </Autocomplete.List>
</Autocomplete>`;
