<script lang="ts" context="module">
	export interface Option {
		label: string;
		name: string;
		value: string;
		description?: string;
	}
</script>

<script lang="ts">
	import Checkbox from './Checkbox.svelte';

	export let options: Option[] = [];
	export let label: string | undefined = undefined;
	export let srOnly = false;
	export let inline = false;
</script>

<div>
	{#if label}
		<legend
			class="transition-all duration-150 text-light-secondary-content dark:text-dark-secondary-content font-medium text-sm{srOnly
				? ' sr-only'
				: ''}">{label}</legend
		>
	{/if}
	<fieldset class="space-y-5 mt-2">
		{#each options as option}
			<Checkbox
				name={option.name}
				label={option.label}
				description={option.description}
				value={option.value}
				{inline}
			/>
		{/each}
	</fieldset>
</div>
