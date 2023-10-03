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
		baseDisabled,
		defaultDisabled,
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
	export let type: 'default' | 'primary' | 'danger' | 'ghost' | 'link' | 'text' | undefined =
		undefined;
	export let shape: 'square' | 'circle' | 'rounded' | 'pill' = 'rounded';
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fab' = 'md';
	export let disableHover = false;
	export let ariaLabel: undefined | string = undefined;
	export let href: string | undefined = undefined;

	$: iconSize = composeIconSize(size);

	$: finalClass = twMerge(
		defaultClass,

		loading ? 'cursor-wait' : false,
		!loading ? 'cursor-pointer' : false,

		size === 'xs' && shape !== 'circle' ? xs : false,
		size === 'sm' && shape !== 'circle' ? sm : false,
		size === 'md' && shape !== 'circle' ? md : false,
		size === 'lg' && shape !== 'circle' ? lg : false,
		size === 'xl' && shape !== 'circle' ? xl : false,
		size === 'fab' ? fab : false,

		type === 'default' ? defaultButton : false,
		type === 'primary' ? primaryButton : false,
		type === 'danger' ? dangerButton : false,
		type === 'ghost' ? ghostButton : false,
		type === 'link' ? linkButton : false,
		type === 'text' ? textButton : false,

		disabled ? baseDisabled : false,
		(type === 'default' || type === undefined) && disabled ? defaultDisabled : false,
		type === 'ghost' && disabled ? ghostDisabled : false,
		type === 'link' && disabled ? linkDisabled : false,
		type === 'text' && disabled ? textDisabled : false,

		shape === 'circle' ? circleShape : false,
		shape === 'square' ? squareShape : false,
		shape === 'rounded' ? roundedShape : false,
		shape === 'pill' ? pillShape : false,

		shape === 'circle' && size === 'xs' ? circleXs : false,
		shape === 'circle' && size === 'sm' ? circleSm : false,
		shape === 'circle' && size === 'md' ? circleMd : false,
		shape === 'circle' && size === 'lg' ? circleLg : false,
		shape === 'circle' && size === 'xl' ? circleXl : false,

		$$props.class
	);

	$: hoverClass = twMerge(
		'stwui-button-hover',

		shape === 'circle' ? 'rounded-full' : false,
		shape === 'rounded' ? 'rounded-md' : false,
		shape === 'pill' ? 'rounded-3xl' : false,
		shape === 'square' ? 'rounded-none' : false
	);

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
				class="flex justify-center items-center relative stwui-button-leading-wrapper"
				class:mr-1={size === 'xs' || size === 'sm'}
				class:mr-2={size === 'md' || size === 'lg' || size === 'xl' || size === 'fab'}
				style="width: {iconSize};"
			>
				<Swap {loading} style="width: {iconSize};">
					<slot name="leading" slot="on" size={iconSize} />
					<ButtonLoader slot="off" />
				</Swap>
			</div>
			<div class="flex justify-center items-center relative stwui-button-icon-wrapper">
				<Swap {loading}>
					<slot name="icon" slot="on" />
					<ButtonLoader slot="off" />
				</Swap>
			</div>
		{:else if $$slots.leading}
			<div
				class="flex justify-center items-center relative stwui-button-leading-wrapper"
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
			<div
				class="flex justify-center items-center relative stwui-button-icon-wrapper"
				style="width: {iconSize};"
			>
				<Swap {loading} style="width: {iconSize};">
					<slot name="icon" slot="on" size={iconSize} />
					<ButtonLoader slot="off" />
				</Swap>
			</div>
		{:else if loading}
			<div
				transition:scale|local
				class="flex justify-center items-center relative stwui-button-loading-wrapper"
				class:mr-1={size === 'xs' || size === 'sm'}
				class:mr-2={size === 'md' || size === 'lg' || size === 'xl' || size === 'fab'}
			>
				<ButtonLoader />
			</div>
		{/if}
		<slot />
		{#if $$slots.trailing}
			<div
				class="flex justify-center items-center relative stwui-button-trailing-wrapper"
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
				class="flex justify-center items-center relative stwui-button-leading-wrapper"
				class:mr-1={size === 'xs' || size === 'sm'}
				class:mr-2={size === 'md' || size === 'lg' || size === 'xl' || size === 'fab'}
				style="width: {iconSize};"
			>
				<slot name="leading" size={iconSize} />
			</div>
		{/if}
		{#if $$slots.icon}
			<div
				class="flex justify-center items-center relative stwui-button-icon-wrapper"
				style="width: {iconSize};"
			>
				<Swap {loading} style="width: {iconSize};">
					<slot name="icon" slot="on" size={iconSize} />
					<ButtonLoader slot="off" />
				</Swap>
			</div>
		{/if}
		<slot />
		{#if $$slots.trailing}
			<div
				class="flex justify-center items-center relative stwui-button-trailing-wrapper"
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
