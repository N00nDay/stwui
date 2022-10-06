<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let id: string;

	const defaultClass =
		'table-row h-12 max-h-[3rem] cursor-pointer hover:bg-light-icon-background-hover dark:hover:bg-dark-icon-background-hover bg-light-surface dark:bg-dark-surface';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

{#key id}
	<tr {id} class={finalClass} on:click style="height: 48px; max-height: 48px;">
		<slot />
	</tr>
{/key}
