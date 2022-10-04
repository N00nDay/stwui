<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	const defaultClass = 'mt-2 text-lg font-medium text-light-content dark:text-dark-content';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<h3 class={finalClass}>
	<slot />
</h3>
