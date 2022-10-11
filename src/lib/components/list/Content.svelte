<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	const defaultClass = 'ml-3 flex flex-grow flex-col justify-center items-start';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<slot name="title" />
	<slot name="description" />
	<slot />
</div>
