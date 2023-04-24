<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	const defaultClass =
		'pointer-events-none absolute bg-hover	duration-150 transition-opacity h-full w-full inset-0 group-hover:opacity-[0.07] group-focus:opacity-[0.07] opacity-0';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style} />
