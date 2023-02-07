<script lang="ts">
	import { scale } from 'svelte/transition';
	import { setContext } from 'svelte';
	import clsx from 'clsx';
	import { get_current_component, text } from 'svelte/internal';
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
	export let ariaLabel: undefined | string = undefined;
	export let href: string | undefined = undefined;

	let iconSize = '';
	if (size === 'xs') {
		iconSize = '16px';
	} else if (size === 'sm') {
		iconSize = '18px';
	} else if (size === 'md') {
		iconSize = '20px';
	} else if (size === 'lg') {
		iconSize = '24px';
	} else if (size === 'xl') {
		iconSize = '28px';
	} else if (size === 'fab') {
		iconSize = '34px';
	}

	setContext('button-icon-size', iconSize);

	const defaultClass =
		'btn group relative inline-flex justify-center items-center font-medium active:hover:animate-none active:hover:scale-95 outline-none';

	const xs = 'px-2.5 py-1.5 text-xs';
	const sm = 'px-3 py-[0.45rem] text-sm';
	const md = 'px-3 py-[0.55rem] text-sm';
	const lg = 'px-4 py-2 text-base';
	const xl = 'px-4 py-3 text-base';
	const fab = 'p-5 h-[58px] w-[58px]';

	const defaultButton =
		'border shadow-md bg-default text-default-content border-light-border hover:border-primary-hover hover:text-primary-hover dark:shadow-black dark:border-dark-border';
	const primaryButton =
		'border-none text-primary-content shadow-md bg-primary dark:shadow-black hover:bg-primary-hover';
	const dangerButton =
		'border-none shadow-md text-danger-content bg-danger hover:bg-danger-hover dark:shadow-black';
	const ghostButton =
		'border-none border-transparent shadow-none bg-transparent text-light-secondary-content hover:text-light-content dark:text-dark-content dark:hover:text-primary-hover';
	const linkButton =
		'border-none border-transparent bg-transparent shadow-none text-primary hover:text-primary-hover';
	const textButton = 'border-transparent';
	const darkButton = 'text-primary-content bg-[#2a303c] shadow-md';

	const baseDisabled = 'active:hover:scale-100 opacity-70';
	const defaultDisabled =
		'shadow-md text-default-content bg-default border border-[#e4e6eb] hover:text-default-content hover:border-[#e4e6eb] dark:shadow-black';
	const primaryDisabled = 'hover:bg-primary';
	const dangerDisabled = 'hover:bg-danger';
	const ghostDisabled = 'hover:text-light-secondary-content';
	const linkDisabled = 'hover:bg-transparent';
	const textDisabled = 'border-transparent';

	const circleShape = 'rounded-full';
	const squareShape = 'rounded-none';
	const roundedShape = 'rounded-md';
	const pillShape = 'rounded-3xl';

	const circleXs = 'p-1 h-[30px] w-[30px]';
	const circleSm = 'p-1 h-[38px] w-[38px]';
	const circleMd = 'p-2 h-[38px] w-[38px]';
	const circleLg = 'p-3 h-[42px] w-[42px]';
	const circleXl = 'p-4 h-[50px] w-[50px]';

	$: finalClass = clsx(
		defaultClass,
		{
			'cursor-wait': loading,
			'cursor-pointer': !loading,

			[xs]: size === 'xs' && shape !== 'circle',
			[sm]: size === 'sm' && shape !== 'circle',
			[md]: size === 'md' && shape !== 'circle',
			[lg]: size === 'lg' && shape !== 'circle',
			[xl]: size === 'xl' && shape !== 'circle',
			[fab]: size === 'fab',

			[defaultButton]: type === 'default',
			[primaryButton]: type === 'primary',
			[dangerButton]: type === 'danger',
			[ghostButton]: type === 'ghost',
			[linkButton]: type === 'link',
			[textButton]: type === 'text',
			[darkButton]: type === 'dark',

			[baseDisabled]: disabled,
			[defaultDisabled]: (type === 'default' || type === 'dark' || type === undefined) && disabled,
			[primaryDisabled]: type === 'primary' && disabled,
			[dangerDisabled]: type === 'danger' && disabled,
			[ghostDisabled]: type === 'ghost' && disabled,
			[linkDisabled]: type === 'link' && disabled,
			[textDisabled]: type === 'text' && disabled,

			[circleShape]: shape === 'circle',
			[squareShape]: shape === 'square',
			[roundedShape]: shape === 'rounded',
			[pillShape]: shape === 'pill',

			[circleXs]: shape === 'circle' && size === 'xs',
			[circleSm]: shape === 'circle' && size === 'sm',
			[circleMd]: shape === 'circle' && size === 'md',
			[circleLg]: shape === 'circle' && size === 'lg',
			[circleXl]: shape === 'circle' && size === 'xl'
		},
		$$props.class
	);

	$: hoverClass = clsx({
		'rounded-full': shape === 'circle',
		'rounded-md': shape === 'rounded',
		'rounded-3xl': shape === 'pill',
		'rounded-none': shape === 'square'
	});
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	aria-label={ariaLabel}
	type={href ? null : htmlType}
	{disabled}
	class={finalClass}
	href={href ?? null}
	use:useActions={use}
	use:forwardEvents
	{...exclude($$props, ['use', 'class'])}
