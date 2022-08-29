<script lang="ts">
	import Avatar from './Avatar.svelte';

	export let group: string[] = [];
	export let shape: 'circle' | 'rounded' | 'square' = 'circle';
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
</script>

<div
	class="flex overflow-hidden"
	class:-space-x-1={size === 'xs'}
	class:-space-x-2={size === 'sm' || size === 'md'}
	class:-space-x-3={size === 'lg' || size === 'xl'}
>
	{#each group as item}
		<Avatar
			src={item}
			{size}
			{shape}
			class="ring-2 ring-light-surface dark:ring-dark-surface transition-all duration-150"
		/>
	{/each}
</div>
