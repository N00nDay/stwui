<script lang="ts">
	export let value: number;

	let radius = 7;
	let cxCy = 10;
	let width = 2;

	let circumference = radius * 2 * Math.PI;
	$: radialValue = circumference - (value / 100) * circumference;
</script>

<div
	class="h-5 w-5 inline-flex items-center justify-center overflow-hidden rounded-full bottom-5 left-5"
>
	<svg class="rotate-[-90deg] origin-center h-5 w-5">
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
			class="text-info-background dark:text-info-background"
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
</div>