>
	{#if defaultLoading}
		{#if $$slots.leading && $$slots.icon}
			<div
				class="flex justify-center items-center relative"
				class:mr-1={size === 'xs' || size === 'sm'}
				class:mr-2={size === 'md' || size === 'lg' || size === 'xl' || size === 'fab'}
				style="width: {iconSize};"
			>
				<Swap {loading} style="width: {iconSize};">
					<slot name="leading" slot="on" size={iconSize} />
					<ButtonLoader slot="off" />
				</Swap>
			</div>
			<div class="flex justify-center items-center relative">
				<Swap {loading}>
					<slot name="icon" slot="on" />
					<ButtonLoader slot="off" />
				</Swap>
			</div>
		{:else if $$slots.leading}
			<div
				class="flex justify-center items-center relative"
				class:mr-1={size === 'xs' || size === 'sm'}
				class:mr-2={size === 'md' || size === 'lg' || size === 'xl' || size === 'fab'}
				style="width: {iconSize};"
			>
				<Swap {loading} style="width: {iconSize};">
					<slot name="leading" slot="on" size={iconSize} />
					<ButtonLoader slot="off" />
				</Swap>
			</div>
		{:else if $$slots.icon}
			<div class="flex justify-center items-center relative" style="width: {iconSize};">
				<Swap {loading} style="width: {iconSize};">
					<slot name="icon" slot="on" size={iconSize} />
					<ButtonLoader slot="off" />
				</Swap>
			</div>
		{:else if loading}
			<div
				transition:scale|local
				class="flex justify-center items-center relative"
				class:mr-1={size === 'xs' || size === 'sm'}
				class:mr-2={size === 'md' || size === 'lg' || size === 'xl' || size === 'fab'}
			>
				<ButtonLoader />
			</div>
		{/if}
		<slot />
		{#if $$slots.trailing}
			<div
				class="flex justify-center items-center relative"
				class:ml-1={size === 'xs' || size === 'sm'}
				class:ml-2={size === 'md' || size === 'lg' || size === 'xl' || size === 'fab'}
				style="width: {iconSize};"
			>
				<slot name="trailing" size={iconSize} />
			</div>
		{/if}
	{:else}
		{#if $$slots.leading}
			<div
				class="flex justify-center items-center relative"
				class:mr-1={size === 'xs' || size === 'sm'}
				class:mr-2={size === 'md' || size === 'lg' || size === 'xl' || size === 'fab'}
				style="width: {iconSize};"
			>
				<slot name="leading" size={iconSize} />
			</div>
		{/if}
		{#if $$slots.icon}
			<div class="flex justify-center items-center relative" style="width: {iconSize};">
				<Swap {loading} style="width: {iconSize};">
					<slot name="icon" slot="on" size={iconSize} />
					<ButtonLoader slot="off" />
				</Swap>
			</div>
		{/if}
		<slot />
		{#if $$slots.trailing}
			<div
				class="flex justify-center items-center relative"
				class:ml-1={size === 'xs' || size === 'sm'}
				class:ml-2={size === 'md' || size === 'lg' || size === 'xl' || size === 'fab'}
				style="width: {iconSize};"
			>
				<slot name="trailing" size={iconSize} />
			</div>
		{/if}
	{/if}

	{#if !disabled && !disableHover}
		<HoverBackground class={hoverClass} />
	{/if}
</svelte:element>
