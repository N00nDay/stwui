<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	const defaultClass = 'text-sm font-semibold text-light-content dark:text-dark-content';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<h3 class={finalClass} style={$$props.style}>
	<slot />
</h3>
