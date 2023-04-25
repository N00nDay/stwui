<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import HoverBackground from '../HoverBackground.svelte';
	import type { Writable } from 'svelte/store';
	import { twMerge } from 'tailwind-merge';

	export let id: string | undefined = undefined;
	export let value: string;
	export let disabled = false;

	const name: string = getContext('radio-name');
	const type: 'default' | 'pill' = getContext('radio-type');
	const selected: Writable<string | undefined> = getContext('radio-selected');

	function handleClick() {
		if (!disabled) {
			$selected = value;
		}
	}

	const defaultClass =
		'radio bg-surface text-surface border-border checked:bg-none border checked:border-primary group-hover:border-primary group-focus:border-primary active:border-primary focus:active:border-primary focus:border-primary rounded-full h-6 w-6';
	const pillClass =
		'group relative border border-border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium sm:flex-1 cursor-pointer focus:outline-none';

	$: finalClass = twMerge(
		type === 'default' ? defaultClass : false,
		type === 'pill' ? pillClass : false,

		$$props.class
	);

	setContext('radio-id', id);
</script>

{#if type === 'default'}
	<li tabindex="-1" class="group relative flex items-start" class:opacity-75={disabled}>
		<div tabindex="-1" class="flex items-center justify-center h-6 w-6 relative group">
			<input
				on:click={handleClick}
				{id}
				{name}
				type="radio"
				{value}
				{disabled}
				bind:group={$selected}
				class:checked:border-default={disabled}
				class:group-hover:border-default={disabled}
				class:cursor-default={disabled}
				class:cursor-pointer={!disabled}
				class={finalClass}
			/>
			<div
				tabindex="-1"
				class="absolute rounded-full transition-size duration-200 z-10"
				class:h-0={$selected !== value}
				class:w-0={$selected !== value}
				class:h-4={$selected === value}
				class:w-4={$selected === value}
				class:bg-primary={!disabled && $selected === value}
				class:bg-default={disabled && $selected === value}
			/>
		</div>
		{#if $$slots.label || $$slots.description}
			<div tabindex="-1" class="ml-3 text-sm cursor-pointer" on:click={handleClick} on:keypress>
				<slot name="label" />
				{#if $$slots.label && $$slots.description}|{/if}
				<slot name="description" />
			</div>
		{/if}
	</li>
{:else if type === 'pill'}
	<li
		tabindex="-1"
		on:click={handleClick}
		on:keydown={handleClick}
		on:keypress={handleClick}
		class={finalClass}
		class:bg-default={$selected !== value}
		class:text-default-content={$selected !== value}
		class:bg-primary={$selected === value}
		class:text-primary-content={$selected === value}
	>
		<input on:click bind:group={$selected} type="radio" {id} {name} {value} class="sr-only" />
		<span tabindex="-1" id={id ? `${id}-label` : undefined}><slot /></span>
		<HoverBackground />
	</li>
{/if}
