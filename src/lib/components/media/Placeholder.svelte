<script lang="ts" context="module">
	export const MEDIA_AVATAR_PLACEHOLDER_ID = 'media-avatar-placeholder-id';
</script>

<script lang="ts">
	import { fade } from 'svelte/transition';
	import { MEDIA_AVATAR_CONTEXT_ID } from './Avatar.svelte';
	import { useContext } from '../../utils/useContext';
	import { getContext, setContext } from 'svelte/internal';
	import { twMerge } from 'tailwind-merge';
	import Icon from '../icon/Icon.svelte';
	import { account } from '../../icons';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let loading = false;

	useContext({
		context_id: MEDIA_AVATAR_CONTEXT_ID,
		parent: 'Media.Avatar',
		component: 'Media.Avatar.Placeholder'
	});

	setContext(MEDIA_AVATAR_PLACEHOLDER_ID, {
		placeholder: true
	});

	const {
		shape,
		size
	}: { shape: 'circle' | 'rounded' | 'square'; size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' } =
		getContext(MEDIA_AVATAR_CONTEXT_ID);

	let iconContainerClass = 'absolute text-light-icon dark:text-dark-icon h-full w-full';
	let iconSize = '';
	if (size === 'xs') {
		iconContainerClass += ' bottom-[-0.25rem]';
		iconSize = '24px';
	} else if (size === 'sm') {
		iconContainerClass += ' bottom-[-0.35rem]';
		iconSize = '32px';
	} else if (size === 'md') {
		iconContainerClass += ' bottom-[-0.5rem]';
		iconSize = '40px';
	} else if (size === 'lg') {
		iconContainerClass += ' text-6xl bottom-[-0.6rem]';
		iconSize = '48px';
	} else if (size === 'xl') {
		iconContainerClass += ' bottom-[-0.75rem]';
		iconSize = '64px';
	}

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
	{#if $$slots.icon || $$slots.default}
		<slot name="icon" />
		<slot />
	{:else}
		<span class={iconContainerClass}>
			<Icon data={account} size={iconSize} />
		</span>
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
