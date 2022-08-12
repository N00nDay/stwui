<script lang="ts">
	export let withFooter = false;
</script>

<div class="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100">
	{#if withFooter}
		<div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
			<slot />
		</div>
	{:else}
		<slot />
	{/if}
</div>
