<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	const defaultClass =
		'absolute bg-light-icon-background-hover dark:bg-dark-icon-background-hover left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] duration-150 transition-size h-0 w-0 group-hover:h-full group-hover:w-full';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style} />
