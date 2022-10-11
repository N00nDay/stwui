<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	const defaultClass =
		'connector absolute top-4 left-4 -ml-px h-full w-0.5 bg-light-border dark:bg-dark-border';
	$: finalClass = twMerge(defaultClass, $$props.cass);
</script>

<span class={finalClass} style={$$props.style} />
