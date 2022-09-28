<script lang="ts">
	import { validateSlots } from '$lib/utils/validateSlots';
	import { scale, fade } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import Backdrop from './Backdrop.svelte';

	export let handleClose: () => void;

	function captureEscapeEvent(e: KeyboardEvent) {
		if (e.key === 'Escape' && e.code === 'Escape' && !e.shiftKey) {
			handleClose();
		}
	}

	validateSlots($$slots, ['default', 'backdrop', 'content'], 'Modal');

	const defaultClass = 'fixed inset-0 overflow-y-auto p-4 sm:p-6 md:p-20';
	const finalClass = twMerge(defaultClass, $$props.class);
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
		style={$$props.style}
		in:scale={{ start: 0.9, duration: 250, delay: 150 }}
		out:scale={{ start: 0.95, duration: 150 }}
	>
		<slot name="content" />
		<slot />
	</div>
</div>
