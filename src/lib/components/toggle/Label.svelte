<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	const defaultClass = 'text-sm font-medium text-light-content dark:text-dark-content';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<span class={finalClass} style={$$props.style}><slot /> </span>
