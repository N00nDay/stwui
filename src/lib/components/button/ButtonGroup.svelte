<script lang="ts" context="module">
	import type MaterialIcons from '$lib/types/material-icons';

	export interface IButton {
		icon?: MaterialIcons;
		label?: string;
		onClick: () => void;
	}
</script>

<script lang="ts">
	import HoverBackground from '../HoverBackground.svelte';

	export let buttons: IButton[] = [];
	export let allowDeselect = false;

	let activeIndex: number | undefined = undefined;

	function handleClick(index: number, onClick: () => void) {
		if (allowDeselect && activeIndex === index) {
			activeIndex = undefined;
		} else {
			activeIndex = index;
		}
		onClick();
	}
</script>

<span class="relative z-0 inline-flex shadow-sm dark:shadow-black rounded-md">
	{#each buttons as button, i}
		{#if i !== 0}
			<button
				on:click={() => handleClick(i, button.onClick)}
				type="button"
				class="group overflow-hidden transition-all duration-150 -ml-px relative inline-flex items-center px-4 py-2 border light-border dark:dark-border text-sm font-medium text-light-content dark:text-dark-content focus:z-10 outline-none focus:outline-none first-of-type:rounded-l-md last-of-type:rounded-r-md"
				class:bg-primary={i === activeIndex}
				class:dark:bg-primary={i === activeIndex}
				class:text-primary-content={i === activeIndex}
				class:dark:text-primary-content={i === activeIndex}
				class:focus:bg-primary={i === activeIndex}
				class:dark:focus:bg-primary={i === activeIndex}
				class:focus:text-primary-content={i === activeIndex}
				class:dark:focus:text-primary-content={i === activeIndex}
				class:bg-light-surface={i !== activeIndex}
				class:dark:bg-dark-surface={i !== activeIndex}
			>
				{#if button.icon}
					<span class="material-icons" class:mr-2={button.label}>{button.icon}</span>
				{/if}
				{#if button.label}
					{button.label}
				{/if}

				<HoverBackground />
			</button>
		{:else}
			<button
				on:click={() => handleClick(i, button.onClick)}
				type="button"
				class="group overflow-hidden transition-all duration-150 relative inline-flex items-center px-4 py-2 border light-border dark:dark-border text-sm font-medium text-light-content dark:text-dark-content focus:z-10 outline-none focus:outline-none first-of-type:rounded-l-md last-of-type:rounded-r-md"
				class:bg-primary={i === activeIndex}
				class:dark:bg-primary={i === activeIndex}
				class:text-primary-content={i === activeIndex}
				class:dark:text-primary-content={i === activeIndex}
				class:focus:bg-primary={i === activeIndex}
				class:dark:focus:bg-primary={i === activeIndex}
				class:focus:text-primary-content={i === activeIndex}
				class:dark:focus:text-primary-content={i === activeIndex}
				class:bg-light-surface={i !== activeIndex}
				class:dark:bg-dark-surface={i !== activeIndex}
			>
				{#if button.icon}
					<span class="material-icons" class:mr-2={button.label}>{button.icon}</span>
				{/if}
				{#if button.label}
					{button.label}
				{/if}

				<HoverBackground />
			</button>
		{/if}
	{/each}
</span>
