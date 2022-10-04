<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	const defaultClass =
		'text-light-secondary-content dark:text-dark-secondary-content font-medium text-sm';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<legend class={finalClass} style={$$props.style}><slot />></legend>
