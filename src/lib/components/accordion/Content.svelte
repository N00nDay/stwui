<script lang="ts">
	import { slide } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	const defaultClass =
		'border-t border-light-border dark:border-dark-border text-light-secondary-content dark:text-dark-secondary-content transition-all duration-150';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div transition:slide|local class={finalClass} style={$$props.style}>
	<slot />
</div>
