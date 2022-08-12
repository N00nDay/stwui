<script lang="ts">
	import { useCardContext } from './Card.svelte';
	import { useCardActionsContext } from './Actions.svelte';

	useCardContext('CardAction');
	useCardActionsContext('CardAction');
</script>

<div
	on:click
	class="transition-colors duration-200 w-full h-full flex flex-col py-4 items-center justify-center cursor-pointer hover:text-blue-600{$$props.class
		? ` ${$$props.class}`
		: ''}"
>
	<slot />
</div>
