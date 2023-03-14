<script lang="ts" context="module">
	export const FEED_ITEM_LEADING_AVATAR_CONTEXT_ID = 'feed-item-leading-avatar-context-id';
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
	export let initials: string | undefined = undefined;

	let loaded = false;
	let failed = false;
	let loading = true;

	const srcClass = 'inline-block absolute';
	const srcContainerClass = 'inline-block h-8 w-8 relative align-middle';
	const initialsClass =
		'inline-flex h-8 w-8 items-center justify-center align-middle bg-default text-default-content';

	const circleClass = 'rounded-full';
	const roundedClass = 'rounded-md';

	$: finalClass = twMerge(
		src && !initials ? srcClass : false,
		initials && !src ? initialsClass : false,

		shape === 'circle' ? circleClass : false,
		shape === 'rounded' ? roundedClass : false,

		$$props.class
	);
	$: finalContainerClass = twMerge(
		src && !initials ? srcContainerClass : false,

		shape === 'circle' ? circleClass : false,
		shape === 'rounded' ? roundedClass : false,

		$$props.class
	);

	setContext('feed-avatar-shape', shape);

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
		<span class="font-bold leading-none text-current text-xl">{initials}</span>
	</span>
{/if}
