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
	import {
		defaultClass,
		xs,
		sm,
		md,
		lg,
		xl,
		fab,
		defaultButton,
		primaryButton,
		dangerButton,
		ghostButton,
		linkButton,
		textButton,
		darkButton,
		baseDisabled,
		defaultDisabled,
		primaryDisabled,
		dangerDisabled,
		ghostDisabled,
		linkDisabled,
		textDisabled,
		circleShape,
		squareShape,
		roundedShape,
		pillShape,
		circleXs,
		circleSm,
		circleMd,
		circleLg,
		circleXl
	} from './styles';
	import { composeIconSize } from '$lib/utils';

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

	$: iconSize = composeIconSize(size);

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

	setContext('button-icon-size', iconSize);
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
