<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	const defaultClass =
		'mt-1 text-sm flex flex-row justify-between items-center tracking-tight transition-all duration-150';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<dd class={finalClass} style={$$props.style}>
	<slot name="value" />
	<!-- <div
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
			</div> -->
	<slot name="trend" />
	<!-- {#if showTrend}
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
			{/if} -->
</dd>
