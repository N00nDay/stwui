<script lang="ts">
	import { setContext, onMount } from 'svelte/internal';
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

	let loaded = false;
	let failed = false;
	let loading = true;

	setContext('avatar-src', src);
	setContext('avatar-alt', alt);
	setContext('avatar-shape', shape);
	setContext('avatar-size', size);

	let defaultClass = '';
	let containerDefaultClass = '';
	if (src) {
		defaultClass = 'inline-block absolute';
		containerDefaultClass = 'inline-block relative align-middle';
	} else if (initials) {
		defaultClass =
			'inline-flex items-center justify-center align-middle bg-light-icon-background dark:bg-dark-icon-background text-light-content dark:text-dark-content';
	}
	if (size === 'xs') {
		defaultClass += ' h-6 w-6';
		containerDefaultClass += ' h-6 w-6';
	} else if (size === 'sm') {
		defaultClass += ' h-8 w-8';
		containerDefaultClass += ' h-8 w-8';
	} else if (size === 'md') {
		defaultClass += ' h-10 w-10';
		containerDefaultClass += ' h-10 w-10';
	} else if (size === 'lg') {
		defaultClass += ' h-12 w-12';
		containerDefaultClass += ' h-12 w-12';
	} else if (size === 'xl') {
		defaultClass += ' h-16 w-16';
		containerDefaultClass += ' h-16 w-16';
	}
	if (shape === 'circle') {
		defaultClass += ' rounded-full';
		containerDefaultClass += ' rounded-full';
	} else if (shape === 'rounded') {
		defaultClass += ' rounded-md';
		containerDefaultClass += ' rounded-md';
	}

	$: finalClass = twMerge(defaultClass, $$props.class);
	$: finalContainerClass = twMerge(containerDefaultClass, $$props.class);

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
		{...exclude($$props, ['use', 'class'])}
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
