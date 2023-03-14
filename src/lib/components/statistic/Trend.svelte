<script lang="ts">
	import { trending_down, trending_neutral, trending_up } from '$lib/icons';
	import { twMerge } from 'tailwind-merge';
	import Badge from '../badge';
	import TrendIcon from './TrendIcon.svelte';

	export let trend: 'up' | 'down' | 'neutral' | undefined = undefined;
	export let showIcon = true;

	const trendUpClass = 'bg-success text-success-content';
	const trendDownClass = 'bg-error text-error-content';
	const trendEvenClass = 'bg-info text-info-content';

	$: finalClass = twMerge(
		trend === 'up' ? trendUpClass : false,
		trend === 'down' ? trendDownClass : false,
		trend === 'neutral' ? trendEvenClass : false,

		$$props.class
	);
</script>

<Badge class={finalClass} style={$$props.style}>
	{#if showIcon}
		{#if $$slots.icon}
			<span class="mr-1">
				<slot name="icon" />
			</span>
		{:else}
			<span class="mr-1">
				{#if trend === 'up'}
					<TrendIcon data={trending_up} />
				{:else if trend === 'down'}
					<TrendIcon data={trending_down} />
				{:else}
					<TrendIcon data={trending_neutral} />
				{/if}
			</span>
		{/if}
	{/if}
	<span><slot /></span>
</Badge>
