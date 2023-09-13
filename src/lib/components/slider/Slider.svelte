<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { formatNumber } from '../../utils';

	export let value = 0;
	export let min = 0;
	export let max = 100;
	export let step = 1;
	export let showStep = false;
	export let type: 'info' | 'warn' | 'error' | 'success' = 'info';
	export let disabled = false;
	// export let color: string | undefined = undefined;

	let steps = 0;
	if (showStep) {
		steps = max / step + 1;
	}

	const containerClass = 'w-full ';

	let defaultClass = '[&::-moz-range-thumb]:cursor-pointer ';
	defaultClass += '[&::-moz-range-thumb]:rounded-full ';
	defaultClass += '[&::-moz-range-thumb]:top-2/4 ';
	defaultClass += '[&::-moz-range-thumb]:translate-y-[-50%] ';
	defaultClass += '[&::-moz-range-thumb]:h-4 ';
	defaultClass += '[&::-moz-range-thumb]:w-4 ';
	defaultClass += '[&::-moz-range-thumb]:border-none ';
	defaultClass += '[&::-moz-range-thumb]:relative ';
	defaultClass += '[&::-moz-range-thumb]:bg-content ';
	defaultClass += '[&::-moz-range-thumb]:[&::-webkit-appearance]:none ';
	defaultClass += '[&::-moz-range-thumb]:bg-surface ';

	defaultClass += '[&::-webkit-slider-thumb]:top-2/4 ';
	defaultClass += '[&::-webkit-slider-thumb]:translate-y-[-50%] ';
	defaultClass += '[&::-webkit-slider-thumb]:cursor-pointer ';
	defaultClass += '[&::-webkit-slider-thumb]:border-none ';
	defaultClass += '[&::-webkit-slider-thumb]:rounded-full ';
	defaultClass += '[&::-webkit-slider-thumb]:[&::-webkit-appearance]:none ';
	defaultClass += '[&::-webkit-slider-thumb]:relative ';
	defaultClass += '[&::-webkit-slider-thumb]:h-4 ';
	defaultClass += '[&::-webkit-slider-thumb]:w-4 ';
	defaultClass += '[&::-webkit-slider-thumb]:bg-content ';
	defaultClass += '[&::-webkit-slider-thumb]:appearance-none ';
	defaultClass += '[&::-webkit-slider-thumb]:bg-surface ';

	defaultClass += '[&::-moz-range-track]:h-6 ';
	defaultClass += '[&::-moz-range-track]:w-full ';
	defaultClass += '[&::-moz-range-track]:rounded-lg ';
	defaultClass += '[&::-moz-range-track]:mr-2 ';
	defaultClass += '[&::-moz-range-track]:rounded-lg ';

	defaultClass += '[&::-webkit-slider-runnable-track]:h-6 ';
	defaultClass += '[&::-webkit-slider-runnable-track]:w-full ';
	defaultClass += '[&::-webkit-slider-runnable-track]:rounded-lg ';
	defaultClass += '[&::-webkit-slider-runnable-track]:mr-2 ';
	defaultClass += '[&::-webkit-slider-runnable-track]:rounded-lg ';

	defaultClass += '[&::-webkit-slider-thumb]:ml-1 ';
	defaultClass += '[&::-moz-range-thumb]:ml-1 ';

	defaultClass += 'before:content-[""] ';
	defaultClass += 'before:bg-default ';
	defaultClass += 'before:w-full ';
	defaultClass += 'before:h-2 ';
	defaultClass += 'before:rounded-lg ';
	defaultClass += 'before:top-2/4 ';
	defaultClass += 'before:translate-y-[-50%] ';
	defaultClass += 'before:absolute ';

	defaultClass += 'relative ';
	defaultClass += 'rounded-3xl ';
	defaultClass += 'bg-transparent ';
	defaultClass += 'overflow-hidden ';
	defaultClass += 'w-full ';
	defaultClass += 'appearance-none ';

	defaultClass += '[&::-webkit-slider-thumb]:ring-4 ';
	defaultClass += '[&::-moz-range-thumb]:ring-4 ';

	let infoProgressClass = '[&::-webkit-slider-thumb]:text-info ';
	infoProgressClass += '[&::-moz-range-thumb]:text-info ';
	infoProgressClass += '[&::-webkit-slider-thumb]:shadow-inset-info ';
	infoProgressClass += '[&::-moz-range-thumb]:shadow-inset-info ';
	infoProgressClass += '[&::-webkit-slider-thumb]:ring-info ';
	infoProgressClass += '[&::-moz-range-thumb]:ring-info ';
	infoProgressClass += '[&::-webkit-slider-thumb]:shadow-[var(--focus-shadow),0_0)] ';
	infoProgressClass += '[&::-moz-range-thumb]:shadow-[var(--focus-shadow),0_0)] ';
	infoProgressClass += '[&::-webkit-slider-thumb]:shadow-[calc(100rem_*_-1_-_0.5rem)_0_0_100rem] ';
	infoProgressClass += '[&::-moz-range-thumb]:shadow-[calc(100rem_*_-1_-_0.5rem)_0_0_100rem] ';

	let warnProgressClass = '[&::-webkit-slider-thumb]:text-warn ';
	warnProgressClass += '[&::-moz-range-thumb]:text-warn ';
	warnProgressClass += '[&::-webkit-slider-thumb]:shadow-inset-warn ';
	warnProgressClass += '[&::-moz-range-thumb]:shadow-inset-warn ';
	warnProgressClass += '[&::-webkit-slider-thumb]:ring-warn ';
	warnProgressClass += '[&::-moz-range-thumb]:ring-warn ';
	warnProgressClass += '[&::-webkit-slider-thumb]:shadow-[var(--focus-shadow),0_0)] ';
	warnProgressClass += '[&::-moz-range-thumb]:shadow-[var(--focus-shadow),0_0)] ';
	warnProgressClass += '[&::-webkit-slider-thumb]:shadow-[calc(100rem_*_-1_-_0.5rem)_0_0_100rem] ';
	warnProgressClass += '[&::-moz-range-thumb]:shadow-[calc(100rem_*_-1_-_0.5rem)_0_0_100rem] ';

	let errorProgressClass = '[&::-webkit-slider-thumb]:text-error ';
	errorProgressClass += '[&::-moz-range-thumb]:text-error ';
	errorProgressClass += '[&::-webkit-slider-thumb]:shadow-inset-error ';
	errorProgressClass += '[&::-moz-range-thumb]:shadow-inset-error ';
	errorProgressClass += '[&::-webkit-slider-thumb]:ring-error ';
	errorProgressClass += '[&::-moz-range-thumb]:ring-error ';
	errorProgressClass += '[&::-webkit-slider-thumb]:shadow-[var(--focus-shadow),0_0)] ';
	errorProgressClass += '[&::-moz-range-thumb]:shadow-[var(--focus-shadow),0_0)] ';
	errorProgressClass += '[&::-webkit-slider-thumb]:shadow-[calc(100rem_*_-1_-_0.5rem)_0_0_100rem] ';
	errorProgressClass += '[&::-moz-range-thumb]:shadow-[calc(100rem_*_-1_-_0.5rem)_0_0_100rem] ';

	let successProgressClass = '[&::-webkit-slider-thumb]:text-success ';
	successProgressClass += '[&::-moz-range-thumb]:text-success ';
	successProgressClass += '[&::-webkit-slider-thumb]:shadow-inset-success ';
	successProgressClass += '[&::-moz-range-thumb]:shadow-inset-success ';
	successProgressClass += '[&::-webkit-slider-thumb]:ring-success ';
	successProgressClass += '[&::-moz-range-thumb]:ring-success ';
	successProgressClass += '[&::-webkit-slider-thumb]:shadow-[var(--focus-shadow),0_0)] ';
	successProgressClass += '[&::-moz-range-thumb]:shadow-[var(--focus-shadow),0_0)] ';
	successProgressClass +=
		'[&::-webkit-slider-thumb]:shadow-[calc(100rem_*_-1_-_0.5rem)_0_0_100rem] ';
	successProgressClass += '[&::-moz-range-thumb]:shadow-[calc(100rem_*_-1_-_0.5rem)_0_0_100rem] ';

	let defaultProgressClass = '[&::-webkit-slider-thumb]:text-default ';
	defaultProgressClass += '[&::-moz-range-thumb]:text-default ';
	defaultProgressClass += '[&::-webkit-slider-thumb]:shadow-inset-default ';
	defaultProgressClass += '[&::-moz-range-thumb]:shadow-inset-default ';
	defaultProgressClass += '[&::-webkit-slider-thumb]:ring-default ';
	defaultProgressClass += '[&::-moz-range-thumb]:ring-default ';
	defaultProgressClass += '[&::-webkit-slider-thumb]:shadow-[var(--focus-shadow),0_0)] ';
	defaultProgressClass += '[&::-moz-range-thumb]:shadow-[var(--focus-shadow),0_0)] ';
	defaultProgressClass +=
		'[&::-webkit-slider-thumb]:shadow-[calc(100rem_*_-1_-_0.5rem)_0_0_100rem] ';
	defaultProgressClass += '[&::-moz-range-thumb]:shadow-[calc(100rem_*_-1_-_0.5rem)_0_0_100rem] ';

	// let customProgressClass = `[&::-webkit-slider-thumb]:text-[${color}] `;
	// customProgressClass += `[&::-moz-range-thumb]:text-[${color}] `;
	// customProgressClass += `[&::-webkit-slider-thumb]:shadow-inset-[${color}] `;
	// customProgressClass += `[&::-moz-range-thumb]:shadow-inset-[${color}] `;
	// customProgressClass += `[&::-webkit-slider-thumb]:ring-[${color}] `;
	// customProgressClass += `[&::-moz-range-thumb]:ring-[${color}] `;
	// customProgressClass += '[&::-webkit-slider-thumb]:shadow-[var(--focus-shadow),0_0)] ';
	// customProgressClass += '[&::-moz-range-thumb]:shadow-[var(--focus-shadow),0_0)] ';
	// customProgressClass +=
	// 	'[&::-webkit-slider-thumb]:shadow-[calc(100rem_*_-1_-_0.5rem)_0_0_100rem] ';
	// customProgressClass += '[&::-moz-range-thumb]:shadow-[calc(100rem_*_-1_-_0.5rem)_0_0_100rem] ';

	$: finalContainerClass = twMerge(containerClass, $$props.class);

	$: finalClass = twMerge(
		defaultClass,

		type === 'info' && !disabled ? infoProgressClass : false,
		type === 'warn' && !disabled ? warnProgressClass : false,
		type === 'error' && !disabled ? errorProgressClass : false,
		type === 'success' && !disabled ? successProgressClass : false,

		// type === undefined && color === undefined && !disabled ? defaultProgressClass : false,

		// color !== undefined && !disabled ? customProgressClass : false,

		$$props.class
	);
</script>

<div class={finalContainerClass} style={$$props.style}>
	<input
		type="range"
		{min}
		{max}
		{step}
		bind:value
		{disabled}
		class={finalClass}
		class:default={disabled}
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
