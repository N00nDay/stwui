<script lang="ts">
	export let value: number = 0;
	export let type: 'info' | 'warn' | 'error' | 'success' = 'info';
	export let radial = false;
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
	export let displayValue = false;
	export let indeterminate = false;

	let radius =
		size === 'xs' ? 30 : size === 'sm' ? 34 : size === 'md' ? 40 : size === 'lg' ? 46 : 50;
	let cxCy = size === 'xs' ? 32 : size === 'sm' ? 40 : size === 'md' ? 48 : size === 'lg' ? 56 : 64;
	let width = size === 'xs' ? 5 : size === 'sm' ? 8 : size === 'md' ? 11 : size === 'lg' ? 14 : 17;

	let circumference = radius * 2 * Math.PI;
	$: radialValue = circumference - (value / 100) * circumference;
</script>

{#if !radial}
	<div class="flex flex-row items-center justify-start stwui-progress">
		<div
			class="rounded-xl overflow-hidden bg-default flex-grow"
			class:mr-2={displayValue}
			class:h-2={size === 'md'}
			class:h-1.5={size === 'sm'}
			class:h-1={size === 'xs'}
			class:h-2.5={size === 'lg'}
			class:h-3={size === 'xl'}
			class:relative={indeterminate}
		>
			<div
				class="h-full rounded-xl"
				class:bg-info={type === 'info'}
				class:bg-warn={type === 'warn'}
				class:bg-error={type === 'error'}
				class:bg-success={type === 'success'}
				class:indeterminate
				style="width: {indeterminate ? 30 : value}%"
			/>
		</div>
		{#if displayValue && !indeterminate}
			<span class="flex-shrink">{value}%</span>
		{/if}
	</div>
{:else}
	<div
		class="inline-flex items-center justify-center overflow-hidden rounded-full bottom-5 left-5 stwui-progress-radial"
	>
		<svg
			class="rotate-[-90deg] origin-center"
			class:h-16={size === 'xs'}
			class:w-16={size === 'xs'}
			class:h-20={size === 'sm'}
			class:w-20={size === 'sm'}
			class:h-24={size === 'md'}
			class:w-24={size === 'md'}
			class:h-28={size === 'lg'}
			class:w-28={size === 'lg'}
			class:h-32={size === 'xl'}
			class:w-32={size === 'xl'}
		>
			<circle
				class="text-default"
				stroke-width={width}
				stroke="currentColor"
				fill="transparent"
				r={radius}
				cx={cxCy}
				cy={cxCy}
			/>
			<circle
				class:text-info={type === 'info'}
				class:text-warn={type === 'warn'}
				class:text-error={type === 'error'}
				class:text-success={type === 'success'}
				stroke-width={width}
				stroke-dasharray={circumference}
				stroke-dashoffset={radialValue}
				stroke-linecap="round"
				stroke="currentColor"
				fill="transparent"
				r={radius}
				cx={cxCy}
				cy={cxCy}
			/>
		</svg>
		<span
			class="absolute font-medium text-content"
			class:text-base={size === 'xs' || size === 'sm'}
			class:text-lg={size === 'md'}
			class:text-2xl={size === 'lg' || size === 'xl'}
			class:hidden={!displayValue}
		>
			{value}%
		</span>
	</div>
{/if}

<style>
	.indeterminate {
		position: absolute;
		animation: progress-loading 2s infinite;
	}

	@keyframes progress-loading {
		0% {
			left: -30%;
		}
		100% {
			left: 100%;
		}
	}
</style>
