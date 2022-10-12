<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	const defaultClass = 'mx-auto max-w-xl transform overflow-hidden rounded-md pointer-events-auto';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<slot />
</div>
