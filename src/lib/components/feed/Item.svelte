<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import Connector from './Connector.svelte';

	const defaultClass = 'relative pb-8 stwui-feed-item';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

<li class="item">
	<div class={finalClass}>
		{#if $$slots.connector}
			<slot name="connector" />
		{:else}
			<Connector />
		{/if}
		<div class="relative flex space-x-3">
			<slot name="leading" />
			<div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
				<div>
					<slot name="content" />
				</div>
				<slot name="datetime" />
			</div>
		</div>
	</div>
</li>
