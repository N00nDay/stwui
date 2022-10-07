<script lang="ts">
	import type { MaterialIcon } from '../../types';
	import { slide, scale } from 'svelte/transition';
	import { clickOutside } from '../../actions';
	import HoverBackground from '../HoverBackground.svelte';
	import { onMount } from 'svelte';

	export let leading: MaterialIcon | undefined = undefined;
	export let name: string;
	export let label: string | undefined = undefined;
	export let srOnly = false;
	export let error: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let value: string | undefined = undefined;
	// export let autocomplete: string | undefined = undefined;
	// export let autocapitalize: 'off' | 'none' | 'sentences' | 'words' | 'characters' = 'off';
	export let autofocus = false;
	export let handleLeadingClick: (() => void) | undefined = undefined;
	export let visible: true | false = false;
	export let options: string[] = [];

	let input: HTMLInputElement;
	let button: HTMLButtonElement;

	function toggleVisible() {
		visible = !visible;
	}

	function handleClose() {
		visible = false;
	}

	function handleSelect(option: string) {
		input.value = option;
		value = option;
		toggleVisible();
	}

	onMount(() => {
		if (autofocus) {
			button.focus();
			toggleVisible();
		}
	});
</script>

<div class={$$props.class} style={$$props.style} use:clickOutside={handleClose}>
	{#if label}
		<label
			for={name}
			class="block text-sm font-medium{srOnly ? ' sr-only' : ''}"
			class:text-light-secondary-content={!error}
			class:dark:text-dark-secondary-content={!error}
			class:text-danger={error}>{label}</label
		>
	{/if}
	<div class="mt-1 relative rounded-md h-[2.5rem]">
		<button
			bind:this={button}
			type="button"
			on:click={toggleVisible}
			class="relative border shadow-sm dark:shadow-black h-[2.5rem] cursor-pointer pl-3 pr-10 py-2 min-h-[2.5rem] text-left focus:outline-none sm:text-sm block w-full outline-none ring-0 focus:ring-0 rounded-md bg-light-surface dark:bg-dark-surface"
			class:border-red-400={error}
			class:text-danger={error}
			class:dark:text-danger={error}
			class:placeholder-red-300={error}
			class:focus:border-red-500={error}
			class:focus:border-primary={!error}
			class:dark:focus:border-primary={!error}
			class:light-border={!error}
			class:dark:dark-border={!error}
			class:pl-10={leading}
			aria-haspopup="listbox"
			aria-labelledby="listbox-label"
		>
			{#if leading}
				<span
					on:click|stopPropagation={handleLeadingClick}
					class="material-icons absolute inset-y-0 left-0 pl-3 flex items-center"
					class:pointer-events-none={!handleLeadingClick}
					class:pointer-events-auto={handleLeadingClick}
					class:cursor-pointer={handleLeadingClick}
					class:text-light-secondary-content={!error}
					class:dark:text-dark-secondary-content={!error}
					class:text-danger={error}>{leading}</span
				>
			{/if}

			<span
				class="block truncate text-light-content dark:text-dark-content"
				class:pl-1.5={leading}
				class:text-gray-500={placeholder && !value}
				class:dark:text-gray-500={placeholder && !value}
			>
				{value ? value : placeholder ? placeholder : ''}
			</span>
			<input
				{name}
				id={name}
				bind:this={input}
				bind:value
				class="h-0 w-0 hidden invisible"
				readonly
				autocomplete="off"
			/>

			{#if error}
				<span
					transition:scale|local
					class="material-icons absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none text-danger"
					>error</span
				>
			{:else}
				<span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
					<span class="material-icons text-light-icon dark:text-dark-icon"> unfold_more </span>
				</span>
			{/if}
		</button>

		{#if visible}
			<ul
				class="origin-top-right absolute z-10 border light-border dark:dark-border left-0 right-0 w-full mt-1 p-1 rounded-md shadow-xl dark:shadow-black py-1 bg-light-surface dark:bg-dark-surface{$$props.class
					? ` ${$$props.class}`
					: ''}"
				style={$$props.style}
				in:scale={{ start: 0.9, duration: 100, delay: 150 }}
				out:scale={{ start: 0.95, duration: 75 }}
				role="listbox"
			>
				{#each options as option}
					<li
						class="group text-light-content dark:text-dark-content cursor-pointer select-none p-0.5 w-full"
						role="option"
						aria-selected={option === value}
						on:click={() => handleSelect(option)}
					>
						<div class="relative py-1.5 pl-2.5 pr-7 w-full rounded-md overflow-hidden">
							<span class="font-normal block truncate" class:font-semibold={option === value}>
								{option}
							</span>

							{#if option === value}
								<span
									transition:scale|local
									class="text-primary absolute inset-y-0 right-0 flex items-center pr-4"
								>
									<!-- Heroicon name: solid/check -->
									<svg
										class="h-5 w-5"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										/>
									</svg>
								</span>
							{/if}

							<HoverBackground />
						</div>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
	{#if error}
		<p transition:slide|local class="mt-2 text-sm text-danger" id="{name}-error">{error}</p>
	{/if}
</div>
