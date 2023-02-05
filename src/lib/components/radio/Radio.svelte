<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import HoverBackground from '../HoverBackground.svelte';
	import type { Writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';

	export let id: string | undefined = undefined;
	export let value: string;

	setContext('radio-id', id);

	const name: string = getContext('radio-name');
	const type: 'default' | 'pill' = getContext('radio-type');
	const selected: Writable<string | undefined> = getContext('radio-selected');

	function handleClick() {
		$selected = value;
	}

	$: console.log('selected', $selected);
	$: console.log('value', value);

	let defaultClass = '';
	$: if (type === 'default') {
		defaultClass =
			'radio bg-light-surface dark:bg-dark-surface text-light-surface dark:text-dark-surface light-border dark:dark-border checked:bg-none border checked:border-primary group-hover:border-primary dark:checked:border-primary dark:group-hover:border-primary group-focus:border-primary dark:group-focus:border-primary active:border-primary dark:active:border-primary focus:active:border-primary dark:focus:active:border-primary rounded-full cursor-pointer h-6 w-6';
	} else if (type === 'pill') {
		defaultClass =
			'group relative border light-border dark:dark-border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium sm:flex-1 cursor-pointer focus:outline-none';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

{#if type === 'default'}
	<div class="group relative flex items-start">
		<div class="flex items-center justify-center h-6 w-6 relative group">
			<input on:click {id} {name} type="radio" {value} bind:group={$selected} class={finalClass} />
			<div
				class="absolute rounded-full bg-primary transition-size duration-200 z-10"
				class:h-0={$selected !== value}
				class:w-0={$selected !== value}
				class:h-4={$selected === value}
				class:w-4={$selected === value}
			/>
		</div>
		{#if $$slots.label || $$slots.description}
			<div class="ml-3 text-sm cursor-pointer" on:click={handleClick} on:keypress>
				<slot name="label" />
				{#if $$slots.label && $$slots.description}|{/if}
				<slot name="description" />
			</div>
		{/if}
	</div>
{:else if type === 'pill'}
	<label
		for={id ? id : undefined}
		class={finalClass}
		class:bg-light-icon-background={$selected !== value}
		class:dark:bg-dark-icon-background={$selected !== value}
		class:text-light-icon={$selected !== value}
		class:dark:text-dark-icon={$selected !== value}
		class:bg-primary={$selected === value}
		class:text-primary-content={$selected === value}
	>
		<input on:click bind:group={$selected} type="radio" {id} {name} {value} class="sr-only" />
		<span id={id ? `${id}-label` : undefined}><slot /></span>
		<HoverBackground />
	</label>
{/if}
