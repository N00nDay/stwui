<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	const defaultClass =
		'mx-1 bg-light-background dark:bg-dark-background rounded-md px-1.5 py-[0.0625] border border-light-border-base dark:border-dark-border shadow-sm';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<slot />
</div>
