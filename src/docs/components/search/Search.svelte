<script lang="ts">
	import { onMount } from 'svelte';
	import { data } from '../../search-data';
	import { Modal, Portal, Icon, Button } from '../../../lib';
	import { goto } from '$app/navigation';
	import { scale } from 'svelte/transition';

	let input: HTMLInputElement;

	export let open = false;

	function handleClose() {
		open = false;
		value = '';
		fiteredData = data;
	}

	function handleOpen() {
		open = true;
	}

	let fiteredData = data;

	let value = '';

	function filterData(e: Event) {
		if (value) {
			fiteredData = data.filter((opt) => opt.name.toLowerCase().includes(value.toLowerCase()));
		} else {
			fiteredData = data;
		}
	}

	function handleSelect(href: string) {
		goto(href);
		open = false;
	}

	function handleClear() {
		input.focus();
		input.value = '';
		value = '';
		fiteredData = data;
	}

	let os = 'Unknown';
	// let open = false;

	function captureEscapeEvent(e: KeyboardEvent) {
		if (os === 'MacOS') {
			if (e.key === 'k' && e.metaKey) {
				open = true;
			}
		} else {
			if (e.key === 'k' && e.ctrlKey) {
				open = true;
			}
		}
	}

	onMount(() => {
		if (navigator.appVersion.indexOf('Win') != -1) os = 'Windows';
		if (navigator.appVersion.indexOf('Mac') != -1) os = 'MacOS';
		if (navigator.appVersion.indexOf('X11') != -1) os = 'UNIX';
		if (navigator.appVersion.indexOf('Linux') != -1) os = 'Linux';
	});
</script>

<svelte:window on:keydown={captureEscapeEvent} />

<Button
	on:click={handleOpen}
	class="border-light-border dark:border-dark-border border ml-4 shadow-md dark:shadow-black hidden sm:flex"
>
	<Button.Leading slot="leading">
		<Button.Leading.Icon slot="icon" icon="search" />
	</Button.Leading>
	<div class="w-12 md:w-32 text-left">Search</div>
	<Button.Trailing slot="trailing" class="justify-self-end hidden sm:flex">
		<div
			class="mx-1 bg-light-background dark:bg-dark-background rounded-md px-1 py-0.5 border border-light-border dark:border-dark-border shadow-sm"
		>
			{#if os === 'MacOS'}⌘{:else}CTRL{/if}
		</div>
		+
		<div
			class="mx-1 bg-light-background dark:bg-dark-background rounded-md px-1 py-0.5 border border-light-border dark:border-dark-border shadow-sm"
		>
			k
		</div>
	</Button.Trailing>
</Button>

<Button
	on:click={handleOpen}
	shape="circle"
	class="flex sm:hidden ml-4 bg-light-icon-background dark:bg-dark-icon-background text-light-icon dark:text-dark-icon"
>
	<Button.Icon slot="icon" icon="search" />
</Button>

{#if open}
	<Portal>
		<Modal {handleClose}>
			<Modal.Content
				class="mx-auto max-w-xl transform divide-y divide-light-border dark:divide-dark-border overflow-hidden rounded-xl bg-light-surface dark:bg-dark-surface shadow-2xl"
			>
				<div class="relative">
					<Icon
						icon="search"
						class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-light-secondary-content dark:text-dark-secondary-content opacity-50"
					/>
					<input
						bind:this={input}
						type="text"
						class="h-12 w-full border-0 bg-transparent pl-11 pr-10 text-light-secondary-content dark:text-dark-secondary-content placeholder-light-secondary-content dark:placeholder-dark-secondary-content placeholder-opacity-50 focus:ring-0 sm:text-sm"
						placeholder="Search..."
						role="combobox"
						aria-expanded="false"
						aria-controls="options"
						autofocus={true}
						bind:value
						on:input={filterData}
					/>
					{#if value && value.length > 0}
						<span
							transition:scale|local
							class="absolute inset-y-0 right-16 items-center cursor-pointer flex active:flex"
							on:click={handleClear}
							on:keypress
						>
							<span class="material-icons text-light-icon dark:text-dark-icon text-base">
								clear
							</span>
						</span>
					{/if}
					<div
						class="absolute inset-y-0 right-4 top-2.5 flex items-center justify-center h-[26px] bg-light-background dark:bg-dark-background rounded-md px-1 py-0.5 border border-light-border dark:border-dark-border shadow-sm"
					>
						esc
					</div>
				</div>

				{#if fiteredData.length > 0}
					<ul class="max-h-96 scroll-py-3 overflow-y-auto p-3" id="options" role="listbox">
						{#each fiteredData as item}
							<li
								class="group flex cursor-pointer select-none rounded-xl p-3 hover:bg-light-icon-background-hover dark:hover:bg-dark-icon-background-hover"
								id="option-1"
								tabindex="-1"
								on:click={() => handleSelect(item.href)}
								on:keypress
							>
								<div
									class="flex h-10 w-10 flex-none items-center justify-center rounded-lg"
									class:bg-info-content={item.type === 'Component'}
									class:bg-success-content={item.type === 'Guide'}
									class:bg-warn-content={item.type === 'Action'}
									class:bg-error-content={item.type === 'Utility'}
								>
									{#if item.type === 'Component'}
										<Icon icon="toggle_on" class="text-dark-content" />
									{:else if item.type === 'Guide'}
										<Icon icon="checklist" class="text-dark-content" />
									{:else if item.type === 'Action'}
										<Icon icon="offline_bolt" class="text-dark-content" />
									{:else if item.type === 'Utility'}
										<Icon icon="functions" class="text-dark-content" />
									{/if}
								</div>
								<div class="ml-4 flex-auto">
									<p class="text-sm font-medium text-light-content dark:text-dark-content">
										{item.name}
									</p>
									<p class="text-sm text-light-secondary-content dark:text-dark-secondary-content">
										{item.type}
									</p>
								</div>
							</li>
						{/each}
					</ul>
				{:else}
					<div class="py-14 px-6 text-center text-sm sm:px-14">
						<Icon
							icon="info"
							class="mx-auto text-5xl text-light-secondary-content dark:text-dark-secondary-content"
						/>
						<h2 class="mt-4 text-light-content dark:text-dark-content">No results found</h2>
						<p class="mt-2 text-light-secondary-content dark:text-dark-secondary-content">
							No components found for this search term. Please try again.
						</p>
					</div>
				{/if}
			</Modal.Content>
		</Modal>
	</Portal>
{/if}
