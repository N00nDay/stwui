<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let label = 'No Options Available';

	const defaultClass =
		'group text-light-content dark:text-dark-content select-none p-0.5 w-full relative py-1.5 pl-2.5 pr-7 w-full rounded-md overflow-hidden';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<li class={finalClass} role="option" aria-selected="false">
	<span class="font-normal block truncate"> {label} </span>
</li>
