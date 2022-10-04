<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	const defaultClass = 'text-sm font-medium text-light-content dark:text-dark-content';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<p class={finalClass}>
	<slot />
</p>
