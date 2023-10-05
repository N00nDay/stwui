<script lang="ts">
	import { setContext, onMount } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import Placeholder from './Placeholder.svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let src: string | undefined = undefined;
	export let alt = 'avatar';
	export let shape: 'circle' | 'rounded' | 'square' = 'circle';
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
	export let initials: string | undefined = undefined;
	export let placeholder = true;

	let loaded = false;
	let failed = false;
	let loading = true;

	const srcClass = 'inline-block absolute stwui-notification-leading-avatar';
	const srcContainerClass =
		'inline-block relative align-middle stwui-notification-leading-avatar-wrapper';
	const initialClass =
		'inline-flex items-center justify-center align-middle bg-default text-default-content stwui-notification-leading-avatar';
	const xsClass = 'h-6 w-6';
	const smClass = 'h-8 w-8';
	const mdClass = 'h-10 w-10';
	const lgClass = 'h-12 w-12';
	const xlClass = 'h-16 w-16';
	const circleClass = 'rounded-full';
	const roundedClass = 'rounded-md';

	$: finalClass = twMerge(
		src && !initials ? srcClass : false,
		initials && !src ? initialClass : false,

		size === 'xs' ? xsClass : false,
		size === 'sm' ? smClass : false,
		size === 'md' ? mdClass : false,
		size === 'lg' ? lgClass : false,
		size === 'xl' ? xlClass : false,

		shape === 'circle' ? circleClass : false,
		shape === 'rounded' ? roundedClass : false,

		$$props.class
	);
	$: finalContainerClass = twMerge(
		src && !initials ? srcContainerClass : false,

		size === 'xs' ? xsClass : false,
		size === 'sm' ? smClass : false,
		size === 'md' ? mdClass : false,
		size === 'lg' ? lgClass : false,
		size === 'xl' ? xlClass : false,

		shape === 'circle' ? circleClass : false,
		shape === 'rounded' ? roundedClass : false,

		$$props.class
	);

	setContext('notification-avatar-shape', shape);
	setContext('notification-avatar-size', size);
	setContext('notification-avatar-placeholder', placeholder);

	onMount(() => {
		if (src) {
			const image = new Image();
			image.src = src;
			loading = true;

			image.onload = () => {
				loading = false;
				loaded = true;
			};
			image.onerror = () => {
				loading = false;
				failed = true;
			};
		}
	});
</script>

{#if src}
	<span
		class={finalContainerClass}
		use:useActions={use}
		use:forwardEvents
		{...exclude($$props, ['use', 'class', 'src'])}
	>
		{#if loaded}
			<img class={finalClass} style={$$props.style} src={src || ''} {alt} />
		{:else if failed}
			{#if $$slots.placeholder}
				<slot name="placeholder" />
			{:else}
				<Placeholder />
			{/if}
		{:else if loading}
			<Placeholder loading />
		{/if}

		<slot name="indicator" />
	</span>
{:else if initials}
	<span
		class={finalClass}
		use:useActions={use}
		use:forwardEvents
		{...exclude($$props, ['use', 'class'])}
	>
		<span
			class="font-bold leading-none text-current"
			class:text-xs={size === 'xs'}
			class:text-sm={size === 'sm'}
			class:text-xl={size === 'lg'}
			class:text-2xl={size === 'xl'}>{initials}</span
		>
	</span>
{/if}
