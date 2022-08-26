<script lang="ts" context="module">
	export interface Option {
		label: string;
		value: string;
		name: string;
		description?: string;
	}
</script>

<script lang="ts">
	import Radio from './Radio.svelte';

	export let options: Option[] = [];
	export let radioGroup: string;
	export let type: 'default' | 'pill' = 'default';
	export let label: string | undefined = undefined;
	export let srOnly = false;
	export let columns:
		| 'grid-cols-0'
		| 'grid-cols-1'
		| 'grid-cols-2'
		| 'grid-cols-3'
		| 'grid-cols-4'
		| 'grid-cols-5'
		| 'grid-cols-6' = 'grid-cols-4';
	export let gap:
		| 'gap-0'
		| 'gap-0.5'
		| 'gap-1'
		| 'gap-1.5'
		| 'gap-2'
		| 'gap-2.5'
		| 'gap-3'
		| 'gap-4'
		| 'gap-5'
		| 'gap-6' = 'gap-2';

	let selected: string | undefined = undefined;
	let classes = '';

	if (type === 'pill') {
		classes = `${columns} ${gap}`;
	}

	function handleSelect(radio: string) {
		selected = radio;
	}
</script>

<div>
	{#if label}
		<legend
			for={radioGroup}
			class="transition-all duration-150 text-light-secondary-content dark:text-dark-secondary-content font-medium text-sm{srOnly
				? ' sr-only'
				: ''}">{label}</legend
		>
	{/if}
	<fieldset
		class:space-y-4={type === 'default'}
		class:grid={type === 'pill'}
		class="mt-1 {classes}{$$props.class ? ` ${$$props.class}` : ''}"
	>
		{#each options as option}
			<Radio
				{type}
				name={option.name}
				label={option.label}
				description={option.description}
				value={option.value}
				checked={selected === option.value}
				{radioGroup}
				{handleSelect}
			/>
		{/each}
	</fieldset>
</div>
