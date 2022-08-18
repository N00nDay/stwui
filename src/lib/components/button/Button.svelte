<script lang="ts">
	import { current_component } from 'svelte/internal';
	import { forwardEventsBuilder } from '../../utils/forwardEventsBuilder';
	import { useActions, type ActionArray } from '../../utils/useActions';
	import { exclude } from '../../utils/exclude';
	export let use: ActionArray = [];
	const forwardEvents = forwardEventsBuilder(current_component);

	import type MaterialIcons from '../../types/material-icons';

	import ButtonLoader from './ButtonLoader.svelte';
	import HoverBackground from '../HoverBackground.svelte';
	import Swap from '../swap/Swap.svelte';

	export let disabled: false | true = false;
	export let htmlType: 'button' | 'submit' | 'reset' = 'button';

	export let loading: false | true | undefined = undefined;
	export let swapped: false | true | undefined = undefined;
	export let type:
		| 'default'
		| 'primary'
		| 'danger'
		| 'ghost'
		| 'link'
		| 'text'
		| 'dark'
		| undefined = undefined;
	export let block: true | false = false;
	export let loaderColor: string | undefined = undefined;
	export let shape: 'square' | 'circle' | 'rounded' = 'rounded';
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fab' = 'md';
	export let icon: MaterialIcons | undefined = undefined;
	export let leading: MaterialIcons | undefined = undefined;
	export let trailing: MaterialIcons | undefined = undefined;
	export let swap: MaterialIcons | undefined = undefined;

	let classes =
		'border inline-flex justify-center items-center font-medium transition-all duration-150 active:hover:animate-none active:hover:scale-95 outline-none';
	if (block) classes += ' w-full';
	if (loading) classes += ' cursor-wait';
	let iconSize: string;

	switch (size) {
		case 'xs':
			iconSize = 'text-lg';
			break;
		case 'sm':
			iconSize = 'text-xl';
			break;
		case 'md':
			iconSize = 'text-2xl';
			break;
		case 'lg':
			iconSize = 'text-2xl';
			break;
		case 'xl':
			iconSize = 'text-3xl';
			break;
		case 'fab':
			iconSize = 'text-4xl';
			break;
		default:
			iconSize = '';
	}

	const buttonLoaderColor = loaderColor
		? loaderColor
		: type === 'primary'
		? '#ffffff'
		: type === 'danger'
		? '#ffffff'
		: type === 'link'
		? '#2563eb'
		: '#000000';

	if (icon && $$slots.default) {
		console.warn(
			"<Button /> 'icon' property is to be used by itself. Use 'leading' or 'trailing' in conjunction with text in the default slot"
		);
	}

	// TODO: add progress
	// progress will show radial progress that fills
	// when progress hits 100 it swaps to a check_circle material-icon
</script>

