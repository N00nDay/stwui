<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import Badge from '../badge';

	export let icon: 'trending_up' | 'trending_down' | undefined = undefined;

	let defaultClass = 'bg-opacity-20 dark:bg-opacity-20';
	if (icon === 'trending_up') {
		defaultClass =
			'bg-success-background dark:bg-dark-success-background text-success-content dark:text-dark-success-content';
	} else if (icon === 'trending_down') {
		defaultClass =
			'bg-error-background dark:bg-dark-error-background text-error-content dark:text-dark-error-content';
	} else {
		defaultClass =
			'bg-info-background dark:bg-dark-info-background text-info-content dark:text-dark-info-content';
	}
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<Badge class={finalClass} style={$$props.style}>
	<span class="material-icons text-sm mr-1">{icon}</span>
	<span><slot /></span>
</Badge>
