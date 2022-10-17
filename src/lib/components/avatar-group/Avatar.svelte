<script lang="ts" context="module">
	export const AVATAR_GROUP_AVATAR_CONTEXT_ID = 'avatar-group-avatar-context-id';
</script>

<script lang="ts">
	import { AVATAR_GROUP_CONTEXT_ID } from './AvatarGroup.svelte';
	import { useContext } from '../../utils/useContext';
	import { setContext, getContext, onMount } from 'svelte/internal';
	import { twMerge } from 'tailwind-merge';
	import Placeholder from './Placeholder.svelte';
	import { get_current_component } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	export let src: string | undefined = undefined;
	export let alt = 'avatar';
	export let initials: string | undefined = undefined;

	let loaded = false;
	let failed = false;
	let loading = true;

	useContext({
		context_id: AVATAR_GROUP_CONTEXT_ID,
		parent: 'AvatarGroup',
		component: 'AvatarGroup.Avatar'
	});

	const {
		shape,
		size
	}: { shape: 'circle' | 'rounded' | 'square'; size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' } =
		getContext(AVATAR_GROUP_CONTEXT_ID);

	setContext(AVATAR_GROUP_AVATAR_CONTEXT_ID, {
		avatar: true,
		src,
		alt,
		shape,
		size
	});

	let defaultClass = '';
	let containerDefaultClass = '';
	if (src) {
		defaultClass = 'inline-block absolute ring-2 ring-light-surface dark:ring-dark-surface';
		containerDefaultClass = 'inline-block relative align-middle';
	} else if (initials) {
		defaultClass =
			'inline-flex items-center justify-center align-middle bg-light-icon-background dark:bg-dark-icon-background text-light-content dark:text-dark-content ring-2 ring-light-surface dark:ring-dark-surface';
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
