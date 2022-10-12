<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	const defaultClass =
		'mt-1 text-3xl font-semibold tracking-tight text-light-content dark:text-dark-content';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<dd class={finalClass} style={$$props.style}>
	<slot />
</dd>
