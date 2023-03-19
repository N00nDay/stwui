<script lang="ts">
	interface IBreakPoints {
		xs: boolean;
		sm: boolean;
		md: boolean;
		lg: boolean;
	}

	export let breakpoints: IBreakPoints;
</script>

<div
	class="w-full min-w-[240px]"
	class:max-w-[24%]={breakpoints.lg}
	class:max-w-[49%]={breakpoints.md && !breakpoints.lg}
>
	<slot />
</div>
