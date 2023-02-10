<script lang="ts">
	import { data } from '../../search-data';
	import { Modal, Portal, Icon, Button, Empty } from '../../../lib';
	import { goto } from '$app/navigation';
	import { scale } from 'svelte/transition';
	import Kbd from '../kbd/Kbd.svelte';
	import {
		format_list_numbered,
		function_variant,
		lightning_bolt_circle,
		magnify,
		toggle_switch
	} from '../../icons';
	import { close, info } from '../../../lib/icons';
	import { browser } from '$app/environment';

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

	$: if (open && browser && input) {
		input.focus();
	}
</script>

<svelte:window on:keydown={captureEscapeEvent} />

<Button
	ariaLabel="open search"
	on:click={handleOpen}
	shape="circle"
	class="flex ml-4 bg-light-icon-background dark:bg-dark-icon-background text-light-icon dark:text-dark-icon"
>
	<Button.Icon slot="icon" data={magnify} stroke="currentColor" />
</Button>

{#if open}
	<Portal>
		<Modal {handleClose}>
			<Modal.Content
				class="mx-auto max-w-xl transform divide-y divide-light-border dark:divide-dark-border overflow-hidden rounded-xl bg-light-surface dark:bg-dark-surface shadow-2xl"
			>
				<div class="relative">
					<span>
						<Icon
							data={magnify}
							class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-light-secondary-content dark:text-dark-secondary-content opacity-50"
						/>
					</span>
					<input
						bind:this={input}
						type="text"
						class="h-12 w-full border-0 bg-transparent pl-11 pr-10 text-light-secondary-content dark:text-dark-secondary-content placeholder-light-secondary-content dark:placeholder-dark-secondary-content placeholder-opacity-50 focus:ring-0 sm:text-sm"
						placeholder="Search..."
						role="combobox"
						aria-expanded="false"
						aria-controls="options"
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
							<span class="text-light-icon dark:text-dark-icon">
								<Icon data={close} />
							</span>
						</span>
					{/if}

					<Kbd class="absolute inset-y-0 right-4 top-2.5 flex items-center justify-center h-[26px]">
						esc
					</Kbd>
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
										<Icon data={toggle_switch} class="text-dark-content" />
									{:else if item.type === 'Guide'}
										<Icon data={format_list_numbered} class="text-dark-content" />
									{:else if item.type === 'Action'}
										<Icon data={lightning_bolt_circle} class="text-dark-content" />
									{:else if item.type === 'Utility'}
										<Icon data={function_variant} class="text-dark-content" />
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
					<Empty>
						<Empty.Icon slot="icon" data={info} />
						<Empty.Title slot="title">No results found</Empty.Title>
						<Empty.Description slot="description"
							>No results found for this search. Please try again.</Empty.Description
						>
					</Empty>
				{/if}
			</Modal.Content>
		</Modal>
	</Portal>
{/if}
