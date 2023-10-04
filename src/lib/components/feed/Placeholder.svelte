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

	const shape: 'circle' | 'rounded' | 'square' = getContext('feed-avatar-shape');
	const placeholder: boolean = getContext('feed-avatar-placeholder');

	const iconContainerClass = 'absolute text-content h-full w-full';
	const defaultClass =
		'absolute inset-0 h-full w-full flex items-center justify-center overflow-hidden bg-default stwui-feed-leading-avatar-placeholder';
	const circleClass = 'rounded-full';
	const roundedClass = 'rounded-md';

	$: finalClass = twMerge(
		defaultClass,

		shape === 'circle' ? circleClass : false,
		shape === 'rounded' ? roundedClass : false,

		loading ? 'loading' : false,

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
			<Icon data={account} />
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
