<script lang="ts" context="module">
	export const POST_HEADER_AVATAR_CONTEXT_ID = 'avatar-context-id';
</script>

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

	let loaded = false;
	let failed = false;
	let loading = true;

	setContext(POST_HEADER_AVATAR_CONTEXT_ID, {
		avatar: true,
		src,
		alt,
		shape
	});

	let defaultClass = '';
	let containerDefaultClass = '';
	if (src) {
		defaultClass = 'inline-block absolute h-10 w-10';
		containerDefaultClass = 'inline-block relative align-middle h-10 w-10';
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
