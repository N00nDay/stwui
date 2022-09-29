<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	const defaultClass =
		'transition-all duration-150 text-light-secondary-content dark:text-dark-secondary-content';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	<slot />
</div>