<button
	type={htmlType}
	{disabled}
	class="group relative {classes}{$$props.class ? ` ${$$props.class}` : ''}"
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
	class:xs={size === 'xs'}
	class:sm={size === 'sm'}
	class:md={size === 'md'}
	class:lg={size === 'lg'}
	class:xl={size === 'xl'}
	class:fab={size === 'fab'}
	style={$$props.style}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	{#if loading && !icon && !leading && !trailing}
		<ButtonLoader class=" relative z-10" color={buttonLoaderColor} />
	{/if}
	{#if leading}
		<div class="mr-2 flex justify-center items-center relative z-10">
			<Swap {loading} {swapped}>
				<svelte:fragment slot="icon1">
					<span class="material-icons {iconSize}"> {leading} </span>
				</svelte:fragment>
				<svelte:fragment slot="icon2">
					{#if swap}
						<span class="material-icons {iconSize}"> {swap} </span>
					{:else}
						<ButtonLoader color={buttonLoaderColor} class="swap" />
					{/if}
				</svelte:fragment>
			</Swap>
		</div>
	{/if}
	{#if icon}
		<Swap {loading} {swapped} class=" relative z-10">
			<svelte:fragment slot="icon1">
				<span class="material-icons {iconSize}"> {icon} </span>
			</svelte:fragment>
			<svelte:fragment slot="icon2">
				{#if swap}
					<span class="material-icons {iconSize}"> {swap} </span>
				{:else}
					<ButtonLoader color={buttonLoaderColor} class="swap" />
				{/if}
			</svelte:fragment>
		</Swap>
	{/if}
	{#if $$slots.default}
		<slot />
	{/if}
	{#if trailing}
		<div class="ml-2 flex justify-center items-center  relative z-10">
			<Swap {loading} {swapped}>
				<svelte:fragment slot="icon1">
					<span class="material-icons {iconSize}"> {trailing} </span>
				</svelte:fragment>
				<svelte:fragment slot="icon2">
					{#if swap}
						<span class="material-icons {iconSize}"> {swap} </span>
					{:else}
						<ButtonLoader color={buttonLoaderColor} class="swap" />
					{/if}
				</svelte:fragment>
			</Swap>
		</div>
	{/if}
	{#if !disabled}
		<HoverBackground
			class={shape === 'circle'
				? 'rounded-full'
				: shape === 'rounded'
				? 'rounded-md'
				: 'rounded-none'}
		/>
		<!-- <div
			class="absolute inset-0 bg-transparent transition-all duration-150 hover:bg-light-icon-background-hover dark:hover:bg-dark-icon-background-hover h-full w-full"
			class:circle={shape === 'circle'}
			class:rounded={shape === 'rounded'}
			class:square={shape === 'square'}
			class:xs={size === 'xs'}
			class:sm={size === 'sm'}
			class:md={size === 'md'}
			class:lg={size === 'lg'}
			class:xl={size === 'xl'}
		/> -->
	{/if}
</button>

<style lang="postcss">
	.xs {
		@apply px-2.5;
		@apply py-1.5;
		@apply text-xs;
	}

	.sm {
		@apply px-3;
		@apply py-2;
		@apply text-sm;
	}

	.md {
		@apply px-4;
		@apply py-2;
		@apply text-sm;
	}

	.lg {
		@apply px-4;
		@apply py-2;
		@apply text-base;
	}

	.xl {
		@apply px-6;
		@apply py-3;
		@apply text-base;
	}

	.default {
		@apply shadow-md;
		@apply dark:shadow-black;
		@apply text-default-content;
		@apply bg-default;
		@apply border;
		@apply border-gray-200;
		@apply hover:border-primary-hover;
		@apply hover:bg-gray-100;
		@apply hover:text-primary-hover;
	}

	.primary {
		@apply bg-primary;
		@apply hover:bg-primary-hover;
		@apply text-primary-content;
		@apply shadow-md;
		@apply dark:shadow-black;
		@apply border-none;
	}

	.danger {
		@apply text-danger-content;
		@apply shadow-md;
		@apply dark:shadow-black;
		@apply bg-danger;
		@apply hover:bg-danger-hover;
		@apply border-none;
	}

	.ghost {
		@apply border-transparent;
		@apply text-default-content;
		@apply shadow-none;
		@apply border-none;
		@apply bg-transparent;
	}

	.link {
		@apply border-transparent;
		@apply shadow-none;
		@apply text-primary;
		@apply border-none;
		@apply bg-transparent;
		@apply hover:text-primary-hover;
	}

	.text {
		@apply border-transparent;
	}

	.dark {
		@apply bg-dark-primary;
		@apply text-primary-content;
		@apply hover:bg-opacity-90;
		@apply outline-none;
		@apply ring-0;
		@apply border-none;
	}

	.default:disabled {
		@apply hover:text-default-content;
		@apply hover:border-gray-200;
		@apply shadow-md;
		@apply dark:shadow-black;
		@apply text-default-content;
		@apply bg-default;
		@apply border;
		@apply border-gray-200;
		@apply active:hover:scale-100;
		@apply opacity-70;
	}

	.primary:disabled {
		@apply hover:bg-primary;
		@apply bg-primary;
		@apply text-primary-content;
		@apply shadow-md;
		@apply dark:shadow-black;
		@apply active:hover:scale-100;
		@apply opacity-70;
	}

	.danger:disabled {
		@apply hover:bg-danger;
		@apply text-danger-content;
		@apply shadow-md;
		@apply dark:shadow-black;
		@apply bg-danger;
		@apply active:hover:scale-100;
		@apply opacity-70;
	}

	.ghost:disabled {
		@apply hover:bg-transparent;
		@apply border-transparent;
		@apply text-default-content;
		@apply shadow-none;
		@apply border-none;
		@apply bg-transparent;
		@apply active:hover:scale-100;
		@apply opacity-70;
	}

	.link:disabled {
		@apply border-transparent;
		@apply shadow-none;
		@apply text-primary;
		@apply border-none;
		@apply bg-transparent;
		@apply active:hover:scale-100;
		@apply opacity-70;
	}

	.text:disabled {
		@apply border-transparent;
		@apply active:hover:scale-100;
		@apply opacity-70;
	}

	.circle {
		@apply rounded-full;
	}

	.square {
		@apply rounded-none;
	}

	.rounded {
		@apply rounded-md;
	}

	.circle.xs {
		@apply p-1;
		height: 30px;
		width: 30px;
	}

	.circle.sm {
		@apply p-1;
		height: 38px;
		width: 38px;
	}

	.circle.md {
		@apply p-2;
		height: 38px;
		width: 38px;
	}

	.circle.lg {
		@apply p-3;
		height: 42px;
		width: 42px;
	}

	.circle.xl {
		@apply p-4;
		height: 50px;
		width: 50px;
	}

	.circle.fab {
		@apply p-5;
		height: 58px;
		width: 58px;
	}
</style>
