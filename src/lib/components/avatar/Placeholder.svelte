<script lang="ts">
	import { AVATAR_CONTEXT_ID } from './Avatar.svelte';
	import { useContext } from '../../utils/useContext';
	import { getContext } from 'svelte/internal';
	import { twMerge } from 'tailwind-merge';

	export let icon = 'person';

	useContext({
		context_id: AVATAR_CONTEXT_ID,
		parent: 'Avatar',
		component: 'Avatar.Placeholder'
	});

	const {
		shape,
		size
	}: { size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; shape: 'circle' | 'rounded' | 'square' } =
		getContext(AVATAR_CONTEXT_ID);

	let defaultClass =
		'absolute inset-0 h-full w-full flex items-center justify-center overflow-hidden transition-all duration-150 bg-light-icon-background dark:bg-dark-icon-background';
	if (shape === 'circle') {
		defaultClass += ' rounded-full';
	} else if (shape === 'rounded') {
		defaultClass += ' rounded-md';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<span
		class="material-icons absolute text-light-icon dark:text-dark-icon transition-all duration-150"
		class:text-2xl={size === 'xs'}
		class:text-4xl={size === 'sm'}
		class:text-5xl={size === 'md'}
		class:text-6xl={size === 'lg'}
		class:text-7xl={size === 'xl'}
		class:bottom-[-0.5rem]={size === 'xs' || size === 'sm' || size === 'md'}
		class:bottom-[-0.75rem]={size === 'lg' || size === 'xl'}
	>
		{icon}
	</span>
</div>
