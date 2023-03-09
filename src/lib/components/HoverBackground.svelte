<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	const defaultClass =
		'pointer-events-none absolute bg-light-icon-background-hover dark:bg-dark-icon-background-hover duration-150 transition-opacity h-full w-full inset-0 group-hover:opacity-100 opacity-0';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style} />
