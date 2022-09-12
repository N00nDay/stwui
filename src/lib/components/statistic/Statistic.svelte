<script lang="ts">
	import type MaterialIcons from '../../types/material-icons';
	import numberFormatter from '../../utils/numberFormatter';
	import { Progress } from '../progress';
	import { Badge } from '../badge';

	export let title: string;
	export let icon: MaterialIcons | undefined = undefined;
	export let value: number;
	export let type: 'currency' | 'decimal' | 'percent' = 'decimal';
	export let goal: number | undefined = undefined;
	export let background: string | undefined = undefined;
	export let emphasis: string | undefined = undefined;
	export let light = false;
	export let dark = false;
	export let lastYear: number | undefined = undefined;
	export let showTrend = false;
	export let trendBackground: string | undefined = undefined;
	export let trendColor: string | undefined = undefined;

	let trendValue = !lastYear ? value : value - lastYear;
	let trendPercent = !lastYear || lastYear === 0 ? 100 : trendValue / lastYear;
	let trendIcon =
		trendValue === 0 ? 'trending_flat' : trendValue > 0 ? 'trending_up' : 'trending_down';

	let progress = !goal || goal === 0 ? 100 : (value / goal) * 100;
</script>

<div
	class="overflow-hidden rounded-md {background
		? background
		: ''} px-4 py-5 shadow-md dark:shadow-black sm:p-5 transition-all duration-150{$$props.class
		? ` ${$$props.class}`
		: ''}"
	class:bg-light-surface={light || (!dark && !light && !background)}
	class:dark:bg-light-surface={light}
	class:bg-dark-surface={dark}
	class:dark:bg-dark-surface={dark || (!dark && !light && !background)}
	style={$$props.style}
>
	<div class="relative flex flex-row items-center justify-between">
		<dt
			class="truncate text-sm font-medium transition-all duration-150"
			class:text-light-secondary-content={light || (!dark && !light)}
			class:dark:text-light-secondary-content={light}
			class:text-dark-secondary-content={dark}
			class:dark:text-dark-secondary-content={dark || (!dark && !light)}
		>
			{title}
		</dt>
		{#if icon}
			<dd class="absolute -top-3 -right-2">
				<span
					class="material-icons text-5xl transition-all duration-150 {emphasis ? emphasis : ''}"
					class:text-light-content={light || (!dark && !light && !emphasis)}
					class:dark:text-light-content={light}
					class:text-dark-content={dark}
					class:dark:text-dark-content={dark || (!dark && !light && !emphasis)}>{icon}</span
				>
			</dd>
		{/if}
	</div>
	<dd
		class="mt-1 text-3xl font-semibold tracking-tight {emphasis
			? emphasis
			: ''} transition-all duration-150"
		class:text-light-content={light || (!dark && !light && !emphasis)}
		class:dark:text-light-content={light}
		class:text-dark-content={dark}
		class:dark:text-dark-content={dark || (!dark && !light && !emphasis)}
	>
		{numberFormatter(value, {
			style: type,
			notation: 'compact',
			maximumFractionDigits: 1,
			minimumFractionDigits: 1
		})}
	</dd>
	{#if goal}
		<dd class="mt-2">
			<Progress value={progress} />
		</dd>
	{/if}
	{#if lastYear}
		<dd
			class="mt-1 text-sm flex flex-row justify-between items-center tracking-tight transition-all duration-150"
		>
			<div
				class="transition-all duration-150"
				class:text-light-secondary-content={light || (!dark && !light && !emphasis)}
				class:dark:text-light-secondary-content={light}
				class:text-dark-secondary-content={dark}
				class:dark:text-dark-secondary-content={dark || (!dark && !light && !emphasis)}
			>
				Last Year: {numberFormatter(lastYear, {
					style: type,
					notation: 'compact',
					maximumFractionDigits: 1,
					minimumFractionDigits: 1
				})}
			</div>
			{#if showTrend}
				<Badge
					type={trendIcon === 'trending_up'
						? 'success'
						: trendIcon === 'trending_down'
						? 'error'
						: 'info'}
					background={trendBackground}
					color={trendColor}
				>
					<span class="material-icons text-sm">{trendIcon}</span>
					<span
						>{numberFormatter(trendValue, {
							style: type,
							notation: 'compact',
							maximumFractionDigits: 1,
							minimumFractionDigits: 1
						})} ({numberFormatter(trendPercent, { style: 'percent' })})</span
					>
				</Badge>
			{/if}
		</dd>
	{/if}
</div>
