<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	const defaultClass =
		'mx-1 bg-background rounded-md px-1.5 py-[0.0625] border border-border shadow-sm';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<slot />
</div>
