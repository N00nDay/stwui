<script lang="ts">
	import HoverBackground from '../HoverBackground.svelte';

	export let name: string;
	export let radioGroup: string;
	export let label: string;
	export let description: string | undefined = undefined;
	export let value: string;
	export let checked = false;

	export let type: 'default' | 'pill' = 'default';

	export let handleSelect: (v: string) => void;
</script>

{#if type === 'default'}
	<div class="group relative flex items-start" on:click={() => handleSelect(value)}>
		<div class="flex items-center justify-center h-6 w-6 relative group">
			<input
				id={name}
				name={radioGroup}
				type="radio"
				{value}
				{checked}
				class="radio bg-light-surface dark:bg-dark-surface text-light-surface dark:text-dark-surface light-border dark:dark-border checked:bg-none border checked:border-primary group-hover:border-primary dark:checked:border-primary dark:group-hover:border-primary group-focus:border-primary dark:group-focus:border-primary active:border-primary dark:active:border-primary focus:active:border-primary dark:focus:active:border-primary rounded-full cursor-pointer h-6 w-6 transition-all duration-150"
			/>
			<div
				class="absolute rounded-full h-0 w-0 bg-primary transition-all duration-200 z-10"
				class:h-4={checked}
				class:w-4={checked}
			/>
		</div>
		<div class="ml-3 text-sm transition-all duration-150">
			<label for={name} class="font-medium cursor-pointer text-light-content dark:text-dark-content"
				>{label}</label
			>
			{#if description}
				<span
					id="{name}-description"
					class="text-light-secondary-content dark:text-dark-secondary-content">{description}</span
				>
			{/if}
		</div>
	</div>
{:else if type === 'pill'}
	<label
		on:click={() => handleSelect(value)}
		class="group relative border light-border dark:dark-border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium sm:flex-1 cursor-pointer focus:outline-none transition-all duration-150"
		class:bg-light-icon-background={!checked}
		class:dark:bg-dark-icon-background={!checked}
		class:text-light-icon={!checked}
		class:dark:text-dark-icon={!checked}
		class:bg-primary={checked}
		class:text-primary-content={checked}
	>
		<input type="radio" id={name} name={radioGroup} {value} class="sr-only" />
		<span id="{name}-label">{label}</span>
		<HoverBackground />
	</label>
{/if}
