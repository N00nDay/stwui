<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let id: string;

	function handleRedirect() {
		goto(`${$page.url.pathname}/${id}`);
	}
</script>

{#key id}
	<tr
		{id}
		class="table-row cursor-pointer hover:bg-light-icon-background-hover dark:hover:bg-dark-icon-background-hover transition-all duration-150 bg-light-surface dark:bg-dark-surface"
		on:click={handleRedirect}
		style="height: 48px; max-height: 48px;"
	>
		<slot />
	</tr>
{/key}
