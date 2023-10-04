<script lang="ts">
	import { getContext, setContext, onMount } from 'svelte';
	import Placeholder from './Placeholder.svelte';
	import { twMerge } from 'tailwind-merge';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let src: string;
	export let alt = 'user-avatar';
	export let shape: 'circle' | 'rounded' | 'square' = 'circle';
	export let initials: string | undefined = undefined;
	export let placeholder = true;

	let loaded = false;
	let failed = false;
	let loading = true;

	const size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = getContext('chip-size');

	const srcClass = 'inline-block absolute stwui-chip-avatar';
	const srcContainerClass =
		'inline-block relative align-middle flex items-center justify-center stwui-chip-avatar-wrapper';
	const initialClass =
		'inline-flex items-center justify-center align-middle bg-default text-default-content flex items-center justify-center stwui-chip-avatar';
	const xsClass = 'h-6 w-6 p-0.5';
	const smClass = 'h-8 w-8 p-0.5';
	const mdClass = 'h-10 w-10 p-0.5';
	const lgClass = 'h-12 w-12 p-1';
	const xlClass = 'h-16 w-16 p-1';
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

	setContext('chip-avatar-src', src);
	setContext('chip-avatar-alt', alt);
	setContext('chip-avatar-shape', shape);
	setContext('chip-avatar-size', size);
	setContext('chip-avatar-placeholder', placeholder);

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
