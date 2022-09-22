<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	const defaultClass =
		'text-sm text-light-secondary-content dark:text-dark-secondary-content transition-all duration-150';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<p class={finalClass} style={$$props.style}>
	<slot />
</p>
