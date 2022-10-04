<script lang="ts">
	import { scale } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	const defaultClass =
		'origin-top-right absolute z-10 border light-border dark:dark-border right-0 mt-2 w-56 p-1 rounded-md shadow-xl dark:shadow-black py-1 bg-light-surface dark:bg-dark-surface';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div
	class={finalClass}
	style={$$props.style}
	in:scale={{ start: 0.9, duration: 100, delay: 150 }}
	out:scale={{ start: 0.95, duration: 75 }}
	role="menu"
	tabindex="-1"
>
	<slot />
</div>
