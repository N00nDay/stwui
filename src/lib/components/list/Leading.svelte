<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	const defaultClass = 'h-10 w-10';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<slot name="icon" />
	<slot name="avatar" />
	<slot />
</div>
