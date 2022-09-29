<script lang="ts">
	import { validateSlots } from '$lib/utils/validateSlots';
	import { twMerge } from 'tailwind-merge';

	validateSlots($$slots, ['title', 'icon', 'value', 'default', 'goal', 'comparison'], 'Statistic');

	const defaultClass =
		'overflow-hidden rounded-md px-4 py-5 shadow-md dark:shadow-black sm:p-5 bg-light-surface dark:bg-dark-surface transition-all duration-150';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class={finalClass} style={$$props.style}>
	{#if $$slots.title || $$slots.icon}
		<div class="relative flex flex-row items-center justify-between">
			<slot name="title" />
			<slot name="icon" />
		</div>
	{/if}
	<slot name="value" />
	<slot />
	<slot name="goal" />
	<slot name="comparison" />
</div>
