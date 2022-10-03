<script lang="ts">
	import { useContext } from '../../utils/useContext';
	import { getContext } from 'svelte/internal';
	import { AVATAR_GROUP_AVATAR_CONTEXT_ID } from './Avatar.svelte';
	import { twMerge } from 'tailwind-merge';

	export let placement: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left' = 'top-right';

	useContext({
		context_id: AVATAR_GROUP_AVATAR_CONTEXT_ID,
		parent: 'Avatar',
		component: 'Avatar.Indicator'
	});

	const {
		shape,
		size
	}: { size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; shape: 'circle' | 'rounded' | 'square' } =
		getContext(AVATAR_GROUP_AVATAR_CONTEXT_ID);

	let defaultClass = '';
	if (placement === 'top-right') {
		defaultClass =
			'absolute top-0 right-0 block rounded-full ring-2 ring-light-surface dark:ring-dark-surface bg-primary transition-all duration-150';
	} else if (placement === 'top-left') {
		defaultClass =
			'absolute top-0 left-0 block rounded-full ring-2 ring-light-surface dark:ring-dark-surface bg-primary transition-all duration-150';
	} else if (placement === 'bottom-left') {
		defaultClass =
			'absolute bottom-0 left-0 block rounded-full ring-2 ring-light-surface dark:ring-dark-surface bg-primary transition-all duration-150';
	} else if (placement === 'bottom-right') {
		defaultClass =
			'absolute bottom-0 right-0 block rounded-full ring-2 ring-light-surface dark:ring-dark-surface bg-primary transition-all duration-150';
	}
	if (shape !== 'circle') {
		defaultClass += ' transform';
		if (placement === 'top-right') {
			defaultClass += ' -translate-y-1/2 translate-x-1/2';
		} else if (placement === 'bottom-right') {
			defaultClass += ' translate-y-1/2 translate-x-1/2';
		} else if (placement === 'top-left') {
			defaultClass += ' -translate-y-1/2 -translate-x-1/2';
		} else if (placement === 'bottom-left') {
			defaultClass += ' translate-y-1/2 -translate-x-1/2';
		}
	}
	if (size === 'xs') {
		defaultClass += ' h-1.5 w-1.5';
	} else if (size === 'sm') {
		defaultClass += ' h-2 w-2';
	} else if (size === 'md') {
		defaultClass += ' h-2.5 w-2.5';
	} else if (size === 'lg') {
		defaultClass += ' h-3 w-3';
	} else if (size === 'xl') {
		defaultClass += ' h-3.5 w-3.5';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<span class={finalClass} style={$$props.style} />
