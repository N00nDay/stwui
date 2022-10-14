<script lang="ts" context="module">
	export const BUTTON_CONTEXT_ID = 'button-context-id';
</script>

<script lang="ts">
	import { scale } from 'svelte/transition';
	import { setContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	import ButtonLoader from './Loader.svelte';
	import HoverBackground from '../HoverBackground.svelte';
	import Swap from '../swap';

	export let disabled: false | true = false;
	export let htmlType: 'button' | 'submit' | 'reset' = 'button';
	export let loading: false | true | undefined = undefined;
	export let defaultLoading = true;
	export let type:
		| 'default'
		| 'primary'
		| 'danger'
		| 'ghost'
		| 'link'
		| 'text'
		| 'dark'
		| undefined = undefined;
	export let shape: 'square' | 'circle' | 'rounded' | 'pill' = 'rounded';
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fab' = 'md';
	export let disableHover = false;

	setContext(BUTTON_CONTEXT_ID, {
		button: true,
		size
	});

	let defaultClass =
		'btn group relative inline-flex justify-center items-center font-medium active:hover:animate-none active:hover:scale-95 outline-none';
	if (loading) {
		defaultClass += ' cursor-wait';
	} else {
		defaultClass += ' cursor-pointer';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);

	const hoverClass =
		shape === 'circle'
			? 'rounded-full'
			: shape === 'rounded'
			? 'rounded-md'
			: shape === 'pill'
			? 'rounded-3xl'
			: 'rounded-none';
</script>

<button
	type={htmlType}
	{disabled}
	class={finalClass}
	class:primary={type === 'primary'}
	class:danger={type === 'danger'}
	class:default={type === 'default'}
	class:ghost={type === 'ghost'}
	class:link={type === 'link'}
	class:text={type === 'text'}
	class:dark={type === 'dark'}
	class:circle={shape === 'circle'}
	class:rounded={shape === 'rounded'}
	class:square={shape === 'square'}
	class:pill={shape === 'pill'}
	class:xs={size === 'xs'}
	class:sm={size === 'sm'}
	class:md={size === 'md'}
	class:lg={size === 'lg'}
	class:xl={size === 'xl'}
	class:fab={size === 'fab'}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	{#if defaultLoading}
		{#if $$slots.leading && $$slots.icon}
			<div class="mr-2 flex justify-center items-center relative">
				<Swap {loading}>
					<svelte:fragment slot="on">
						<slot name="leading" />
					</svelte:fragment>
					<svelte:fragment slot="off">
						<ButtonLoader />
					</svelte:fragment>
				</Swap>
			</div>
			<div class="flex justify-center items-center relative">
				<Swap {loading}>
					<svelte:fragment slot="on">
						<slot name="icon" />
					</svelte:fragment>
					<svelte:fragment slot="off">
						<ButtonLoader />
					</svelte:fragment>
				</Swap>
			</div>
		{:else if $$slots.leading}
			<div class="mr-2 flex justify-center items-center relative">
				<Swap {loading}>
					<svelte:fragment slot="on">
						<slot name="leading" />
					</svelte:fragment>
					<svelte:fragment slot="off">
						<ButtonLoader />
					</svelte:fragment>
				</Swap>
			</div>
		{:else if $$slots.icon}
			<div class="flex justify-center items-center relative">
				<Swap {loading}>
					<svelte:fragment slot="on">
						<slot name="icon" />
					</svelte:fragment>
					<svelte:fragment slot="off">
						<ButtonLoader />
					</svelte:fragment>
				</Swap>
			</div>
		{:else if loading}
			<div transition:scale|local class="mr-2 flex justify-center items-center relative">
				<ButtonLoader />
			</div>
		{/if}
		<slot />
		<slot name="trailing" />
	{:else}
		<slot name="leading" />
		<slot name="icon" />
		<slot />
		<slot name="trailing" />
	{/if}

	{#if !disabled && !disableHover}
		<HoverBackground class={hoverClass} />
	{/if}
</button>
