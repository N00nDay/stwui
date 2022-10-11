<script lang="ts">
	import { scale } from 'svelte/transition';
	import type { MaterialIcon } from '../../types';
	import { twMerge } from 'tailwind-merge';
	import { BUTTON_CONTEXT_ID } from './Button.svelte';
	import { useContext } from '../../utils/useContext';
	import { getContext } from 'svelte';

	export let icon: MaterialIcon;

	useContext({
		context_id: BUTTON_CONTEXT_ID,
		parent: 'Button',
		component: 'Button.Icon'
	});

	const { size }: { size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fab' } =
		getContext(BUTTON_CONTEXT_ID);

	let iconSize: string;
	switch (size) {
		case 'xs':
			iconSize = ' text-lg';
			break;
		case 'sm':
			iconSize = ' text-xl';
			break;
		case 'md':
			iconSize = ' text-2xl';
			break;
		case 'lg':
			iconSize = ' text-2xl';
			break;
		case 'xl':
			iconSize = ' text-3xl';
			break;
		case 'fab':
			iconSize = ' text-4xl';
			break;
		default:
			iconSize = '';
	}

	const defaultClass = `material-icons currentColor${iconSize}`;
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<span transition:scale|local class={finalClass} style={$$props.style}> {icon} </span>
