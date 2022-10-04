<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	const defaultClass =
		'text-sm px-2 bg-light-surface dark:bg-dark-surface text-light-content dark:text-dark-content';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<span class={finalClass}>
	<slot />
</span>
