<script lang="ts" context="module">
	export const AVATAR_PLACEHOLDER_CONTEXT_ID = 'avatar-placeholder-context-id';
</script>

<script lang="ts">
	import { fade } from 'svelte/transition';
	import { AVATAR_CONTEXT_ID } from './Avatar.svelte';
	import { useContext } from '../../utils/useContext';
	import { getContext, setContext } from 'svelte/internal';
	import { twMerge } from 'tailwind-merge';
	import Icon from './Icon.svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let loading = false;

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
	if (loading) {
		defaultClass += ' loading';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	transition:fade|local
	class={finalClass}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	{#if $$slots.icon}
		<slot name="icon" />
	{:else}
		<Icon class="text-light-icon dark:text-dark-icon" />
	{/if}
</div>

<style>
	.loading::after {
		position: absolute;
		transform: translateX(-100%);
		background: linear-gradient(
			90deg,
			rgba(190, 190, 190, 0.2) 25%,
			rgba(129, 129, 129, 0.24) 37%,
			rgba(190, 190, 190, 0.2) 63%
		);
		inset: 0 -150%;
		animation: shimmer 2s infinite;
		content: '';
	}

	@keyframes shimmer {
		0% {
			transform: translate(-37.5%);
		}
		to {
			transform: translate(37.5%);
		}
	}
</style>
