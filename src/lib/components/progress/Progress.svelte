<script lang="ts">
	export let value: number;
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
	let radialValue = circumference - (value / 100) * circumference;
</script>

{#if !radial}
	<div class="flex flex-row items-center justify-start">
		<div
			class="rounded-xl overflow-hidden bg-light-icon-background dark:bg-dark-icon-background flex-grow"
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
				class:bg-info-background={type === 'info'}
				class:dark:bg-info-background={type === 'info'}
				class:bg-warn-background={type === 'warn'}
				class:dark:bg-warn-background={type === 'warn'}
				class:bg-error-background={type === 'error'}
				class:dark:bg-error-background={type === 'error'}
				class:bg-success-background={type === 'success'}
				class:dark:bg-success-background={type === 'success'}
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
		class="inline-flex items-center justify-center overflow-hidden rounded-full bottom-5 left-5 "
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
				class="text-light-icon-background dark:text-dark-icon-background"
				stroke-width={width}
				stroke="currentColor"
				fill="transparent"
				r={radius}
				cx={cxCy}
				cy={cxCy}
			/>
			<circle
				class:text-info-background={type === 'info'}
				class:dark:text-info-background={type === 'info'}
				class:text-warn-background={type === 'warn'}
				class:dark:text-warn-background={type === 'warn'}
				class:text-error-background={type === 'error'}
				class:dark:text-error-background={type === 'error'}
				class:text-success-background={type === 'success'}
				class:dark:text-success-background={type === 'success'}
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
			class="absolute font-medium text-light-content dark:text-dark-content"
			class:text-base={size === 'xs' || size === 'sm'}
			class:text-lg={size === 'md'}
			class:text-2xl={size === 'lg' || size === 'xl'}
		>
			{value}%
		</span>
	</div>
{/if}

<style>
	.indeterminate {
		@apply absolute;
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
