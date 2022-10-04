<script lang="ts" context="module">
	export const AVATAR_PLACEHOLDER_CONTEXT_ID = 'avatar-placeholder-context-id';
</script>

<script lang="ts">
	import { AVATAR_CONTEXT_ID } from './Avatar.svelte';
	import { useContext } from '../../utils/useContext';
	import { getContext, setContext } from 'svelte/internal';
	import { twMerge } from 'tailwind-merge';
	import Icon from './Icon.svelte';

	useContext({
		context_id: AVATAR_CONTEXT_ID,
		parent: 'Avatar',
		component: 'Avatar.Placeholder'
	});

	const { shape }: { shape: 'circle' | 'rounded' | 'square' } = getContext(AVATAR_CONTEXT_ID);

	setContext(AVATAR_PLACEHOLDER_CONTEXT_ID, {
		placeholder: true
	});

	let defaultClass =
		'absolute inset-0 h-full w-full flex items-center justify-center overflow-hidden bg-light-icon-background dark:bg-dark-icon-background';
	if (shape === 'circle') {
		defaultClass += ' rounded-full';
	} else if (shape === 'rounded') {
		defaultClass += ' rounded-md';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	{#if $$slots.icon || $$slots.default}
		<slot name="icon" />
		<slot />
	{:else}
		<Icon />
	{/if}
</div>
