<script lang="ts">
	import { scale, fade } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import Backdrop from './Backdrop.svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	import { trapFocus } from '$lib/utils';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let handleClose: () => void;

	function captureEscapeEvent(e: KeyboardEvent) {
		if (e.key === 'Escape' && e.code === 'Escape' && !e.shiftKey) {
			handleClose();
			e.preventDefault();
			e.stopPropagation();
		}
	}

	const defaultClass = 'fixed inset-0 p-4 sm:p-6 md:p-20';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<svelte:window on:keydown={captureEscapeEvent} />

<div class="relative z-10 pointer-events-none" role="dialog" aria-modal="true" transition:fade>
	{#if $$slots.backdrop}
		<slot name="backdrop" />
	{:else}
		<Backdrop {handleClose} />
	{/if}

	<div
		class={finalClass}
		use:trapFocus
		use:useActions={use}
		use:forwardEvents
		{...exclude($$props, ['use', 'class'])}
		in:scale={{ start: 0.9, duration: 250, delay: 150 }}
		out:scale={{ start: 0.95, duration: 150 }}
	>
		<slot name="content" />
		<slot />
		<button
			class="h-0 w-0 border-none outline-none ring-0 focus:border-none focus:outline-none focus:ring-0"
		/>
	</div>
</div>
