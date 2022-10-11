<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	const defaultClass =
		'h-8 w-8 bg-icon-background rounded-full flex items-center justify-center ring-8 ring-light-surface dark:ring-dark-surface';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<div>
	<span class={finalClass} style={$$props.style}>
		<slot name="icon" />
		<slot name="avatar" />
		<slot />
	</span>
</div>
