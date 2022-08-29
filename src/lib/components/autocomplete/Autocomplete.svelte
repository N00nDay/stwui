<script lang="ts">
	import type MaterialIcons from '../../types/material-icons';
	import { slide, scale } from 'svelte/transition';
	import { clickOutside } from '../../utils/clickOutside';
	import HoverBackground from '../HoverBackground.svelte';
	import { onMount } from 'svelte';

	export let leading: MaterialIcons | undefined = undefined;
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
	export let handleChange: ((e: string) => void) | undefined = undefined;

	let filteredOptions: string[] = options;

	let input: HTMLInputElement;
	let button: HTMLButtonElement;

	function handleOpen() {
		visible = true;
	}

	function handleClose() {
		checkValue();
	}

	function checkValue() {
		if (!value) {
			visible = false;
		} else if (options.includes(value)) {
			visible = false;
		} else {
			input.value = '';
			value = undefined;
			visible = false;
			filteredOptions = options;
		}
	}

	function handleSelect(option: string) {
		input.value = option;
		value = option;
		filteredOptions = options.filter((o) => o.toLowerCase().includes(option.toLowerCase()));
		handleClose();
	}

	function handleFilter(e: Event) {
		const target = e.target as HTMLInputElement;
		if (handleChange && target.value) {
			handleChange(target.value);
		} else if (target.value && target.value.length === 0) {
			filteredOptions = options;
		} else if (target.value) {
			filteredOptions = options.filter((o) => o.toLowerCase().includes(target.value.toLowerCase()));
		} else {
			filteredOptions = options;
		}
	}

	function handleClear() {
		input.value = '';
		value = undefined;
		filteredOptions = options;
	}

	onMount(() => {
		if (autofocus) {
			button.focus();
			visible = true;
		}
	});
</script>

<div class={$$props.class} style={$$props.style} use:clickOutside={handleClose}>
	{#if label}
		<label
			for={name}
			class="block text-sm font-medium transition-all duration-150{srOnly ? ' sr-only' : ''}"
			class:text-light-secondary-content={!error}
			class:dark:text-dark-secondary-content={!error}
			class:text-red-600={error}>{label}</label
		>
	{/if}
	<div class="mt-1 relative rounded-md">
		<button
			bind:this={button}
			type="button"
			on:click={handleOpen}
			class="group relative cursor-pointer min-h-[2.5rem] text-left border-none focus:outline-none sm:text-sm block w-full outline-none rounded-md bg-light-surface dark:bg-dark-surface transition-all duration-150"
		>
			{#if leading}
				<span
					on:click|stopPropagation={handleLeadingClick}
					class="material-icons absolute inset-y-0 left-0 pl-3 flex items-center transition-all duration-150"
					class:pointer-events-none={!handleLeadingClick}
					class:pointer-events-auto={handleLeadingClick}
					class:cursor-pointer={handleLeadingClick}
					class:text-light-secondary-content={!error}
					class:dark:text-dark-secondary-content={!error}
					class:text-red-600={error}>{leading}</span
				>
			{/if}
			<input
				{name}
				id={name}
				bind:this={input}
				bind:value
				{placeholder}
				{autofocus}
				on:input={handleFilter}
				autocomplete="off"
				role="presentation"
				aria-controls="options"
				class="bg-transparent w-full h-full pl-3 pr-10 py-2 shadow-sm border rounded-md transition-all duration-150 outline-none"
				class:border-red-400={error}
				class:text-red-700={error}
				class:dark:text-red-300={error}
				class:placeholder-red-300={error}
				class:focus:border-red-500={error}
				class:focus:border-primary={!error}
				class:dark:focus:border-primary={!error}
				class:border-light-icon-background={!error}
				class:dark:border-dark-icon-background={!error}
				class:pl-10={leading}
			/>

			{#if value && value.length > 0}
				<span
					transition:scale
					class="absolute inset-y-0 z-10 right-8 items-center cursor-pointer hidden group-focus-within:flex"
					on:click={handleClear}
				>
					<span
						class="material-icons text-light-icon dark:text-dark-icon text-base transition-all duration-150"
					>
						clear
					</span>
				</span>
			{/if}

			{#if error}
				<span
					transition:scale|local
					class="material-icons absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none text-red-600"
					>error</span
				>
			{:else}
				<span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
					<span
						class="material-icons text-light-icon dark:text-dark-icon transition-all duration-150"
					>
						unfold_more
					</span>
				</span>
			{/if}
		</button>

		{#if visible}
			<ul
				class="origin-top-right absolute z-10 border border-light-icon-background dark:border-dark-icon-background left-0 right-0 w-full p-1 rounded-md shadow-xl dark:shadow-black py-1 bg-light-surface dark:bg-dark-surface transition transform duration-150{$$props.class
					? ` ${$$props.class}`
					: ''}"
				style={$$props.style}
				in:scale={{ start: 0.9, duration: 100, delay: 150 }}
				out:scale={{ start: 0.95, duration: 75 }}
				role="listbox"
			>
				{#if filteredOptions.length > 0}
					{#each filteredOptions as option}
						<li
							class="group text-light-content dark:text-dark-content cursor-pointer select-none p-0.5 w-full"
							role="option"
							on:click={() => handleSelect(option)}
						>
							<div class="relative py-1.5 pl-2.5 pr-7 w-full rounded-md overflow-hidden">
								<span class="font-normal block truncate" class:font-semibold={option === value}>
									{option}
								</span>

								{#if option === value}
									<span
										transition:scale
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
				{:else}
					<li
						class="group text-light-content dark:text-dark-content select-none p-0.5 w-full"
						role="option"
					>
						<div class="relative py-1.5 pl-2.5 pr-7 w-full rounded-md overflow-hidden">
							<span class="font-normal block truncate"> No Options Available </span>
						</div>
					</li>
				{/if}
			</ul>
		{/if}
	</div>
	{#if error}
		<p transition:slide|local class="mt-2 text-sm text-red-600" id="{name}-error">{error}</p>
	{/if}
</div>
