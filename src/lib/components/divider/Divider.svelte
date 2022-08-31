<script lang="ts">
	import type MaterialIcons from '$lib/types/material-icons';

	export let label: string | undefined = undefined;
	export let icon: MaterialIcons | undefined = undefined;
	export let position: 'left' | 'center' | 'right' = 'center';
	export let labelStyle: 'default' | 'title' = 'default';
</script>

<div class="relative">
	<div class="absolute inset-0 flex items-center" aria-hidden="true">
		<div
			class="w-full border-t light-border-base dark:dark-border-base transition-all duration-150"
		/>
	</div>
	{#if label || icon || $$slots.default}
		<div
			class="relative flex"
			class:justify-start={position === 'left'}
			class:justify-center={position === 'center'}
			class:justify-end={position === 'right'}
		>
			{#if label}
				<span
					class="px-2 bg-light-surface dark:bg-dark-surface text-light-content dark:text-dark-content  transition-all duration-150"
					class:text-lg={labelStyle === 'title'}
					class:font-medium={labelStyle === 'title'}
					class:text-sm={labelStyle === 'default'}
				>
					{label}
				</span>
			{:else if icon}
				<span
					class="material-icons px-2 bg-light-surface dark:bg-dark-surface text-light-content dark:text-dark-content  transition-all duration-150"
					>{icon}</span
				>
			{/if}
			<slot />
		</div>
	{/if}
</div>
