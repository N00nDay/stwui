<script lang="ts">
	import { formatNumber } from '../../utils';

	export let value = 0;
	export let min = 0;
	export let max = 100;
	export let step = 1;
	export let showStep = false;
	export let type: 'info' | 'warn' | 'error' | 'success' = 'info';

	let steps = 0;
	if (showStep) {
		steps = max / step + 1;
	}
</script>

<div class={$$props.class}>
	<input
		type="range"
		{min}
		{max}
		{step}
		{value}
		class="before:content-['']"
		class:info={type === 'info'}
		class:warn={type === 'warn'}
		class:error={type === 'error'}
		class:success={type === 'success'}
	/>
	{#if showStep}
		<div class="w-full flex justify-between text-xs">
			{#each Array(steps) as _, i}
				<span
					>{formatNumber((i * step) / 100, {
						style: 'percent'
					})} |</span
				>
			{/each}
		</div>
	{/if}
</div>
