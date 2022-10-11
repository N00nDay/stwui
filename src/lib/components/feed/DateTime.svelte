<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	const defaultClass =
		'whitespace-nowrap text-right text-sm text-light-secondary-content dark:text-dark-secondary-content';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<slot />
</div>
