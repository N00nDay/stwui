<script lang="ts">
	import { fade } from 'svelte/transition';
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import Icon from '../icon/Icon.svelte';
	import { account } from '../../icons';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let loading = false;

	const shape: 'circle' | 'rounded' | 'square' = getContext('avatar-group-shape');
	const size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = getContext('avatar-group-size');
	const placeholder: boolean = getContext('avatar-group-placeholder');

	const defaultClass =
		'absolute text-content inset-0 h-full w-full flex items-center justify-center overflow-hidden bg-default stwui-avatar-group-avatar-placeholder';
	const circleClass = 'rounded-full';
	const roundedClass = 'rounded-md';

	const defaultIconContainerClass =
		'absolute text-content h-full w-full stwui-avatar-group-avatar-placeholder-icon';
	const xsContainerClass = 'bottom-[-0.25rem]';
	const smContainerClass = 'bottom-[-0.35rem]';
	const mdContainerClass = 'bottom-[-0.5rem]';
	const lgContainerClass = 'text-6xl bottom-[-0.6rem]';
	const xlContainerClass = 'bottom-[-0.75rem]';
	const xsIconSize = '24px';
	const smIconSize = '32px';
	const mdIconSize = '40px';
	const lgIconSize = '48px';
	const xlIconSize = '64px';

	$: iconContainerClass = twMerge(
		defaultIconContainerClass,

		size === 'xs' ? xsContainerClass : false,
		size === 'sm' ? smContainerClass : false,
		size === 'md' ? mdContainerClass : false,
		size === 'lg' ? lgContainerClass : false,
		size === 'xl' ? xlContainerClass : false
	);
	$: iconSize = twMerge(
		size === 'xs' ? xsIconSize : false,
		size === 'sm' ? smIconSize : false,
		size === 'md' ? mdIconSize : false,
		size === 'lg' ? lgIconSize : false,
		size === 'xl' ? xlIconSize : false
	);
	$: finalClass = twMerge(
		defaultClass,

		loading ? 'loading' : false,

		shape === 'circle' ? circleClass : false,
		shape === 'rounded' ? roundedClass : false,

		$$props.class
	);
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
	{:else if placeholder}
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
