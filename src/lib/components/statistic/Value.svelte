<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	const defaultClass =
		'mt-1 text-3xl font-semibold tracking-tight transition-all duration-150 text-light-content dark:text-dark-content';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<dd class={finalClass} style={$$props.style}>
	<slot />
</dd>
