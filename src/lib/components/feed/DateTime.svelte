<script lang="ts">
	import { formatDate } from '$lib/utils/formatDate';
	import { twMerge } from 'tailwind-merge';

	export let date: Date;

	const defaultClass =
		'whitespace-nowrap text-right text-sm text-light-secondary-content dark:text-dark-secondary-content';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass}>
	<time datetime={date.toISOString()}>{formatDate(date)}</time>
</div>
